// programmingtest.js
// Programming test: 100 unique MCQs (30 Easy, 40 Medium, 30 Hard)

const questions = [
  // ---------- EASY (1-30) ----------
  { question: "1) Which of these is a correct variable declaration in JavaScript?",
    options: ["var count = 5;", "int count = 5;", "let count := 5;", "num count = 5;"],
    answer: 0,
    explanation: "In JavaScript you declare variables using var, let, or const. 'int' is not JS." },

  { question: "2) Which data type is immutable in Python?",
    options: ["list", "dict", "set", "tuple"],
    answer: 3,
    explanation: "Tuple is immutable; list/dict/set are mutable." },

  { question: "3) What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlinking Text Markup", "HyperTool Markup Language"],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language." },

  { question: "4) The output of: console.log(typeof null) in JavaScript is:",
    options: ['"object"', '"null"', '"undefined"', '"number"'],
    answer: 0,
    explanation: "In JavaScript typeof null returns 'object' (historic quirk)." },

  { question: "5) Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "none"],
    answer: 2,
    explanation: "do...while executes loop body before checking condition." },

  { question: "6) Which symbol begins a single-line comment in C++?",
    options: ["//", "/*", "#", "<!--"],
    answer: 0,
    explanation: "C++ single-line comments use //." },

  { question: "7) What is the index of the first element of an array in most programming languages (C, Java, JavaScript)?",
    options: ["0", "1", "-1", "Depends"],
    answer: 0,
    explanation: "Most languages use 0-based indexing." },

  { question: "8) Which keyword creates a constant in JavaScript?",
    options: ["const", "let", "var", "constant"],
    answer: 0,
    explanation: "const declares block-scoped constants." },

  { question: "9) Which of these is not a relational operator?",
    options: ["==", "<=", "++", ">="],
    answer: 2,
    explanation: "++ is increment operator, not relational." },

  { question: "10) Which is used to include standard input/output in C?",
    options: ["#include<stdio.h>", "include iostream", "import io", "#import stdio"],
    answer: 0,
    explanation: "C uses #include<stdio.h> for standard IO." },

  { question: "11) In CSS, which property changes text color?",
    options: ["color", "font-size", "background-color", "text-style"],
    answer: 0,
    explanation: "The color property sets the text color." },

  { question: "12) Which symbol is used for string interpolation in Python f-strings?",
    options: ["{}", "$()", "f'' with { }", "%s"], answer: 2,
    explanation: "f-strings use f'...' and { } for interpolation." },

  { question: "13) Which HTTP method is used to retrieve data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: 0,
    explanation: "GET fetches data; POST/PUT/DELETE modify data." },

  { question: "14) The Big O time complexity of accessing an element by index in an array is:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: 0,
    explanation: "Array index access is constant time O(1)." },

  { question: "15) Which of these is NOT a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Graphical"],
    answer: 3,
    explanation: "Graphical is not a programming paradigm; it's UI related." },

  { question: "16) Which Python keyword is used to create a function?",
    options: ["func", "def", "function", "fn"],
    answer: 1,
    explanation: "def defines functions in Python." },

  { question: "17) Which structure stores key-value pairs?",
    options: ["Array", "Dictionary/Map", "Stack", "Queue"],
    answer: 1,
    explanation: "Dictionary/Map stores key-value pairs." },

  { question: "18) Which is the correct way to write an arrow function in JavaScript?",
    options: ["(x) => x * 2", "function => x {return x*2}", "-> x {x*2}", "fn x => x*2"],
    answer: 0,
    explanation: "Arrow function syntax is (args) => expression." },

  { question: "19) Which HTML tag is used for creating a link?",
    options: ["<a>", "<link>", "<href>", "<url>"], answer: 0,
    explanation: "<a href='...'> creates a hyperlink." },

  { question: "20) What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Question Lang"], answer: 0,
    explanation: "SQL = Structured Query Language." },

  { question: "21) Which operator combines conditions in C/Java (logical AND)?",
    options: ["&&", "||", "&", "|"], answer: 0,
    explanation: "&& is logical AND, || is logical OR." },

  { question: "22) In Java, which keyword is used to inherit a class?",
    options: ["extends", "implements", "inherits", "uses"], answer: 0,
    explanation: "extends is used for class inheritance in Java." },

  { question: "23) What is the default return type of a function in C if not specified?",
    options: ["int", "void", "float", "double"], answer: 0,
    explanation: "Historically in C, unspecified function defaulted to int (old C); modern C requires explicit types." },

  { question: "24) Which of these is a first-in-first-out data structure?",
    options: ["Queue", "Stack", "Tree", "Graph"], answer: 0,
    explanation: "Queue is FIFO; stack is LIFO." },

  { question: "25) Which HTML element holds the page title shown on the browser tab?",
    options: ["<title>", "<head>", "<meta>", "<h1>"], answer: 0,
    explanation: "The <title> element in <head> sets the tab title." },

  { question: "26) Which keyword prevents inheritance in Java?",
    options: ["final", "static", "private", "protected"], answer: 0,
    explanation: "final class cannot be subclassed." },

  { question: "27) Which command initializes a new Git repository?",
    options: ["git init", "git start", "git create", "git new"], answer: 0,
    explanation: "git init initializes repository." },

  { question: "28) Which function converts string to integer in C?",
    options: ["atoi()", "strtoi()", "toInt()", "parseInt()"], answer: 0,
    explanation: "atoi converts C-string to int." },

  { question: "29) Which HTML attribute links an external stylesheet?",
    options: ["rel='stylesheet' href='file.css'", "src='file.css'", "link='file.css'", "css='file.css'"], answer: 0,
    explanation: "Use <link rel='stylesheet' href='file.css'>." },

  { question: "30) Which method adds an item to end of JavaScript array?",
    options: ["push()", "pop()", "shift()", "unshift()"], answer: 0,
    explanation: "push() appends, pop() removes last." },

  // ---------- MEDIUM (31-70) ----------
  { question: "31) In OOP, what does 'encapsulation' mean?",
    options: ["Hiding internal state and requiring all interaction via methods", "Inheriting from multiple parents", "Using global variables", "Using procedural code"], answer: 0,
    explanation: "Encapsulation hides internals and exposes methods." },

  { question: "32) Time complexity of binary search on sorted array of n elements?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], answer: 0,
    explanation: "Binary search halves search space each step → O(log n)." },

  { question: "33) Which traversal gives ascending order for a binary search tree?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"], answer: 0,
    explanation: "In-order traversal visits nodes in ascending order in BST." },

  { question: "34) What is a stable sorting algorithm?",
    options: ["A sort that preserves relative order of equal elements", "A sort that is always O(n)", "A sort that uses swapping", "A sort that uses recursion"], answer: 0,
    explanation: "Stability preserves original order of equal keys." },

  { question: "35) Which SQL clause filters rows returned?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], answer: 0,
    explanation: "WHERE filters rows before grouping." },

  { question: "36) Which data structure is best for LIFO order?",
    options: ["Stack", "Queue", "Heap", "Graph"], answer: 0,
    explanation: "Stack follows Last-In-First-Out." },

  { question: "37) Which HTTP status code means 'Not Found'?",
    options: ["404", "200", "500", "301"], answer: 0,
    explanation: "404 indicates resource not found." },

  { question: "38) Which is true about recursion?",
    options: ["Every recursion must have a base case", "Recursion is always inefficient", "Recursion doesn't use stack", "Recursion is same as iteration"], answer: 0,
    explanation: "Base case prevents infinite recursion." },

  { question: "39) Which design pattern ensures only one instance of a class?",
    options: ["Singleton", "Factory", "Observer", "Adapter"], answer: 0,
    explanation: "Singleton restricts to a single instance." },

  { question: "40) What is the height of a complete binary tree with n nodes (in Big O)?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"], answer: 0,
    explanation: "Complete binary tree height is O(log n)." },

  { question: "41) Which of these is a NoSQL database?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], answer: 0,
    explanation: "MongoDB is document-based NoSQL." },

  { question: "42) Which keyword declares a class in Python?",
    options: ["class", "struct", "object", "define"], answer: 0,
    explanation: "Python uses 'class' keyword." },

  { question: "43) In Git, which command fetches remote changes and merges them into current branch?",
    options: ["git pull", "git fetch", "git clone", "git push"], answer: 0,
    explanation: "git pull is equivalent to fetch + merge." },

  { question: "44) Which algorithm finds shortest path in weighted graph with non-negative weights?",
    options: ["Dijkstra", "DFS", "BFS", "Prim"], answer: 0,
    explanation: "Dijkstra works with non-negative weights." },

  { question: "45) In relational DB, which normal form removes transitive dependencies?",
    options: ["3NF", "1NF", "2NF", "BCNF"], answer: 0,
    explanation: "3NF eliminates transitive dependencies." },

  { question: "46) Which is true about TCP?",
    options: ["Connection-oriented and reliable", "Connectionless and unreliable", "Connectionless and reliable", "None"], answer: 0,
    explanation: "TCP provides reliable, connection-oriented communication." },

  { question: "47) Which operation gives top element from stack without removing it?",
    options: ["peek/top", "pop", "push", "peek/pop"], answer: 0,
    explanation: "peek (or top) returns element without removal; pop removes it." },

  { question: "48) A hash table average-case lookup complexity is:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: 0,
    explanation: "Average-case lookup in hash table is O(1)." },

  { question: "49) Which sorting algorithm is in-place and has average O(n log n)?",
    options: ["QuickSort", "MergeSort", "CountingSort", "RadixSort"], answer: 0,
    explanation: "QuickSort is in-place and average O(n log n)." },

  { question: "50) In Java, which collection allows duplicate elements and preserves insertion order?",
    options: ["ArrayList", "HashSet", "TreeSet", "PriorityQueue"], answer: 0,
    explanation: "ArrayList allows duplicates and preserves order." },

  { question: "51) What is the main idea behind dynamic programming?",
    options: ["Store results of overlapping subproblems", "Use only recursion", "Avoid memoization", "Use greedy choices only"], answer: 0,
    explanation: "DP uses memoization/tabulation to avoid recomputation." },

  { question: "52) Which HTTP status code indicates 'Created'?",
    options: ["201", "200", "404", "500"], answer: 0,
    explanation: "201 indicates resource created successfully." },

  { question: "53) Which method in Java starts program execution?",
    options: ["public static void main(String[] args)", "start()", "run()", "Main()"], answer: 0,
    explanation: "Java starts with public static void main(...)." },

  { question: "54) Which of these is a stable sort?",
    options: ["Merge Sort", "QuickSort", "HeapSort", "SelectionSort"], answer: 0,
    explanation: "Merge sort is stable (if implemented stably)." },

  { question: "55) In databases, ACID stands for Atomicity, Consistency, Isolation, and __?",
    options: ["Durability", "Distribution", "Data", "Dependency"], answer: 0,
    explanation: "ACID: Atomicity, Consistency, Isolation, Durability." },

  { question: "56) Which memory is fastest in typical memory hierarchy?",
    options: ["CPU registers", "Cache", "RAM", "Disk"], answer: 0,
    explanation: "CPU registers are the fastest local storage." },

  { question: "57) Which data structure is used for BFS traversal?",
    options: ["Queue", "Stack", "PriorityQueue", "Set"], answer: 0,
    explanation: "BFS uses a queue to process nodes level by level." },

  { question: "58) Which is false about pointers in C?",
    options: ["They store memory addresses", "They can be NULL", "They are always safe (false)", "They can point to functions"], answer: 2,
    explanation: "Pointers can be unsafe; option claiming always safe is false." },

  { question: "59) Which algorithm is used for finding cycles in directed graphs?",
    options: ["DFS with recursion stack", "BFS", "Dijkstra", "Kruskal"], answer: 0,
    explanation: "DFS with recursion stack detection can find cycles in directed graphs." },

  { question: "60) Which operation on a binary heap removes highest/lowest priority element?",
    options: ["extractMax/extractMin", "insert", "peek", "levelOrder"], answer: 0,
    explanation: "extract removes root (max/min) from heap." },

  { question: "61) Which Python construct creates an anonymous function?",
    options: ["lambda", "def", "func", "anon"], answer: 0,
    explanation: "lambda creates anonymous functions in Python." },

  { question: "62) Which is the best way to prevent SQL injection?",
    options: ["Use parameterized queries / prepared statements", "Concatenate strings", "Use dynamic SQL", "Escape manually every char"], answer: 0,
    explanation: "Use prepared statements; they separate data from code." },

  { question: "63) Which is NOT a feature of OOP?",
    options: ["Recursion", "Encapsulation", "Inheritance", "Polymorphism"], answer: 0,
    explanation: "Recursion is algorithmic technique, not OOP-specific." },

  { question: "64) Which data structure is best for implementing an LRU cache?",
    options: ["Hashmap + Doubly linked list", "Array", "Stack", "Binary tree"], answer: 0,
    explanation: "Hashmap for O(1) lookup + DLL for O(1) updates." },

  { question: "65) Which TCP property is false?",
    options: ["Connectionless", "Reliable", "Ordered", "Flow-controlled"], answer: 0,
    explanation: "TCP is connection-oriented; 'connectionless' is false." },

  { question: "66) Which SQL statement changes existing rows?",
    options: ["UPDATE", "SELECT", "INSERT", "CREATE"], answer: 0,
    explanation: "UPDATE modifies existing rows." },

  { question: "67) Which algorithm finds Minimum Spanning Tree?",
    options: ["Kruskal", "Dijkstra", "Bellman-Ford", "Floyd-Warshall"], answer: 0,
    explanation: "Kruskal and Prim compute MST; Kruskal is an example." },

  { question: "68) Which sort is stable and works well for small integer ranges?",
    options: ["Counting sort", "QuickSort", "HeapSort", "InsertionSort"], answer: 0,
    explanation: "Counting sort is stable and good for small ranges." },

  { question: "69) Which complexity describes building a heap by repeated inserts?",
    options: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"], answer: 0,
    explanation: "Repeated insert approach is O(n log n); optimized heapify can be O(n)." },

  { question: "70) Which is true about REST APIs?",
    options: ["They are stateless", "They must use HTTP POST only", "They store session on server", "They require cookies"], answer: 0,
    explanation: "REST constraints include statelessness." },

  // ---------- HARD (71-100) ----------
  { question: "71) What is the time complexity of building a heap using Floyd's heapify (bottom-up)?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: 0,
    explanation: "Bottom-up heap construction is O(n)." },

  { question: "72) Which algorithm handles negative edge weights (but no negative cycles)?",
    options: ["Bellman-Ford", "Dijkstra", "Prim", "Kruskal"], answer: 0,
    explanation: "Bellman-Ford supports negative weights; Dijkstra doesn't." },

  { question: "73) For dynamic programming, which approach uses a table filled iteratively?",
    options: ["Tabulation (bottom-up)", "Memoization", "Greedy", "Divide and conquer"], answer: 0,
    explanation: "Tabulation fills DP table bottom-up iteratively." },

  { question: "74) Which data structure supports range-sum queries and point updates in O(log n)?",
    options: ["Fenwick (Binary Indexed) Tree", "Stack", "Queue", "Hashmap"], answer: 0,
    explanation: "Fenwick tree gives O(log n) updates & prefix sums." },

  { question: "75) Which is the average-case complexity of QuickSort?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"], answer: 0,
    explanation: "QuickSort average O(n log n); worst-case O(n^2)." },

  { question: "76) Which algorithm computes strongly connected components in directed graph?",
    options: ["Kosaraju's algorithm", "Dijkstra", "Kruskal", "Prim"], answer: 0,
    explanation: "Kosaraju (or Tarjan) identifies SCCs." },

  { question: "77) Which structure is used to implement Dijkstra efficiently?",
    options: ["Priority Queue (Min-heap)", "Stack", "Queue", "Array"], answer: 0,
    explanation: "Dijkstra uses min-heap PQ for efficient extraction." },

  { question: "78) Which technique reduces time by precomputing and storing results?",
    options: ["Memoization", "Greedy", "Backtracking", "Brute force"], answer: 0,
    explanation: "Memoization caches computed results to avoid recomputation." },

  { question: "79) Which data structure can be used to implement a LRU cache with O(1) operations?",
    options: ["Doubly linked list + Hash map", "Stack + queue", "Binary search tree", "Array"], answer: 0,
    explanation: "DLL + Hashmap provides O(1) access & updates." },

  { question: "80) Which algorithm detects negative cycles reachable from source?",
    options: ["Bellman-Ford", "Dijkstra", "Floyd-Warshall", "Kahn"], answer: 0,
    explanation: "Bellman-Ford can detect negative cycles." },

  { question: "81) In compilers, what is 'lexical analysis' purpose?",
    options: ["Tokenize source code", "Generate machine code", "Optimize code", "Link libraries"], answer: 0,
    explanation: "Lexical analysis breaks source into tokens." },

  { question: "82) Which graph algorithm gives all-pairs shortest paths in O(n^3)?",
    options: ["Floyd-Warshall", "Dijkstra repeated", "Prim", "Kruskal"], answer: 0,
    explanation: "Floyd-Warshall computes all-pairs shortest paths in O(n^3)." },

  { question: "83) Which hashing collision resolution uses probing sequence?",
    options: ["Open addressing", "Chaining", "Separate chaining", "External hashing"], answer: 0,
    explanation: "Open addressing resolves collisions via probing." },

  { question: "84) Which algorithm finds articulation points (cut vertices)?",
    options: ["DFS + low-link (Tarjan)", "BFS", "Dijkstra", "Kruskal"], answer: 0,
    explanation: "Tarjan-style DFS with low-link values finds articulation points." },

  { question: "85) Which is true about amortized analysis?",
    options: ["Average cost per operation across sequence", "Worst-case cost for each operation", "Best-case cost", "It does not consider sequences"], answer: 0,
    explanation: "Amortized analysis gives average over sequence of operations." },

  { question: "86) Which algorithm is used to find maximum flow in networks?",
    options: ["Edmonds-Karp (Ford-Fulkerson variant)", "Dijkstra", "Kruskal", "Prim"], answer: 0,
    explanation: "Edmonds-Karp is an implementation of Ford-Fulkerson for max flow." },

  { question: "87) Which tree balances itself by rotations on insert/delete?",
    options: ["AVL tree", "Binary search tree (unbalanced)", "B-Tree (not rotations)", "Heap"], answer: 0,
    explanation: "AVL maintains balance via rotations." },

  { question: "88) Which algorithm is used for pattern matching with linear time in average?",
    options: ["KMP", "Naive", "Rabin-Karp (avg)", "Boyer-Moore"], answer: 2,
    explanation: "Rabin-Karp average linear with rolling hash; KMP guarantees linear worst-case." },

  { question: "89) The Master Theorem solves recurrences of the form T(n)=aT(n/b)+f(n). For T(n)=2T(n/2)+n, complexity is:",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], answer: 0,
    explanation: "This corresponds to merge sort recurrence → O(n log n)." },

  { question: "90) Which structure stores intervals and supports overlap queries efficiently?",
    options: ["Interval tree", "Hashmap", "Trie", "Stack"], answer: 0,
    explanation: "Interval trees are specialized for interval queries." },

  { question: "91) Which algorithm determines if graph is bipartite?",
    options: ["BFS coloring", "DFS for cycles", "Dijkstra", "Prim"], answer: 0,
    explanation: "BFS with two-coloring checks for bipartiteness." },

  { question: "92) What is tail recursion?",
    options: ["Recursive call is the last action in function", "Recursive call in middle of function", "Recursion without base case", "Recursion using stack explicitly"], answer: 0,
    explanation: "Tail recursion has the recursive call as final step; can be optimized." },

  { question: "93) Which algorithm solves two-sum in O(n) average using extra memory?",
    options: ["Hashmap lookup", "Binary search", "Two pointers without sorting", "Brute force"], answer: 0,
    explanation: "Use hashmap to find complement in O(n) time." },

  { question: "94) Which is used to reduce collisions by combining multiple hash functions?",
    options: ["Bloom filter", "Binary heap", "Trie", "Suffix array"], answer: 0,
    explanation: "Bloom filters use multiple hashes to probabilistically test membership." },

  { question: "95) Which is true about B-Trees?",
    options: ["Designed for disk-based storage and balanced", "Not balanced", "Only for in-memory heaps", "Used in stacks"], answer: 0,
    explanation: "B-Trees optimize disk reads and remain balanced." },

  { question: "96) What is the Winograd or Strassen algorithm idea related to?",
    options: ["Faster matrix multiplication", "Sorting", "Graph traversal", "Memory allocation"], answer: 0,
    explanation: "Strassen and other algorithms improve matrix multiplication complexity." },

  { question: "97) Which test checks if a number is prime in probabilistic polynomial time?",
    options: ["Miller–Rabin", "Sieve of Eratosthenes", "Trial division", "Euclid"], answer: 0,
    explanation: "Miller-Rabin is a probabilistic primality test." },

  { question: "98) Which method protects shared data in multithreading?",
    options: ["Mutex/locks", "Recursion", "Polling", "Heap allocation"], answer: 0,
    explanation: "Mutexes/locks synchronize access between threads." },

  { question: "99) Which is true about CAP theorem for distributed systems?",
    options: ["You can have only two of Consistency, Availability, Partition tolerance", "You can have all three fully", "It applies to single-server apps", "It is DB normalization rule"], answer: 0,
    explanation: "CAP states you can only fully guarantee two of three properties in presence of partitions." },

  { question: "100) Which approach helps scale write-heavy workloads across DB servers?",
    options: ["Sharding (partitioning) data", "Vertical scaling only", "Using single master", "Adding indexes only"], answer: 0,
    explanation: "Sharding partitions data across servers to scale writes." }
];

