/* seriestest.js
   - Generates 100 "series" MCQs (30 easy / 40 medium / 30 hard)
   - 1 minute per question, auto-advance when timer expires
   - 100 green numbered buttons to jump to any question
   - On submit: show score and explanations for wrong answers
*/

// ---------- helpers ----------
function randInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }
function shuffle(a){ return a.sort(()=>Math.random()-0.5); }

// ---------- Generators for series types ----------
function arithmeticSeries(start, diff, len){
  const arr = [];
  for(let i=0;i<len;i++) arr.push(start + i*diff);
  return arr;
}
function geometricSeries(start, ratio, len){
  const arr = [];
  for(let i=0;i<len;i++) arr.push(Math.round(start * Math.pow(ratio,i)));
  return arr;
}
function squareSeries(len, offset=0){
  const arr=[];
  for(let i=1;i<=len;i++) arr.push(i*i + offset);
  return arr;
}
function fibSeries(len){
  const arr=[1,1];
  while(arr.length<len) arr.push(arr[arr.length-1]+arr[arr.length-2]);
  return arr;
}
function alternatingSeries(a,b,stepA,stepB,len){
  const arr=[];
  let curA=a, curB=b;
  for(let i=0;i<len;i++){
    arr.push(i%2===0?curA:curB);
    if(i%2===0) curA += stepA; else curB += stepB;
  }
  return arr;
}

// ---------- Make a single question from series array ----------
function makeQuestionFromSeq(seq, idxToAsk=seq.length-1){
  // Provide sequence up to idxToAsk-1 and ask next term or missing term
  // We'll show sequence with last term missing: e.g. 2,4,6,?
  const shown = seq.slice(0, idxToAsk);
  const correct = seq[idxToAsk];
  // make 3 distractors near correct (avoid duplicates)
  const distractors = new Set();
  while(distractors.size < 3){
    let delta = Math.max(1, Math.round(Math.abs(correct)*0.05)); // small delta
    // give variety depending on magnitude
    const candidate = correct + (randInt(-Math.max(1,delta), Math.max(1,delta))* (randInt(1,3)));
    if(candidate !== correct && candidate >= -100000 && candidate <= 100000) distractors.add(candidate);
  }
  const options = shuffle([correct, ...Array.from(distractors)]);
  const explanation = `Sequence: ${shown.join(', ')} → next = ${correct}. Rule: ${inferRuleText(seq)}`;
  const qText = `${shown.join(', ')}, ?`;
  return { q: qText, options: options.map(x=>String(x)), answer: options.indexOf(String(correct)), explanation };
}

// Try to infer simple rule text for explanation (best-effort)
function inferRuleText(seq){
  // check arithmetic
  if(seq.length >=3){
    const d1 = seq[1]-seq[0];
    const d2 = seq[2]-seq[1];
    if(d1 === d2) return `Arithmetic progression with common difference ${d1}.`;
  }
  // geometric check
  if(seq.length >=3 && seq[0]!==0){
    const r1 = seq[1]/seq[0];
    const r2 = seq[2]/seq[1];
    if(Math.abs(r1 - r2) < 1e-6) return `Geometric progression with ratio ${r1}.`;
  }
  // squares
  if(seq.length>=3){
    const roots = seq.map(n => Math.round(Math.sqrt(Math.abs(n))));
    if(roots[0]*roots[0]===seq[0] && roots[1]*roots[1]===seq[1]) return `Perfect squares sequence.`;
  }
  // fibonacci-like
  if(seq.length>=4){
    let fibish=true;
    for(let i=2;i<seq.length;i++) if(seq[i] !== seq[i-1]+seq[i-2]) fibish=false;
    if(fibish) return `Fibonacci-like: each term is sum of two previous terms.`;
  }
  return `Pattern-based numeric series.`;
}

