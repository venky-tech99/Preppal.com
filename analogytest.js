/* analogytest.js
   Generates 100 analogy MCQs (30 easy, 40 medium, 30 hard),
   handles timer, navigation, progress circles and final report.
*/

// ---------- Utilities ----------
function randInt(min, max){ return Math.floor(Math.random()*(max-min+1))+min; }
function shuffle(arr){ return arr.sort(()=>Math.random()-0.5); }

// ---------- Analogy data pools ----------
// We'll use categories and pairs to programmatically create many unique analogy questions.
// Each mapping: left -> right (relationship)
const pools = {
  animals: [
    ["Cat","Kitten"],["Dog","Puppy"],["Cow","Calf"],["Horse","Foal"],
    ["Sheep","Lamb"],["Goat","Kid"],["Duck","Duckling"],["Lion","Cub"]
  ],
  tools: [
    ["Pen","Write"],["Pencil","Sketch"],["Knife","Cut"],["Spoon","Scoop"],
    ["Brush","Paint"],["Hammer","Nail"],["Drill","Hole"],["Broom","Sweep"]
  ],
  part_whole: [
    ["Leaf","Tree"],["Wheel","Car"],["Finger","Hand"],["Page","Book"],
    ["Seed","Plant"],["Screen","Phone"],["Key","Keyboard"],["Room","House"]
  ],
  occupation_place: [
    ["Doctor","Hospital"],["Teacher","School"],["Chef","Kitchen"],["Pilot","Cockpit"],
    ["Farmer","Field"],["Mechanic","Garage"],["Librarian","Library"],["Judge","Court"]
  ],
  body: [
    ["Eye","Sight"],["Ear","Hearing"],["Heart","Circulation"],["Lungs","Respiration"],
    ["Teeth","Chew"],["Tongue","Taste"],["Nose","Smell"],["Leg","Walk"]
  ],
  antonyms: [
    ["Hot","Cold"],["Big","Small"],["Up","Down"],["Fast","Slow"],
    ["Near","Far"],["Happy","Sad"],["Light","Dark"],["Early","Late"]
  ],
  measure: [
    ["Meter","Distance"],["Liter","Volume"],["Kilogram","Mass"],["Second","Time"],
    ["Watt","Power"],["Volt","Potential"],["Ampere","Current"],["Degree","Angle"]
  ],
  container: [
    ["Bee","Hive"],["Bird","Nest"],["Fish","Tank"],["Cow","Barn"],
    ["Dog","Kennel"],["Cat","Litter"],["Book","Shelf"],["Wine","Bottle"]
  ],
  relation_action: [
    ["Teacher","Teach"],["Singer","Sing"],["Driver","Drive"],["Writer","Write"],
    ["Painter","Paint"],["Farmer","Cultivate"],["Carpenter","Build"],["Tailor","Sew"]
  ],
  synonyms: [
    ["Begin","Start"],["End","Finish"],["Child","Kid"],["Quick","Fast"],
    ["Angry","Irate"],["Tiny","Small"],["Wealthy","Rich"],["Smart","Intelligent"]
  ]
};

// Create a big list of possible relationship pairs (label, value)
let pairList = [];
Object.values(pools).forEach(arr => {
  arr.forEach(pair => {
    pairList.push({left: pair[0], right: pair[1]});
  });
});

// ---------- Question generation ----------
function makeAnalogyQuestion(pair, typeLabel){
  // pair: {left,right}
  // typeLabel used for wording variety but not necessary
  const left = pair.left, right = pair.right;
  // Build distractors: pick 3 other 'right' values from pool excluding correct
  const otherRights = pairList
    .map(p=>p.right)
    .filter(r => r !== right);
  const opts = shuffle([right, ...shuffle(otherRights).slice(0,3)]);
  const correctIndex = opts.indexOf(right);
  const questionText = `${left} : ${right} :: ${randomSubject()} : ?`;
  // But above is wrong — we must create analogies in which we give left:right and C:? where C chosen.
  // Let's instead create different templates. We'll handle types below.
  return { questionText: "", options: opts, correctIndex, explanation: "" };
}

