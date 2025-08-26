// iptest.js
// IP Addressing & Subnetting Test
// Generates 100 unique questions programmatically with correct answers & explanations.
// Requirements:
// - 100 MCQs (30 easy, 40 medium, 30 hard distributed by template)
// - 60s per question, auto-advance when time ends
// - 100 numbered navigation buttons (green)
// - Back / Next / Submit
// - Show results + explanations for wrong answers

/* -------------------------
   Utility functions
   ------------------------- */

function seededRandom(seed) {
  // simple LCG
  let s = seed >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function ipToInt(ip) {
  return ip.split('.').reduce((acc, p) => (acc << 8) + Number(p), 0) >>> 0;
}
function intToIp(i) {
  return [(i >>> 24) & 255, (i >>> 16) & 255, (i >>> 8) & 255, i & 255].join('.');
}
function prefixToMask(prefix) {
  let mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  return intToIp(mask);
}
function maskToPrefix(mask) {
  const v = ipToInt(mask);
  // count ones
  let count = 0, tmp = v;
  for (let i = 0; i < 32; i++) {
    if ((tmp & (1 << 31)) !== 0) count++;
    tmp = (tmp << 1) >>> 0;
  }
  return count;
}
function wildcardFromMask(mask) {
  return intToIp((~ipToInt(mask)) >>> 0);
}
function networkAddress(ip, prefix) {
  const ipn = ipToInt(ip);
  const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  return intToIp(ipn & mask);
}
function broadcastAddress(ip, prefix) {
  const ipn = ipToInt(ip);
  const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  return intToIp((ipn & mask) | (~mask >>> 0));
}
function hostsForPrefix(prefix) {
  const bits = 32 - prefix;
  if (bits === 0) return 1; // /32 => 1 address
  if (bits === 1) return 2; // /31 special but we'll consider usable? for our Qs we treat classic: usable hosts = 2^bits - 2 when bits>=2
  return Math.max(0, Math.pow(2, bits) - 2);
}
function totalAddresses(prefix) {
  return Math.pow(2, 32 - prefix);
}
function isPrivate(ip) {
  const i = ipToInt(ip);
  // 10.0.0.0/8
  if ((i & 0xff000000) === 0x0a000000) return true;
  // 172.16.0.0/12
  if ((i & 0xfff00000) === 0xac100000) return true;
  // 192.168.0.0/16
  if ((i & 0xffff0000) === 0xc0a80000) return true;
  return false;
}
function niceNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

/* -------------------------
   Question generation templates
   Each returns an object:
   {question, options: [], answer: index, explanation}
   ------------------------- */

function q_mask_from_prefix(prefix) {
  const mask = prefixToMask(prefix);
  return {
    question: `What is the subnet mask for prefix /${prefix}?`,
    options: shuffleUnique([
      mask,
      prefixToMask(Math.max(0, prefix - 1)),
      prefixToMask(Math.min(32, prefix + 1)),
      wildcardFromMask(mask)
    ]),
    answer: null, // fill later
    explanation: `A prefix /${prefix} corresponds to a mask of ${mask}.`
  };
}

function q_prefix_from_mask(mask) {
  const prefix = maskToPrefix(mask);
  return {
    question: `What is the prefix length for subnet mask ${mask}?`,
    options: shuffleUnique([String(prefix), String(Math.max(0, prefix - 1)), String(Math.min(32, prefix + 1)), String(prefix === 0 ? 32 : prefix)]),
    answer: null,
    explanation: `Mask ${mask} has ${prefix} leading ones, so prefix is /${prefix}.`
  };
}

function q_network_broadcast(ip, prefix, ask = 'network') {
  const net = networkAddress(ip, prefix);
  const bcast = broadcastAddress(ip, prefix);
  if (ask === 'network') {
    return {
      question: `Given IP ${ip}/${prefix}, what is the network address?`,
      options: shuffleUnique([net, intToIp(ipToInt(net) + 1), bcast, intToIp(ipToInt(net) + 2)]),
      answer: null,
      explanation: `The network address is the IP with host bits set to 0: ${net}.`
    };
  } else {
    return {
      question: `Given IP ${ip}/${prefix}, what is the broadcast address?`,
      options: shuffleUnique([bcast, intToIp(ipToInt(bcast) - 1), net, intToIp(ipToInt(bcast) - 2)]),
      answer: null,
      explanation: `Broadcast address is network address with host bits set to 1: ${bcast}.`
    };
  }
}

function q_hosts_count(prefix) {
  const hosts = hostsForPrefix(prefix);
  return {
    question: `How many usable host addresses are in a /${prefix} subnet (classic calculation)?`,
    options: shuffleUnique([String(hosts), String(Math.max(0, hosts - 1)), String(hosts + 2), String(Math.max(0, Math.floor(hosts / 2)))]),
    answer: null,
    explanation: `A /${prefix} has ${totalAddresses(prefix)} total addresses; usable hosts (classic) = 2^{32-${prefix}} - 2 = ${hosts}.`
  };
}

function q_wildcard(mask) {
  const wildcard = wildcardFromMask(mask);
  return {
    question: `What is the wildcard mask for subnet mask ${mask}?`,
    options: shuffleUnique([wildcard, prefixToMask(maskToPrefix(mask) - 1), prefixToMask(maskToPrefix(mask) + 1), mask]),
    answer: null,
    explanation: `Wildcard mask is the bitwise NOT of subnet mask: ${wildcard}.`
  };
}

function q_next_subnet(ip, prefix, newPrefix) {
  // asks for next subnet after the current network when subnetting to newPrefix
  const net = networkAddress(ip, newPrefix); // starting subnet containing ip
  // compute next subnet network: add block size
  const block = totalAddresses(newPrefix);
  const nextNetInt = (Math.floor(ipToInt(ip) / block) + 1) * block;
  const nextNet = intToIp(nextNetInt >>> 0);
  return {
    question: `If you subnet into /${newPrefix} networks and ${ip} falls in one subnet, what is the next subnet's network address after the current /${newPrefix}?`,
    options: shuffleUnique([nextNet, intToIp(nextNetInt - block), intToIp(nextNetInt + block), intToIp(nextNetInt + 1)]),
    answer: null,
    explanation: `With /${newPrefix}, block size is ${block}. Next subnet's network address = ${nextNet}.`
  };
}

function q_public_or_private(ip) {
  return {
    question: `Is the IP ${ip} a Private or Public address?`,
    options: shuffleUnique([isPrivate(ip) ? 'Private' : 'Public', isPrivate(ip) ? 'Public' : 'Private', 'Reserved', 'Loopback']),
    answer: null,
    explanation: `${ip} is ${isPrivate(ip) ? 'a Private' : 'a Public'} address based on standard RFC private ranges.`
  };
}

function q_binary_prefix(prefix) {
  const mask = prefixToMask(prefix);
  const binary = ipToInt(mask).toString(2).padStart(32, '0').match(/.{1,8}/g).join('.');
  return {
    question: `What is the binary representation (8-bit octets) of mask /${prefix}?`,
    options: shuffleUnique([binary, ipToInt(prefixToMask(Math.max(0, prefix - 1))).toString(2).padStart(32, '0').match(/.{1,8}/g).join('.'), '11111111.11111111.11111111.11111111', ipToInt(prefixToMask(Math.min(32, prefix + 1))).toString(2).padStart(32, '0').match(/.{1,8}/g).join('.')]),
    answer: null,
    explanation: `Mask /${prefix} in binary (octets) is: ${binary}.`
  };
}

function q_subnet_count(oldPrefix, newPrefix) {
  const count = Math.pow(2, (newPrefix - oldPrefix));
  return {
    question: `How many /${newPrefix} subnets can you get from one /${oldPrefix} network?`,
    options: shuffleUnique([String(count), String(Math.max(1, count - 1)), String(count * 2), String(Math.floor(count / 2))]),
    answer: null,
    explanation: `Splitting /${oldPrefix} into /${newPrefix} yields 2^{${newPrefix}-${oldPrefix}} = ${count} subnets.`
  };
}

function q_vlsm_host_requirement(prefixList) {
  // prefixList is array of required host numbers, we ask which prefix fits for specific host count.
  // We'll take first host requirement
  const need = prefixList[0];
  // find smallest prefix that supports need hosts (usable)
  let chosenPrefix = 32;
  for (let p = 32; p >= 0; p--) {
    if (hostsForPrefix(p) >= need) {
      chosenPrefix = p;
    }
  }
  return {
    question: `For a subnet requiring at least ${need} usable hosts, which prefix should you choose (classic usable host calculation)?`,
    options: shuffleUnique([`/${chosenPrefix}`, `/${Math.max(0, chosenPrefix - 1)}`, `/${Math.min(32, chosenPrefix + 1)}`, '/32']),
    answer: null,
    explanation: `A /${chosenPrefix} provides ${hostsForPrefix(chosenPrefix)} usable hosts which meets the requirement of ${need}.`
  };
}

/* -------------------------
   Helpers to assemble and shuffle
   ------------------------- */

function shuffle(array, rnd) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor((rnd ? rnd() : Math.random()) * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function shuffleUnique(arr) {
  // remove duplicates then shuffle
  const u = Array.from(new Set(arr));
  return shuffle(u.slice());
}

/* -------------------------
   Build the full questions array (100 items)
   We'll use multiple templates to ensure variety.
   ------------------------- */

function generateIPTestQuestions() {
  const rand = seededRandom(123456); // deterministic generator
  const questionsArr = [];
  // we'll create pools of random base ips and prefixes
  const baseNetworks = [
    { ip: '192.168.5.66', pref: 24 },
    { ip: '10.10.5.7', pref: 16 },
    { ip: '172.16.9.30', pref: 20 },
    { ip: '192.168.100.200', pref: 26 },
    { ip: '10.0.0.129', pref: 25 },
    { ip: '172.31.255.254', pref: 16 },
    { ip: '100.64.5.10', pref: 10 }, // CGNAT range (not private in our isPrivate)
    { ip: '192.0.2.1', pref: 24 },
    { ip: '198.51.100.50', pref: 24 },
    { ip: '203.0.113.10', pref: 24 }
  ];

  // helper to pick a random base
  function pickBase() {
    return baseNetworks[Math.floor(rand() * baseNetworks.length)];
  }

  // difficulty counters: easy 30, medium 40, hard 30
  let targetEasy = 30, targetMedium = 40, targetHard = 30;
  let created = 0;

  // We'll create a mixture of question types until count reaches 100
  while (created < 100) {
    // decide difficulty by remaining quotas
    const remain = 100 - created;
    const pick = rand();
    let difficulty;
    if (targetEasy && (pick < 0.33 || targetEasy >= remain)) {
      difficulty = 'easy';
      targetEasy--;
    } else if (targetMedium && (pick < 0.66 || targetMedium >= remain)) {
      difficulty = 'medium';
      targetMedium--;
    } else {
      difficulty = 'hard';
      targetHard--;
    }

    // choose template based on difficulty and created index to mix variety
    const t = Math.floor(rand() * 8); // choose among templates
    const base = pickBase();
    const ip = base.ip;
    const pref = base.pref;

    let qObj = null;
    switch (t) {
      case 0:
        // mask from prefix
        const p0 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 5) - 2)));
        qObj = q_mask_from_prefix(p0);
        break;
      case 1:
        // prefix from mask
        const p1 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 5) - 2)));
        qObj = q_prefix_from_mask(prefixToMask(p1));
        break;
      case 2:
        // network address
        {
          const p2 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 6) - 3)));
          qObj = q_network_broadcast(ip, p2, 'network');
        }
        break;
      case 3:
        // broadcast address
        {
          const p3 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 6) - 3)));
          qObj = q_network_broadcast(ip, p3, 'broadcast');
        }
        break;
      case 4:
        // hosts count
        {
          const p4 = Math.max(2, Math.min(30, pref + (Math.floor(rand() * 6) - 3)));
          qObj = q_hosts_count(p4);
        }
        break;
      case 5:
        // wildcard mask
        {
          const p5 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 5) - 2)));
          qObj = q_wildcard(prefixToMask(p5));
        }
        break;
      case 6:
        // subnetting count: how many /new from /old
        {
          const oldP = Math.max(8, Math.min(22, pref + (Math.floor(rand() * 3) - 1)));
          const newP = Math.max(oldP + 1, Math.min(30, oldP + 1 + Math.floor(rand() * 4)));
          qObj = q_subnet_count(oldP, newP);
        }
        break;
      case 7:
        // next subnet
        {
          const p7 = Math.max(8, Math.min(30, pref + (Math.floor(rand() * 6) - 3)));
          const newPrefix = Math.max(p7 + 1, Math.min(30, p7 + 1 + Math.floor(rand() * 3)));
          qObj = q_next_subnet(ip, p7, newPrefix);
        }
        break;
      default:
        qObj = q_mask_from_prefix(24);
    }

    // fill answer: find correct option index by checking equality or numeric matching
    // We'll look for exact match comparing strings normalized
    const optStrings = qObj.options.map(o => String(o));
    const correctStr = (() => {
      // detect template by question content
      const q = qObj.question;
      if (/subnet mask for prefix \/(\d+)/i.test(q)) {
        const prefMatch = q.match(/\/(\d+)/);
        return prefixToMask(Number(prefMatch[1]));
      }
      if (/prefix length for subnet mask ([0-9.]+)/i.test(q)) {
        const m = q.match(/mask ([0-9.]+)/)[1];
        return String(maskToPrefix(m));
      }
      if (/what is the network address/i.test(q)) {
        const ipMatch = q.match(/Given IP ([0-9.]+)\/(\d+)/);
        return networkAddress(ipMatch[1], Number(ipMatch[2]));
      }
      if (/what is the broadcast address/i.test(q)) {
        const ipMatch = q.match(/Given IP ([0-9.]+)\/(\d+)/);
        return broadcastAddress(ipMatch[1], Number(ipMatch[2]));
      }
      if (/How many usable host addresses.*\/(\d+)/i.test(q)) {
        const prefM = q.match(/\/(\d+)/)[1];
        return String(hostsForPrefix(Number(prefM)));
      }
      if (/wildcard mask for subnet mask ([0-9.]+)/i.test(q)) {
        const m = q.match(/mask ([0-9.]+)/)[1];
        return wildcardFromMask(m);
      }
      if (/How many \/(\d+) subnets can you get from one \/(\d+)/i.test(q)) {
        const mm = q.match(/\/(\d+) subnets can you get from one \/(\d+)/);
        if (mm) {
          const newP = Number(mm[1]), oldP = Number(mm[2]);
          return String(Math.pow(2, newP - oldP));
        }
      }
      if (/next subnet/i.test(q)) {
        // extract nextNet from explanation we built earlier (it's deterministic)
        // fallback: take option that looks like IP network (has .)
        for (const o of optStrings) if (o.match(/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/)) return o;
      }
      return null;
    })();

    // if correctStr found, find matching index
    let ansIndex = 0;
    if (correctStr !== null) {
      ansIndex = optStrings.indexOf(String(correctStr));
      if (ansIndex === -1) {
        // fallback: try numeric comparisons (useful for host counts)
        for (let i = 0; i < optStrings.length; i++) {
          if (Number(optStrings[i]) === Number(correctStr)) {
            ansIndex = i;
            break;
          }
        }
      }
    } else {
      // last-resort: choose first option as correct (shouldn't happen often)
      ansIndex = 0;
    }

    // set answer and correct explanation string
    qObj.answer = ansIndex;
    // refine explanation (if contains placeholders)
    if (!qObj.explanation || qObj.explanation.length < 3) {
      qObj.explanation = "Refer to standard IP addressing/subnetting rules.";
    }

    // push and increment
    questionsArr.push({
      question: qObj.question,
      options: qObj.options,
      answer: qObj.answer,
      explanation: qObj.explanation
    });

    created++;
  }

  // Ensure length 100
  if (questionsArr.length > 100) questionsArr.length = 100;
  return questionsArr;
}