// ---------- UI & Test Logic ----------
let current = 0;
let timer = null;
let timeLeft = 60;
const answers = Array(questions.length).fill(null); // selected index or null

// DOM refs
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const timerEl = document.getElementById('timerDisplay');
const trackerEl = document.getElementById('tracker');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const afterSubmitEl = document.getElementById('afterSubmit');

function buildTracker(){
  trackerEl.innerHTML = '';
  for(let i=0;i<questions.length;i++){
    const d = document.createElement('div');
    d.className = 'nav-dot unanswered';
    d.textContent = i+1;
    d.addEventListener('click',()=> loadQuestion(i));
    trackerEl.appendChild(d);
  }
  updateTrackerStyle();
}

function updateTrackerStyle(){
  const nodes = trackerEl.children;
  for(let i=0;i<nodes.length;i++){
    if(answers[i]!==null){
      nodes[i].classList.remove('unanswered');
      nodes[i].style.backgroundColor = '#1b5e20';
    } else {
      nodes[i].classList.add('unanswered');
      nodes[i].style.backgroundColor = '#4caf50';
    }
    nodes[i].classList.toggle('current', i===current);
  }
}

function startTimer(){
  clearInterval(timer);
  timeLeft = 60;
  timerEl.textContent = timeLeft;
  timer = setInterval(()=>{
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft<=0){
      clearInterval(timer);
      // auto-advance (mark unanswered if none)
      if(current < questions.length - 1){
        loadQuestion(current+1);
      } else {
        submitExam();
      }
    }
  },1000);
}