// We'll generate 100 questions using templates to ensure coherent analogies.
function generateQuestions(){
  const questions = [];
  // helper to create Q: A : B :: C : ?
  function createFromPairs(A,B,C){
    // correct D is mapping of C if exists in pairList
    const mapping = pairList.find(p => p.left.toLowerCase() === C.toLowerCase());
    if(!mapping) return null;
    const correct = mapping.right;
    const distractors = shuffle(pairList.map(p=>p.right).filter(r=>r!==correct)).slice(0,3);
    const options = shuffle([correct, ...distractors]);
    const explanation = `${A} is related to ${B} as ${C} is related to ${correct}.`;
    return {
      q: `${A} : ${B} :: ${C} : ?`,
      options,
      answer: options.indexOf(correct),
      explanation
    };
  }

  // create a mapping object for easy pick
  const leftToRight = {};
  pairList.forEach(p => leftToRight[p.left] = p.right);

  // We'll pick 30 easy (obvious pair categories), 40 medium (mixed), 30 hard (less direct)
  // EASY: same category mapping, direct ones
  const easySources = ["animals","container","tools","part_whole","body","occupation_place","measure","relation_action"];
  for(let i=0;i<30;i++){
    // choose pair A-B
    const category = pools[easySources[i % easySources.length]];
    const pAB = category[randInt(0, category.length-1)];
    // choose C from same category (different left)
    let pC;
    do { pC = category[randInt(0, category.length-1)]; } while(pC[0] === pAB[0]);
    const created = createFromPairs(pAB[0], pAB[1], pC[0]);
    if(created) questions.push(created);
    else { i--; continue; }
  }

  // MEDIUM: mix categories, sometimes use synonyms/antonyms
  const mediumPools = ["animals","tools","part_whole","occupation_place","body","antonyms","measure","synonyms","relation_action"];
  for(let i=0;i<40;i++){
    const poolA = pools[mediumPools[randInt(0, mediumPools.length-1)]];
    const poolC = pools[mediumPools[randInt(0, mediumPools.length-1)]];
    const pAB = poolA[randInt(0,poolA.length-1)];
    let pC = poolC[randInt(0,poolC.length-1)];
    if(pC[0] === pAB[0]) {
      // ensure different
      const alt = poolC[randInt(0,poolC.length-1)];
      if(alt[0] !== pAB[0]) pC = alt;
    }
    const created = createFromPairs(pAB[0], pAB[1], pC[0]);
    if(created) questions.push(created);
    else { i--; continue; }
  }

  // HARD: use less direct mappings & swapped category combinations
  const hardPools = ["measure","synonyms","antonyms","part_whole","container","relation_action","tools"];
  for(let i=0;i<30;i++){
    const poolA = pools[hardPools[randInt(0, hardPools.length-1)]];
    const poolC = pools[hardPools[randInt(0, hardPools.length-1)]];
    const pAB = poolA[randInt(0,poolA.length-1)];
    let pC = poolC[randInt(0,poolC.length-1)];
    if(pC[0] === pAB[0]) pC = poolC[(randInt(0,poolC.length-1)) % poolC.length];
    const created = createFromPairs(pAB[0], pAB[1], pC[0]);
    if(created) questions.push(created);
    else { i--; continue; }
  }

  // Final safety: ensure we have exactly 100 (if duplicates or failures occurred)
  // If less, fill with direct pairs regen
  while(questions.length < 100){
    const p = pairList[randInt(0,pairList.length-1)];
    let c = pairList[randInt(0,pairList.length-1)];
    if(c.left === p.left) { c = pairList[(randInt(0,pairList.length-1))]; }
    const created = createFromPairs(p.left,p.right,c.left);
    if(created) questions.push(created);
  }

  // Ensure uniqueness by question text (filter)
  const seen = new Set();
  const unique = [];
  for(const q of questions){
    if(!seen.has(q.q)){
      seen.add(q.q);
      unique.push(q);
    }
  }
  // if uniqueness reduced below 100, top-up simple direct items
  let idx=0;
  while(unique.length < 100){
    const p = pairList[idx % pairList.length];
    const c = pairList[(idx+3) % pairList.length];
    const created = createFromPairs(p.left,p.right,c.left);
    if(created) unique.push(created);
    idx++;
  }

  // Final shuffle for randomness
  return shuffle(unique).slice(0,100);
}

// ---------- App state ----------
const QUESTIONS = generateQuestions();
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let expired = new Array(QUESTIONS.length).fill(false);
let timer = null;
let timeLeft = 60;

// ---------- DOM refs ----------
const qnumEl = document.getElementById("qnum");
const qtxtEl = document.getElementById("questionText");
const optsEl = document.getElementById("optionsContainer");
const timerEl = document.getElementById("timer");
const numbersEl = document.getElementById("numbersContainer");
const resultsSection = document.getElementById("results");
const resultScoreEl = document.getElementById("resultScore");
const resultDetailsEl = document.getElementById("resultDetails");

// ---------- Render functions ----------
function buildNumberButtons(){
  numbersEl.innerHTML = "";
  for(let i=0;i<QUESTIONS.length;i++){
    const btn = document.createElement("div");
    btn.className = "num";
    btn.textContent = i+1;
    btn.title = `Go to Q${i+1}`;
    btn.addEventListener("click", ()=> {
      saveAnswer();
      goTo(i);
    });
    numbersEl.appendChild(btn);
  }
}

