// CodingChallenges.js
// IMPORTANT: Set JUDGE0_BASE_URL and JUDGE0_API_KEY below before running.
// If you use RapidAPI Judge0, you'll also need X-RapidAPI-Host and X-RapidAPI-Key headers.
// Example RapidAPI values:
//   JUDGE0_BASE_URL = 'https://judge0.p.rapidapi.com';
//   JUDGE0_API_KEY = 'YOUR_RAPIDAPI_KEY_HERE';
// For self-hosted judge0, set base URL like 'http://localhost:2358' and leave API_KEY empty.

const JUDGE0_BASE_URL = ''; // <-- PUT YOUR JUDGE0 BASE URL HERE
const JUDGE0_API_KEY = '';  // <-- Put RapidAPI key here if using RapidAPI; otherwise ''.

const LANG_ID = {
  // mapping used in this script; Judge0 language IDs vary by instance
  'c': 50,          // C (gcc)
  'cpp': 54,        // C++ (gcc)
  'java': 62,       // Java (OpenJDK)
  'python3': 71,    // Python 3
  'javascript': 63  // JS (Node)
};

// --- Problems list (50 items) ---
// Each problem: { id, title, difficulty, topics, desc, samples: [{input, output}], template: {python3, cpp, c, java, javascript} }
const problems = [
  { id:1, title:"Two Sum", difficulty:"easy", topics:["array"], desc:"Given an array of integers and a target, return indices of two numbers that add up to target.", samples:[{input:"4\n2 7 11 15\n9\n", output:"0 1\n"}], templates: null },
  { id:2, title:"Reverse String", difficulty:"easy", topics:["string"], desc:"Reverse the given string.", samples:[{input:"hello\n", output:"olleh\n"}], templates: null },
  { id:3, title:"Count Occurrences", difficulty:"easy", topics:["array"], desc:"Count occurrences of a number in an array.", samples:[{input:"5\n1 2 2 3 2\n2\n", output:"3\n"}], templates: null },
  { id:4, title:"Factorial", difficulty:"easy", topics:["math"], desc:"Compute n! for n up to 12.", samples:[{input:"5\n", output:"120\n"}], templates: null },
  { id:5, title:"Is Prime", difficulty:"easy", topics:["math"], desc:"Check if a number is prime.", samples:[{input:"13\n", output:"YES\n"}], templates: null },
  { id:6, title:"Palindrome Number", difficulty:"easy", topics:["math"], desc:"Check whether an integer is palindrome.", samples:[{input:"121\n", output:"YES\n"}], templates: null },
  { id:7, title:"Merge Two Sorted Arrays", difficulty:"easy", topics:["array"], desc:"Merge two sorted arrays into one sorted array.", samples:[{input:"3\n1 3 5\n3\n2 4 6\n", output:"1 2 3 4 5 6\n"}], templates: null },
  { id:8, title:"Max Subarray Sum (Kadane)", difficulty:"easy", topics:["array"], desc:"Return maximum subarray sum.", samples:[{input:"5\n-2 1 -3 4 -1\n", output:"4\n"}], templates: null },
  { id:9, title:"Anagram Check", difficulty:"easy", topics:["string"], desc:"Check whether two strings are anagrams.", samples:[{input:"listen\nsilent\n", output:"YES\n"}], templates: null },
  { id:10, title:"Fibonacci (nth)", difficulty:"easy", topics:["math","dp"], desc:"Return nth Fibonacci number (n<=30).", samples:[{input:"10\n", output:"55\n"}], templates: null },

  { id:11, title:"Rotate Array", difficulty:"medium", topics:["array"], desc:"Rotate array to the right by k steps.", samples:[{input:"5\n1 2 3 4 5\n2\n", output:"4 5 1 2 3\n"}], templates: null },
  { id:12, title:"Longest Common Prefix", difficulty:"medium", topics:["string"], desc:"Find longest common prefix among strings.", samples:[{input:"3\nflower flow flight\n", output:"fl\n"}], templates: null },
  { id:13, title:"Valid Parentheses", difficulty:"medium", topics:["stack"], desc:"Check for balanced parentheses.", samples:[{input:"()[]{}\n", output:"YES\n"}], templates: null },
  { id:14, title:"Level Order Traversal (BFS)", difficulty:"medium", topics:["tree","graph"], desc:"Given a tree (level-order input), print level order traversal.", samples:[{input:"7\n1 2 3 4 5 6 7\n", output:"1\n2 3\n4 5 6 7\n"}], templates: null },
  { id:15, title:"Product of Array Except Self", difficulty:"medium", topics:["array"], desc:"Return product array without using division.", samples:[{input:"4\n1 2 3 4\n", output:"24 12 8 6\n"}], templates: null },
  { id:16, title:"Minimum Window Substring (small)", difficulty:"medium", topics:["string"], desc:"Given s and t return minimum substring of s containing all chars of t.", samples:[{input:"ADOBECODEBANC\nABC\n", output:"BANC\n"}], templates: null },
  { id:17, title:"Kth Smallest Element", difficulty:"medium", topics:["heap"], desc:"Find kth smallest in unsorted array.", samples:[{input:"5\n7 10 4 3 20\n3\n", output:"7\n"}], templates: null },
  { id:18, title:"Search in Rotated Sorted Array", difficulty:"medium", topics:["search"], desc:"Search target in rotated sorted array.", samples:[{input:"7\n4 5 6 7 0 1 2\n0\n", output:"4\n"}], templates: null },
  { id:19, title:"Word Break (small)", difficulty:"medium", topics:["dp","string"], desc:"Check if string can be segmented using dictionary words.", samples:[{input:"leetcode\n2\nleet code\n", output:"YES\n"}], templates: null },
  { id:20, title:"Top K Frequent Elements", difficulty:"medium", topics:["hash"], desc:"Return k most frequent elements.", samples:[{input:"6\n1 1 1 2 2 3\n2\n", output:"1 2\n"}], templates: null },

  { id:21, title:"Longest Increasing Subsequence", difficulty:"hard", topics:["dp"], desc:"Length of LIS in O(n log n).", samples:[{input:"6\n10 9 2 5 3 7\n", output:"3\n"}], templates: null },
  { id:22, title:"Trapping Rain Water", difficulty:"hard", topics:["two-pointer"], desc:"Compute trapped rain water.", samples:[{input:"6\n0 1 0 2 1 0\n", output:"3\n"}], templates: null },
  { id:23, title:"Word Ladder (small)", difficulty:"hard", topics:["graph","bfs"], desc:"Shortest transform sequence length.", samples:[{input:"hit\ncog\n5\nhot dot dog lot log\n", output:"5\n"}], templates: null },
  { id:24, title:"N-Queens (small)", difficulty:"hard", topics:["backtracking"], desc:"Count solutions for small n (n<=8).", samples:[{input:"4\n", output:"2\n"}], templates: null },
  { id:25, title:"Median of Two Sorted Arrays (small)", difficulty:"hard", topics:["binary-search"], desc:"Find median in O(log(min(n,m))).", samples:[{input:"2\n1 3\n1\n2\n", output:"2.0\n"}], templates: null },
  { id:26, title:"Course Schedule (DAG)", difficulty:"hard", topics:["graph"], desc:"Detect if you can finish all courses (topo sort).", samples:[{input:"2\n1\n0 1\n", output:"YES\n"}], templates: null },
  { id:27, title:"Maximum Flow (small)", difficulty:"hard", topics:["graph"], desc:"Implement Edmonds-Karp (small examples).", samples:[{input:"4 5\n0 1 100\n1 2 1\n2 3 100\n0 2 100\n1 3 100\n0 3\n", output:"200\n"}], templates: null },
  { id:28, title:"Palindrome Partitioning", difficulty:"hard", topics:["dp","backtracking"], desc:"Min cuts to partition palindrome substrings.", samples:[{input:"aab\n", output:"1\n"}], templates: null },
  { id:29, title:"Minimum Window Subsequence", difficulty:"hard", topics:["string","dp"], desc:"Hard variant; small inputs only.", samples:[{input:"abcdebdde\nbde\n", output:"bcde\n"}], templates: null },
  { id:30, title:"Edit Distance (small)", difficulty:"hard", topics:["dp"], desc:"Levenshtein distance for small n.", samples:[{input:"kitten\nsitting\n", output:"3\n"}], templates: null },

  // 20 more to reach 50: mix of classic placement Qs
  { id:31, title:"Rotate Matrix", difficulty:"medium", topics:["array"], desc:"Rotate an NxN matrix by 90 degrees in-place.", samples:[{input:"3\n1 2 3\n4 5 6\n7 8 9\n", output:"7 4 1\n8 5 2\n9 6 3\n"}], templates: null},
  { id:32, title:"Subarray Sum Equals K", difficulty:"medium", topics:["hash"], desc:"Count subarrays summing to k.", samples:[{input:"5\n1 1 1 2 3\n3\n", output:"3\n"}], templates: null},
  { id:33, title:"Binary Tree Inorder", difficulty:"easy", topics:["tree"], desc:"Inorder traversal (given array representation).", samples:[{input:"7\n1 2 3 4 5 6 7\n", output:"4 2 5 1 6 3 7\n"}], templates: null},
  { id:34, title:"Sort Colors (Dutch flag)", difficulty:"medium", topics:["two-pointer"], desc:"Sort array of 0,1,2 in one pass.", samples:[{input:"5\n2 0 2 1 1\n", output:"0 1 1 2 2\n"}], templates: null},
  { id:35, title:"Product Except Self", difficulty:"medium", topics:["array"], desc:"Already included earlier variant—another test.", samples:[{input:"4\n1 2 3 4\n", output:"24 12 8 6\n"}], templates: null},
  { id:36, title:"Minimum Path Sum", difficulty:"medium", topics:["dp"], desc:"Min path sum in grid.", samples:[{input:"3 3\n1 3 1\n1 5 1\n4 2 1\n", output:"7\n"}], templates: null},
  { id:37, title:"Longest Palindromic Substring", difficulty:"medium", topics:["string"], desc:"Return longest palindrome substring.", samples:[{input:"babad\n", output:"bab\n"}], templates: null},
  { id:38, title:"Cylinder Stacking (greedy)", difficulty:"hard", topics:["greedy"], desc:"Stack cylinders with decreasing radius/height.", samples:[{input:"3\n1 2\n2 1\n1 1\n", output:"2\n"}], templates: null},
  { id:39, title:"Matrix Path Count", difficulty:"medium", topics:["dp"], desc:"Count unique paths with obstacles.", samples:[{input:"3 3\n0 0 0\n0 1 0\n0 0 0\n", output:"2\n"}], templates: null},
  { id:40, title:"Largest Rectangle in Histogram", difficulty:"hard", topics:["stack"], desc:"Compute largest rectangle area.", samples:[{input:"7\n2 1 5 6 2 3 1\n", output:"10\n"}], templates: null},
  { id:41, title:"Find Missing Number (XOR)", difficulty:"easy", topics:["math"], desc:"Find missing number in 1..n using XOR.", samples:[{input:"5\n1 2 5 4\n", output:"3\n"}], templates: null},
  { id:42, title:"Merge Intervals", difficulty:"medium", topics:["interval"], desc:"Merge overlapping intervals.", samples:[{input:"4\n1 3\n2 6\n8 10\n15 18\n", output:"1 6\n8 10\n15 18\n"}], templates: null},
  { id:43, title:"Number of Islands", difficulty:"medium", topics:["graph","dfs"], desc:"Count connected components in grid.", samples:[{input:"3 5\n1 1 0 0 1\n1 0 0 1 0\n1 1 0 0 1\n", output:"3\n"}], templates: null},
  { id:44, title:"Reorder Log Files", difficulty:"easy", topics:["string"], desc:"Reorder logs with letter-logs first.", samples:[{input:"3\na1 9 2 3\nb2 act car\nc3 4 5\n", output:"b2 act car\na1 9 2 3\nc3 4 5\n"}], templates: null},
  { id:45, title:"LRU Cache (small)", difficulty:"hard", topics:["design"], desc:"Implement small LRU cache operations.", samples:[{input:"put 1 1\nput 2 2\nget 1\nput 3 3\nget 2\n", output:"1\n-1\n"}], templates: null},
  { id:46, title:"Rotate List", difficulty:"medium", topics:["linkedlist"], desc:"Rotate linked list to the right by k.", samples:[{input:"5\n1 2 3 4 5\n2\n", output:"4 5 1 2 3\n"}], templates: null},
  { id:47, title:"Add Two Numbers (linked list)", difficulty:"medium", topics:["linkedlist"], desc:"Add numbers stored in reverse linked lists.", samples:[{input:"2\n2 4 3\n5 6 4\n", output:"7 0 8\n"}], templates: null},
  { id:48, title:"Subsets", difficulty:"easy", topics:["backtracking"], desc:"Generate all subsets of set.", samples:[{input:"3\n1 2 3\n", output:"[] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]\n"}], templates: null},
  { id:49, title:"Combination Sum", difficulty:"medium", topics:["backtracking"], desc:"Find combinations summing to target (unique combinations).", samples:[{input:"4\n2 3 6 7\n7\n", output:"[7] [2,2,3]\n"}], templates: null},
  { id:50, title:"Alien Dictionary (small)", difficulty:"hard", topics:["graph","toposort"], desc:"Given sorted words, return alien language order (small inputs).", samples:[{input:"3\nwrt wrf er ett rftt\n", output:"wertf\n"}], templates: null}
];