function renderOptions(qIndex){
  const q = questions[qIndex];
  optionsEl.innerHTML = '';
  q.options.forEach((opt, idx)=>{
    const div = document.createElement('div');
    div.className = 'option' + (answers[qIndex]===idx ? ' selected' : '');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'opt';
    radio.value = idx;
    radio.checked = (answers[qIndex]===idx);
    radio.style.marginRight = '10px';
    radio.addEventListener('change', ()=> {
      answers[qIndex] = idx;
      updateTrackerStyle();
      // highlight selection visually
      renderOptions(qIndex);
    });
    div.appendChild(radio);
    const txt = document.createElement('div');
    txt.textContent = opt;
    div.appendChild(txt);
    optionsEl.appendChild(div);
  });
}

function loadQuestion(i){
  // save current selection already saved via change events
  current = i;
  const q = questions[i];
  qnumEl.textContent = `Q${i+1}`;
  qtextEl.innerHTML = q.question;
  renderOptions(i);
  updateTrackerStyle();
  startTimer();
}

prevBtn.addEventListener('click', ()=>{
  if(current>0) loadQuestion(current-1);
});
nextBtn.addEventListener('click', ()=>{
  if(current < questions.length-1) loadQuestion(current+1);
});
submitBtn.addEventListener('click', ()=>{
  // confirm and submit
  const ok = confirm('Submit test and view results?');
  if(ok) submitExam();
});