function renderQuestion(index){
  const q = QUESTIONS[index];
  qnumEl.textContent = `Q${index+1} / ${QUESTIONS.length}`;
  qtxtEl.textContent = q.q;
  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `<input type="radio" name="opt" value="${i}" ${answers[index]===i? "checked":""} /> <span>${opt}</span>`;
    label.addEventListener("click", ()=> {
      // when option label clicked, set the radio and store immediately
      const input = label.querySelector("input");
      input.checked = true;
      answers[index] = Number(input.value);
      updateNumberButtonState(index);
    });
    optsEl.appendChild(label);
  });
  highlightNumberActive(index);
  resetTimer();
}

function highlightNumberActive(idx){
  const nodes = numbersEl.querySelectorAll(".num");
  nodes.forEach((n,i)=>{
    n.classList.toggle("active", i===idx);
    if(answers[i] !== null) n.style.background = "#27ae60"; // green if answered
    else n.style.background = "var(--green)";
  });
}

// ---------- Timer ----------
function startTimer(){
  clearInterval(timer);
  timeLeft = 60;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(()=> {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if(timeLeft <= 0){
      clearInterval(timer);
      expired[current] = true;
      // if user didn't answer, leave answers[current] as null
      if(current < QUESTIONS.length - 1) goTo(current+1);
      else submitTest();
    }
  },1000);
}
function resetTimer(){
  clearInterval(timer);
  if(!expired[current]){
    startTimer();
  } else {
    timerEl.textContent = "Time over for this question";
  }
}

// ---------- Navigation ----------
function saveAnswer(){
  const chosen = document.querySelector('input[name="opt"]:checked');
  if(chosen) answers[current] = Number(chosen.value);
  updateNumberButtonState(current);
}
function updateNumberButtonState(idx){
  const nodes = numbersEl.querySelectorAll(".num");
  const node = nodes[idx];
  if(!node) return;
  if(answers[idx] !== null) node.style.background = "#27ae60";
  else node.style.background = "var(--green)";
}
function goTo(idx){
  saveAnswer();
  current = idx;
  renderQuestion(current);
}
function nextQ(){
  saveAnswer();
  if(current < QUESTIONS.length - 1){
    current++;
    renderQuestion(current);
  }
}
function prevQ(){
  saveAnswer();
  if(current > 0){
    current--;
    renderQuestion(current);
  }
}

// ---------- Submission & Results ----------
function submitTest(){
  saveAnswer();
  clearInterval(timer);
  // calculate score
  let score = 0;
  for(let i=0;i<QUESTIONS.length;i++){
    const ans = answers[i];
    const correctIdx = QUESTIONS[i].answer;
    if(ans === correctIdx) score++;
  }
  // show results
  document.getElementById("questionCard").style.display = "none";
  resultsSection.style.display = "block";
  resultScoreEl.textContent = `You scored ${score} out of ${QUESTIONS.length}`;
  resultDetailsEl.innerHTML = "";
  // show detailed wrong explanations
  for(let i=0;i<QUESTIONS.length;i++){
    const q = QUESTIONS[i];
    const ans = answers[i];
    const correctIdx = q.answer;
    if(ans === correctIdx){
      // optionally show correct items small — we will show only wrongs to remain concise
      continue;
    } else {
      const div = document.createElement("div");
      div.className = "wrong-item";
      const userAns = ans===null ? "Not Attempted" : q.options[ans];
      div.innerHTML = `<strong>Q${i+1}:</strong> ${q.q}
        <div style="margin-top:6px"><strong>Your Answer:</strong> ${userAns}</div>
        <div style="margin-top:6px"><strong>Correct Answer:</strong> ${q.options[correctIdx]}</div>
        <div style="margin-top:6px"><strong>Explanation:</strong> ${q.explanation}</div>`;
      resultDetailsEl.appendChild(div);
    }
  }
  // also show which ones are correct (optional)
  const correctCount = score;
  // scroll results to top
  resultsSection.scrollIntoView({behavior:"smooth"});
}

// ---------- Wire buttons ----------
document.getElementById("nextBtn").addEventListener("click", ()=> nextQ());
document.getElementById("backBtn").addEventListener("click", ()=> prevQ());
document.getElementById("submitBtn").addEventListener("click", ()=> {
  if(confirm("Submit test and view results?")){
    submitTest();
  }
});

// ---------- Init ----------
buildNumberButtons();
renderQuestion(0);
startTimer();

// Optional: keyboard shortcuts
document.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight") nextQ();
  if(e.key === "ArrowLeft") prevQ();
  if(e.key === "Enter") {
    // do nothing special, avoid accidental submit
  }
});