// Basic starter templates per language (simple scaffolding)
const starters = {
  python3: `# Read input from stdin and print output to stdout\nimport sys\n\ndef main():\n    data = sys.stdin.read().strip().split()\n    # parse according to problem\n    print('Add parsing and solution logic')\n\nif __name__ == '__main__':\n    main()\n`,
  cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    // read input and implement solution\n    cout << \"Add parsing and solution logic\" << '\\n';\n    return 0;\n}\n`,
  c: `#include <stdio.h>\nint main(){\n    // read input from stdin and implement\n    printf(\"Add parsing and solution logic\\n\");\n    return 0;\n}\n`,
  java: `import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    Scanner sc = new Scanner(System.in);\n    // parse input and print outputs\n    System.out.println(\"Add parsing and solution logic\");\n  }\n}\n`,
  javascript: `// Node.js program: read from stdin\nconst fs = require('fs');\nconst data = fs.readFileSync(0,'utf8').trim().split(/\\s+/);\n// parse and implement\nconsole.log('Add parsing and solution logic');\n`
};

// DOM references
const problemListEl = document.getElementById('problemList');
const probTitle = document.getElementById('probTitle');
const probDesc = document.getElementById('probDesc');
const editor = document.getElementById('editor');
const languageSelect = document.getElementById('languageSelect');
const testcaseList = document.getElementById('testcaseList');
const stdinEl = document.getElementById('stdin');
const runBtn = document.getElementById('runBtn');
const runSampleBtn = document.getElementById('runSampleBtn');
const outputEl = document.getElementById('output');
const filterInput = document.getElementById('filterInput');
const difficultyFilter = document.getElementById('difficultyFilter');
const topicFilter = document.getElementById('topicFilter');
const shuffleBtn = document.getElementById('shuffleBtn');
const autoFillBtn = document.getElementById('autofillBtn');
const autoFillBtn2 = document.getElementById('autofillBtn');
const autofillBtn = document.getElementById('autofillBtn');