/* -------------------------
   Test UI & logic using generated questions
   ------------------------- */

const QUESTIONS = generateIPTestQuestions(); // 100 items
const QCOUNT = QUESTIONS.length;

let currentIndex = 0;
let userAnswers = new Array(QCOUNT).fill(null);
let perQuestionTimer = null;
let timeLeft = 60;
let running = false;

// DOM references
const qEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const navEl = document.getElementById('navigation');
const timerEl = document.getElementById('timer');
const resultEl = document.getElementById('result');

// build navigation buttons
function buildNav() {
  navEl.innerHTML = '';
  for (let i = 0; i < QCOUNT; i++) {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = i + 1;
    btn.title = `Go to Q${i + 1}`;
    btn.onclick = () => {
      saveAnswer();
      gotoQuestion(i);
    };
    navEl.appendChild(btn);
  }
  updateNavColors();
}

function updateNavColors() {
  const children = navEl.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = userAnswers[i] === null ? '#4caf50' : '#1b5e20';
  }
}

function startTimer() {
  stopTimer();
  timeLeft = 60;
  timerEl.textContent = `Time Left: 01:00`;
  perQuestionTimer = setInterval(() => {
    timeLeft--;
    const mm = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const ss = (timeLeft % 60).toString().padStart(2, '0');
    timerEl.textContent = `Time Left: ${mm}:${ss}`;
    if (timeLeft <= 0) {
      clearInterval(perQuestionTimer);
      // auto-advance
      saveAnswer(); // leave as null if not answered
      if (currentIndex < QCOUNT - 1) {
        gotoQuestion(currentIndex + 1);
      } else {
        // end of test -> submit automatically
        submitTest();
      }
    }
  }, 1000);
}
function stopTimer() {
  if (perQuestionTimer) {
    clearInterval(perQuestionTimer);
    perQuestionTimer = null;
  }
}