// ---------- Generate full 100 questions ----------
function generateSeriesQuestions(){
  const questions = [];
  // Easy (30): simple arithmetic / geometric / squares
  for(let i=0;i<30;i++){
    const type = randInt(1,3);
    let seq;
    if(type===1){ // arithmetic
      const a = randInt(1,20);
      const d = randInt(1,10);
      seq = arithmeticSeries(a,d,6);
    } else if(type===2){ // geometric
      const a = randInt(1,5);
      const r = randInt(2,4);
      seq = geometricSeries(a,r,6);
    } else { // squares
      seq = squareSeries(6,0);
      // shift randomly a bit
      if(Math.random()<0.3) seq = seq.map(x=>x+randInt(0,5));
    }
    questions.push(makeQuestionFromSeq(seq,5));
  }

  // Medium (40): alternating, mixed differences, fibonacci-like shorter
  for(let i=0;i<40;i++){
    const kind = randInt(1,4);
    let seq;
    if(kind===1){
      seq = alternatingSeries(randInt(1,5), randInt(2,7), randInt(1,5), randInt(1,5), 7);
    } else if(kind===2){
      // increasing differences: 1,2,3,...
      const start = randInt(1,5);
      const arr=[start];
      let next=start;
      for(let k=1;k<7;k++){ next += k; arr.push(next); }
      seq = arr;
    } else if(kind===3){
      seq = fibSeries(7);
      if(Math.random()<0.3) seq = seq.map((v,idx)=>v + (idx%2?randInt(0,3):0));
    } else {
      // multiply-add series: *r + c
      const a = randInt(1,5), r=randInt(2,4), c=randInt(-2,5);
      const arr=[a];
      for(let k=1;k<7;k++) arr.push(arr[arr.length-1]*r + c);
      seq = arr;
    }
    questions.push(makeQuestionFromSeq(seq,6));
  }

  // Hard (30): larger jumps, mixed rules, alternating compound
  for(let i=0;i<30;i++){
    const mode = randInt(1,3);
    let seq;
    if(mode===1){
      // quadratic-like: n^2 + an + b
      const a = randInt(1,5), b = randInt(0,6);
      seq = [];
      for(let n=1;n<=7;n++) seq.push(n*n + a*n + b);
    } else if(mode===2){
      // multiply then add pattern: *r then +s alternately
      const r = randInt(2,5), s = randInt(1,8);
      const arr=[randInt(1,6)];
      for(let k=1;k<7;k++){
        if(k%2) arr.push(arr[arr.length-1]*r);
        else arr.push(arr[arr.length-1]+s);
      }
      seq = arr;
    } else {
      // piecewise or tricky sequence via random combining
      const a = randInt(2,10), b = randInt(1,7);
      seq = [];
      for(let n=0;n<7;n++) seq.push(a*(n+1) + (n%2? b*(n): Math.floor((n+1)/2)));
    }
    questions.push(makeQuestionFromSeq(seq,6));
  }

  // ensure exactly 100
  if(questions.length > 100) questions.length = 100;
  while(questions.length < 100){
    // add fallback simple arithmetic
    const a=randInt(1,10), d=randInt(1,6);
    questions.push(makeQuestionFromSeq(arithmeticSeries(a,d,6),5));
  }

  return shuffle(questions).slice(0,100);
}

// ---------- App state ----------
const QUESTIONS = generateSeriesQuestions();
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let expired = new Array(QUESTIONS.length).fill(false);
let timer = null;
let timeLeft = 60;

// ---------- DOM references ----------
const qnum = document.getElementById('qnum');
const qtext = document.getElementById('qtext');
const opts = document.getElementById('options');
const timerEl = document.getElementById('timer');
const numbers = document.getElementById('numbers');
const results = document.getElementById('results');
const scoreText = document.getElementById('scoreText');
const details = document.getElementById('details');

function buildNumbers(){
  numbers.innerHTML = '';
  for(let i=0;i<QUESTIONS.length;i++){
    const d = document.createElement('div');
    d.className = 'num';
    d.textContent = i+1;
    d.title = `Go to Q${i+1}`;
    d.addEventListener('click', ()=> {
      saveAnswer();
      goTo(i);
    });
    numbers.appendChild(d);
  }
}