let currentProblem = null;

// Render problem list
function renderProblemList(list){
  problemListEl.innerHTML = '';
  list.forEach(p=>{
    const d = document.createElement('div');
    d.className = 'problem-item';
    d.innerHTML = `<div style="font-weight:700">${p.id}. ${p.title}</div><div class="small">${p.difficulty.toUpperCase()} • ${p.topics.join(', ')}</div>`;
    d.addEventListener('click', ()=> loadProblem(p.id));
    problemListEl.appendChild(d);
  });
}

// filter logic
function applyFilters(){
  const q = filterInput.value.trim().toLowerCase();
  const diff = difficultyFilter.value;
  const topic = topicFilter.value;
  const filtered = problems.filter(p=>{
    if(diff && p.difficulty !== diff) return false;
    if(topic && !p.topics.includes(topic)) return false;
    if(!q) return true;
    return (p.title + ' ' + p.desc + ' ' + p.topics.join(' ')).toLowerCase().includes(q);
  });
  renderProblemList(filtered);
}

filterInput.addEventListener('input', applyFilters);
difficultyFilter.addEventListener('change', applyFilters);
topicFilter.addEventListener('change', applyFilters);
shuffleBtn.addEventListener('click', ()=>{
  problems.sort(()=>Math.random()-0.5);
  applyFilters();
});