function renderQuestion(idx) {
  const q = QUESTIONS[idx];
  qEl.innerText = `${idx + 1}. ${q.question}`;
  optionsEl.innerHTML = '';
  for (let i = 0; i < q.options.length; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'opt';
    radio.value = i;
    if (userAnswers[idx] === i) radio.checked = true;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(' ' + q.options[i]));
    label.className = 'option-label';
    label.style.display = 'block';
    label.style.padding = '8px';
    label.style.marginBottom = '6px';
    label.style.borderRadius = '6px';
    label.style.background = '#f7fbff';
    label.style.cursor = 'pointer';
    label.onclick = () => {
      userAnswers[idx] = i;
      updateNavColors();
    };
    optionsEl.appendChild(label);
  }

  updateNavColors();
  startTimer();
}

function gotoQuestion(idx) {
  stopTimer();
  currentIndex = idx;
  renderQuestion(idx);
}

function saveAnswer() {
  const checked = document.querySelector('input[name="opt"]:checked');
  if (checked) {
    userAnswers[currentIndex] = Number(checked.value);
  }
  updateNavColors();
}

function nextQuestion() {
  saveAnswer();
  if (currentIndex < QCOUNT - 1) gotoQuestion(currentIndex + 1);
  else submitTest();
}
function prevQuestion() {
  saveAnswer();
  if (currentIndex > 0) gotoQuestion(currentIndex - 1);
}