function submitExam(){
  clearInterval(timer);
  // hide main card area options and show results
  const total = questions.length;
  let score = 0;
  const wrong = [];
  for(let i=0;i<total;i++){
    if(answers[i]===questions[i].answer){
      score++;
    } else {
      wrong.push(i);
    }
  }

  // Build results HTML
  let html = `<h3>Result: ${score} / ${total}</h3>`;
  const percent = (score/total)*100;
  html += `<p>Score Percentage: ${percent.toFixed(2)}%</p>`;
  if(percent >= 70) html += `<p style="color:green;font-weight:700">You have cleared the Programming Test — well done!</p>`;
  else html += `<p style="color:crimson;font-weight:700">You did not clear the test. Practice more and try again.</p>`;

  html += `<hr><h4>Review (incorrect / unattempted)</h4>`;
  if(wrong.length === 0) html += `<p>All answers correct — excellent!</p>`;
  else {
    wrong.forEach(idx=>{
      const q = questions[idx];
      const user = (answers[idx]===null) ? 'Not Attempted' : q.options[answers[idx]];
      html += `<div style="margin-bottom:12px;padding:8px;border-radius:8px;background:#fffefe;">
                 <strong>Q${idx+1}:</strong> ${q.question}<br>
                 <strong>Your answer:</strong> ${user} <br>
                 <strong>Correct answer:</strong> ${q.options[q.answer]} <br>
                 <div style="margin-top:6px;" class="explain"><strong>Explanation:</strong> ${q.explanation}</div>
               </div>`;
    });
  }

  html += `<p style="text-align:center;margin-top:12px;">
            <a href="technicalmcqs.html" style="display:inline-block;padding:10px 16px;border-radius:8px;background:#ff9800;color:#fff;text-decoration:none;font-weight:700;">Back to Technical Topics</a>
           </p>`;

  afterSubmitEl.style.display = 'block';
  afterSubmitEl.innerHTML = html;

  // hide question card area
  document.getElementById('qcard').style.display = 'none';
  // show results in its place (we already filled afterSubmitEl)
  // scroll to top
  window.scrollTo({ top:0, behavior:'smooth' });
}

// Start exam: show question area and tracker; used by Start Test button
function startExam(){
  document.getElementById('qcard').style.display = 'block';
  afterSubmitEl.style.display = 'none';
  buildTracker();
  loadQuestion(0);
}

// Auto-start not triggered; user clicks Start Test. But you may call startExam() to auto-start.