// load a problem into the editor and testcase pane
function loadProblem(id){
  const p = problems.find(x=>x.id===id);
  if(!p) return;
  currentProblem = p;
  probTitle.textContent = `${p.id}. ${p.title}`;
  probDesc.textContent = p.desc;

  // show sample testcases
  testcaseList.innerHTML = '';
  p.samples.forEach((s, i)=>{
    const node = document.createElement('div');
    node.className = 'testcase';
    node.innerHTML = `<div style="font-weight:700">Sample ${i+1}</div>
                      <div><strong>Input:</strong><pre style="white-space:pre-wrap">${s.input}</pre></div>
                      <div><strong>Output:</strong><pre style="white-space:pre-wrap">${s.output}</pre></div>`;
    testcaseList.appendChild(node);
  });

  // fill editor template or starter
  const lang = languageSelect.value;
  editor.value = getStarterFor(p, lang);
  stdinEl.value = p.samples[0] ? p.samples[0].input : '';
  outputEl.textContent = 'Ready. Use Run to execute code on sample input.';
}

// return starter code for problem if provided else generic
function getStarterFor(problem, lang){
  if(problem.templates && problem.templates[lang]) return problem.templates[lang];
  return starters[lang] || '';
}

// Run code using Judge0
async function runCode(source, langKey, stdin){
  outputEl.textContent = 'Submitting...';
  if(!JUDGE0_BASE_URL){
    outputEl.textContent = 'Error: Judge0 base URL not configured. Edit CodingChallenges.js and set JUDGE0_BASE_URL and (optionally) JUDGE0_API_KEY.';
    return;
  }
  const language_id = LANG_ID[langKey];
  if(!language_id){
    outputEl.textContent = 'Language not supported by this demo.';
    return;
  }

  // Judge0 endpoints vary — two common patterns:
  // - RapidAPI Judge0: POST to /submissions?base64_encoded=false&wait=false (with RapidAPI headers)
  // - self-hosted judge0: POST to /submissions?base64_encoded=false&wait=false
  // We'll POST then poll the token.

  try{
    // create submission
    const payload = {
      source_code: source,
      stdin: stdin,
      language_id: language_id
    };

    const createUrl = JUDGE0_BASE_URL.replace(/\/$/, '') + '/submissions?base64_encoded=false&wait=false';
    const headers = {
      'Content-Type': 'application/json'
    };
    // if using RapidAPI, you need X-RapidAPI-Key & Host
    if(JUDGE0_API_KEY){
      headers['X-RapidAPI-Key'] = JUDGE0_API_KEY;
      // Host may be required depending on RapidAPI endpoint; leave to user to add if necessary.
    }

    const createResp = await fetch(createUrl, {
      method:'POST',
      headers,
      body: JSON.stringify(payload)
    });
    if(!createResp.ok){
      const txt = await createResp.text();
      outputEl.textContent = `Submission creation failed: ${createResp.status} ${createResp.statusText}\n${txt}`;
      return;
    }
    const createJson = await createResp.json();
    const token = createJson.token || createJson['token'];
    if(!token){
      outputEl.textContent = 'Failed to get submission token from Judge0 response.';
      return;
    }

    // poll for result
    outputEl.textContent = 'Running... polling for result (may take a few seconds)...';
    const getUrl = JUDGE0_BASE_URL.replace(/\/$/, '') + '/submissions/' + encodeURIComponent(token) + '?base64_encoded=false';
    let res = null;
    for(let i=0;i<30;i++){ // poll up to 30 times (~30s)
      await new Promise(r=>setTimeout(r, 1000));
      const rresp = await fetch(getUrl, {method:'GET', headers});
      if(!rresp.ok){
        outputEl.textContent = `Error fetching result: ${rresp.status} ${rresp.statusText}`;
        return;
      }
      const rjson = await rresp.json();
      if(rjson.status && rjson.status.id > 2){ // 1 or 2 => in queue/processing
        res = rjson;
        break;
      }
      // else keep polling
    }
    if(!res){
      outputEl.textContent = 'Timed out waiting for Judge0 result.';
      return;
    }

    // Display result
    let out = '';
    if(res.compile_output){
      out += '=== COMPILE OUTPUT ===\n' + res.compile_output + '\n\n';
    }
    if(res.stderr){
      out += '=== RUNTIME ERROR (stderr) ===\n' + res.stderr + '\n\n';
    }
    if(res.stdout){
      out += '=== STDOUT ===\n' + res.stdout + '\n\n';
    }
    if(res.message){
      out += '=== MESSAGE ===\n' + res.message + '\n\n';
    }
    // status
    const status = res.status && res.status.description ? res.status.description : 'Unknown';
    out = `Status: ${status}\n\n` + out;
    outputEl.textContent = out;
  }catch(err){
    outputEl.textContent = 'Error contacting Judge0: ' + (err && err.message ? err.message : err);
  }
}

// Run button handlers
runBtn.addEventListener('click', ()=>{
  const src = editor.value;
  const lang = languageSelect.value;
  const stdin = stdinEl.value;
  runCode(src, lang, stdin);
});

runSampleBtn.addEventListener('click', ()=>{
  if(!currentProblem){ outputEl.textContent = 'Select a problem first.'; return; }
  editor.value = getStarterFor(currentProblem, languageSelect.value);
  stdinEl.value = currentProblem.samples[0] ? currentProblem.samples[0].input : '';
  runBtn.click();
});

// Auto-fill starter template for current language
autofillBtn.addEventListener('click', ()=>{
  const lang = languageSelect.value;
  editor.value = starters[lang] || '';
});

// Initial UI
renderProblemList(problems);
applyFilters();

// Optionally load first problem
// loadProblem(1);