/* Controls wired from HTML */
document.querySelector('.next-btn')?.addEventListener('click', nextQuestion);
document.querySelector('.back-btn')?.addEventListener('click', prevQuestion);
document.querySelector('.submit-btn')?.addEventListener('click', () => {
  if (confirm('Submit test now?')) submitTest();
});

function submitTest() {
  stopTimer();
  // calculate score
  let score = 0;
  const wrong = [];
  for (let i = 0; i < QCOUNT; i++) {
    const correctIndex = QUESTIONS[i].answer;
    if (userAnswers[i] === correctIndex) {
      score++;
    } else {
      wrong.push({
        idx: i + 1,
        question: QUESTIONS[i].question,
        your: userAnswers[i] === null ? 'Not Attempted' : QUESTIONS[i].options[userAnswers[i]],
        correct: QUESTIONS[i].options[correctIndex],
        explanation: QUESTIONS[i].explanation
      });
    }
  }

  // hide UI controls & show result
  navEl.style.display = 'none';
  document.querySelector('.controls').style.display = 'none';
  document.querySelector('.question-container').style.display = 'none';

  resultEl.style.display = 'block';
  resultEl.innerHTML = `<h2>Result: ${score} / ${QCOUNT}</h2>
    <p>Answered: ${QCOUNT - wrong.length} | Wrong/Unattempted: ${wrong.length}</p>
    <div style="margin-top:12px"><strong>Review (wrong / unattempted):</strong></div>
    ${wrong.map(w => `<div style="background:#fff3f0;padding:10px;margin-top:8px;border-radius:6px;">
      <strong>Q${w.idx}:</strong> ${escapeHtml(w.question)}<br>
      <strong>Your answer:</strong> ${escapeHtml(w.your)}<br>
      <strong>Correct:</strong> ${escapeHtml(w.correct)}<br>
      <strong>Explanation:</strong> ${escapeHtml(w.explanation)}
    </div>`).join('')}
    <div style="margin-top:16px;color:#333;font-weight:700">Nice work — you can revisit the learning materials to review wrong answers.</div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, function (m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]);
  });
}

/* Initialization on load */
(function init() {
  // set initial timer text
  timerEl.textContent = `Time Left: 01:00`;
  // build nav and render first question (but hide nav and controls until user interacts)
  buildNav();
  // wire start behavior: user clicks first Next -> we start, or auto-start by clicking any navigation.
  // We'll reveal controls and navigation immediately so user can start; start timer on first rendered question.
  document.querySelector('.controls').style.display = 'flex';
  navEl.style.display = 'flex';
  // show first question and start
  gotoQuestion(0);
})();