function renderQuestion(index){
  current = index;
  const q = QUESTIONS[index];
  qnum.textContent = `Q${index+1} / ${QUESTIONS.length}`;
  qtext.textContent = q.q;
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const row = document.createElement('label');
    row.className = 'optrow';
    row.innerHTML = `<input type="radio" name="option" value="${i}" ${answers[index]===i? 'checked':''} /> <span>${opt}</span>`;
    row.addEventListener('click', ()=> {
      const input = row.querySelector('input');
      input.checked = true;
      answers[current]=Number(input.value);
      updateNumberStyle(current);
    });
    opts.appendChild(row);
  });
  highlightActiveNumber();
  resetTimer();
}

function highlightActiveNumber(){
  const nodes = numbers.querySelectorAll('.num');
  nodes.forEach((n, idx)=>{
    n.classList.toggle('active', idx===current);
    if(answers[idx] !== null) n.style.background = '#27ae60';
    else n.style.background = 'var(--green)';
  });
}

// timer
function startTimer(){
  clearInterval(timer);
  timeLeft = 60;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if(timeLeft <= 0){
      clearInterval(timer);
      expired[current]=true;
      // auto-advance or submit if last
      if(current < QUESTIONS.length-1) goTo(current+1);
      else submitTest();
    }
  },1000);
}
function resetTimer(){
  clearInterval(timer);
  if(!expired[current]) startTimer();
  else timerEl.textContent = 'Time over for this question';
}

// navigation & save
function saveAnswer(){
  const sel = document.querySelector('input[name="option"]:checked');
  if(sel) answers[current] = Number(sel.value);
  updateNumberStyle(current);
}
function updateNumberStyle(idx){
  const nodes = numbers.querySelectorAll('.num');
  if(!nodes[idx]) return;
  if(answers[idx] !== null) nodes[idx].style.background = '#27ae60';
  else nodes[idx].style.background = 'var(--green)';
}
function goTo(idx){
  saveAnswer();
  current = idx;
  renderQuestion(current);
}
function nextQ(){ saveAnswer(); if(current < QUESTIONS.length-1) goTo(current+1); }
function prevQ(){ saveAnswer(); if(current > 0) goTo(current-1); }

// submit & results
function submitTest(){
  saveAnswer();
  clearInterval(timer);
  document.getElementById('questionCard').style.display = 'none';
  results.style.display = 'block';
  let score=0;
  details.innerHTML = '';
  QUESTIONS.forEach((q,i)=>{
    const correct = q.answer;
    if(answers[i] === correct) score++;
    else{
      const div = document.createElement('div');
      div.className = 'wrong';
      const user = answers[i] === null ? 'Not Attempted' : q.options[answers[i]];
      div.innerHTML = `<strong>Q${i+1}:</strong> ${q.q}
        <div style="margin-top:6px"><strong>Your Answer:</strong> ${user}</div>
        <div style="margin-top:6px"><strong>Correct:</strong> ${q.options[correct]}</div>
        <div style="margin-top:6px"><strong>Explanation:</strong> ${q.explanation}</div>`;
      details.appendChild(div);
    }
  });
  scoreText.textContent = `You scored ${score} out of ${QUESTIONS.length}`;
  results.scrollIntoView({behavior:'smooth'});
}

// wire UI
document.getElementById('nextBtn').addEventListener('click', ()=> nextQ());
document.getElementById('prevBtn').addEventListener('click', ()=> prevQ());
document.getElementById('submitBtn').addEventListener('click', ()=> {
  if(confirm('Submit test and view results?')) submitTest();
});

// init
buildNumbers();
renderQuestion(0);
startTimer();

// keyboard navigation optional
document.addEventListener('keydown', (e)=>{
  if(e.key === 'ArrowRight') nextQ();
  if(e.key === 'ArrowLeft') prevQ();
});
