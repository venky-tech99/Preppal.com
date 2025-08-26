// datastructurestest.js
// Data Structures Test — 100 MCQs with explanations
// Expects elements in HTML:
// - #timer
// - #question-container
// - Buttons that call prevQuestion(), nextQuestion(), submitTest()

const questions = [
  // 30 EASY (1-30)
  { q: "1. Which data structure uses LIFO (Last-In-First-Out)?",
    options: ["Queue","Stack","Linked List","Hash Table"],
    answer: 1,
    explanation: "Stack operates as LIFO — last pushed item is popped first."},
  { q: "2. Which data structure uses FIFO (First-In-First-Out)?",
    options: ["Stack","Queue","Tree","Graph"],
    answer: 1,
    explanation: "Queue uses FIFO — first enqueued element is dequeued first."},
  { q: "3. What is the time complexity to access element by index in an array (random access)?",
    options: ["O(1)","O(log n)","O(n)","O(n log n)"],
    answer: 0,
    explanation: "Arrays provide constant-time random access by index."},
  { q: "4. Which structure is best for implementing recursion call history?",
    options: ["Queue","Stack","Hash Table","Heap"],
    answer: 1,
    explanation: "Function call stack stores return addresses and local variables — LIFO."},
  { q: "5. In a singly linked list, insertion at head takes which time complexity?",
    options: ["O(1)","O(log n)","O(n)","O(n log n)"],
    answer: 0,
    explanation: "Inserting at head only changes head pointer and node's next — constant time."},
  { q: "6. Which DS stores key→value pairs for average O(1) lookup?",
    options: ["Array","Stack","Hash Table","Linked List"],
    answer: 2,
    explanation: "Hash tables typically provide average O(1) lookup using hashing."},
  { q: "7. Which traversal visits root, left, then right nodes for binary trees?",
    options: ["Inorder","Postorder","Preorder","Level-order"],
    answer: 2,
    explanation: "Preorder traversal visits root first, then left subtree, then right subtree."},
  { q: "8. Binary Search Tree (BST) property is?",
    options: ["Left < Node < Right","Left > Node > Right","Random order","Only left children exist"],
    answer: 0,
    explanation: "In BST left subtree values are less, right subtree values are greater."},
  { q: "9. What data structure is ideal for implementing BFS on a graph?",
    options: ["Stack","Queue","Heap","Hash Table"],
    answer: 1,
    explanation: "BFS uses a queue to visit nodes level-by-level."},
  { q: "10. Which DS is best for priority scheduling?",
    options: ["Queue","Stack","Priority Queue (Heap)","Array"],
    answer: 2,
    explanation: "Priority queues (heaps) allow extracting highest/lowest priority efficiently."},
  { q: "11. What does 'pop' do on a stack?",
    options: ["Add element to top","Remove top element","Peek bottom element","Clear stack"],
    answer: 1,
    explanation: "Pop removes and returns the top element of the stack."},
  { q: "12. What operation does 'enqueue' perform?",
    options: ["Add to front","Add to rear","Remove front","Peek rear"],
    answer: 1,
    explanation: "Enqueue inserts an element at the rear of a queue."},
  { q: "13. Which data structure would you use to implement undo feature?",
    options: ["Queue","Stack","Tree","Graph"],
    answer: 1,
    explanation: "Undo uses stack to reverse last actions (LIFO)."},
  { q: "14. Which is an example of a dynamic array in high-level languages?",
    options: ["C array","C++ vector / Java ArrayList","Fixed buffer","Linked list"],
    answer: 1,
    explanation: "Dynamic arrays (vector, ArrayList) grow as needed while providing random access."},
  { q: "15. Which DS stores elements in continuous memory locations?",
    options: ["Linked List","Array","Graph","Tree"],
    answer: 1,
    explanation: "Arrays use contiguous memory; linked lists use nodes with pointers."},
  { q: "16. Which structure is best for implementing adjacency list of a graph?",
    options: ["Array of lists","Matrix only","Single linked list global","Heap"],
    answer: 0,
    explanation: "Adjacency lists are often arrays (or maps) of lists of neighbors."},
  { q: "17. Which is true about singly linked list's previous pointer?",
    options: ["It has previous pointer","It doesn't have previous pointer","Always circular","Always sorted"],
    answer: 1,
    explanation: "Singly linked lists store only next pointer; doubly linked lists have prev pointers."},
  { q: "18. Which operation is expensive on array relative to linked list?",
    options: ["Index access","Push back","Insert at middle","Read element"],
    answer: 2,
    explanation: "Insertion in middle requires shifting elements — O(n) for arrays, O(1) if you have pointer in linked list."},
  { q: "19. What is the height of a tree with single node?",
    options: ["0 or 1 depending on definition","n","log n","Undefined"],
    answer: 0,
    explanation: "Height often defined as 0 for single node (or 1 depending on convention); common convention uses 0."},
  { q: "20. What structure uses nodes and pointers and can implement stacks/queues?",
    options: ["Array only","Linked List","Hash Table","Heap"],
    answer: 1,
    explanation: "Linked lists are used to implement stacks and queues with dynamic allocation."},
  { q: "21. What is a leaf node in a tree?",
    options: ["Node with two children","Node with no children","Root node","Node with parent only"],
    answer: 1,
    explanation: "Leaf nodes have no children."},
  { q: "22. Which DS provides fastest index-based retrieval?",
    options: ["Linked List","Binary Tree","Array","Stack"],
    answer: 2,
    explanation: "Array allows direct index access in O(1)."},
  { q: "23. What is the main benefit of a linked list over an array?",
    options: ["Better random access","Dynamic size and cheap insertion/deletion","Less memory usage always","Faster indexing"],
    answer: 1,
    explanation: "Linked lists allow dynamic allocation and efficient insert/delete at nodes."},
  { q: "24. Which traversal prints nodes in sorted order for BST?",
    options: ["Preorder","Postorder","Inorder","Level-order"],
    answer: 2,
    explanation: "Inorder traversal of BST visits nodes in ascending sorted order."},
  { q: "25. Which DS would you use to implement LRU cache efficiently?",
    options: ["Queue + Hash","Stack only","Doubly linked list + Hash Map","Array only"],
    answer: 2,
    explanation: "LRU cache uses doubly linked list for ordering and hash map for O(1) access."},
  { q: "26. What is the operation to add an item to a heap?",
    options: ["enqueue","push/insert with heapify-up","pop","peek"],
    answer: 1,
    explanation: "Heap insertion adds element then restores heap property via sift-up."},
  { q: "27. Which is an example of persistent DS?",
    options: ["Regular array","Immutable/persistent linked list","Standard queue","Stack with pop"],
    answer: 1,
    explanation: "Persistent data structures preserve previous versions after updates (immutable lists)."},
  { q: "28. What is adjacency matrix good for?",
    options: ["Sparse graphs","Dense graphs where quick edge check needed","Only trees","No graphs"],
    answer: 1,
    explanation: "Adjacency matrices work well for dense graphs with quick O(1) edge checks."},
  { q: "29. Which operation on hash table may degrade to O(n) in worst case?",
    options: ["Lookup","Always O(1)","Delete only","Insert only"],
    answer: 0,
    explanation: "In worst-case collisions or poor hash, lookup can degrade to O(n) if chaining or open addressing clusters occur."},
  { q: "30. Which DS is used to implement recursion?",
    options: ["Queue","Stack","Heap","Graph"],
    answer: 1,
    explanation: "The call stack (stack) stores return addresses and local variables."},

  // 40 MEDIUM (31-70)
  { q: "31. What is the average search complexity in a balanced BST?",
    options: ["O(1)","O(n)","O(log n)","O(n log n)"],
    answer: 2,
    explanation: "Balanced BST provides O(log n) average-case search-time."},
  { q: "32. In a heap, which property holds for max-heap?",
    options: ["Parent ≤ children","Parent ≥ children","All leaves equal","No property"],
    answer: 1,
    explanation: "In max-heap parent key is greater than or equal to its children."},
  { q: "33. Which traversal is used to get postfix expression (for expression trees)?",
    options: ["Preorder","Inorder","Postorder","Level-order"],
    answer: 2,
    explanation: "Postorder yields postfix (left,right,root) for expression trees."},
  { q: "34. What is amortized cost of push on dynamic array (when doubling)?",
    options: ["O(n)","O(log n)","O(1) amortized","O(n log n)"],
    answer: 2,
    explanation: "Doubling strategy yields amortized O(1) for append operations."},
  { q: "35. Which graph traversal is best for shortest path in an unweighted graph?",
    options: ["DFS","BFS","Dijkstra","Bellman-Ford"],
    answer: 1,
    explanation: "BFS finds shortest path in unweighted graphs (by edges count)."}, 
  { q: "36. Time complexity to insert into balanced BST (e.g., AVL)?",
    options: ["O(1)","O(n)","O(log n)","O(n log n)"],
    answer: 2,
    explanation: "Insertion in balanced BST requires O(log n) due to height~log n."},
  { q: "37. Which data structure allows O(1) amortized push and pop at end and O(1) random access?",
    options: ["Linked list","Dynamic array","Queue","Stack (only)"],
    answer: 1,
    explanation: "Dynamic arrays provide amortized O(1) push/pop and constant index access."},
  { q: "38. What is the main disadvantage of adjacency matrix compared to list?",
    options: ["Faster edge checks","Slower for dense graphs","Higher memory for sparse graphs","No disadvantages"],
    answer: 2,
    explanation: "Adjacency matrix uses O(n^2) memory — inefficient for sparse graphs."},
  { q: "39. Which algorithm finds strongly connected components (SCC)?",
    options: ["Dijkstra","Kosaraju / Tarjan","BFS only","Prim"],
    answer: 1,
    explanation: "Kosaraju and Tarjan algorithms compute SCCs in directed graphs."},
  { q: "40. Which data structure is suitable for implementing priority queue?",
    options: ["Binary heap","Linked list only","Array unsorted","Graph"],
    answer: 0,
    explanation: "Binary heap is a common implementation of priority queue."},
  { q: "41. In hash table with chaining, average cost of lookup is?",
    options: ["O(1)","O(n)","O(log n)","O(n log n)"],
    answer: 0,
    explanation: "With good hash and load factor, average lookups are O(1)."},
  { q: "42. Which tree is self-balancing?",
    options: ["BST (unbalanced)","AVL / Red-Black Tree","Plain binary tree","Heap"],
    answer: 1,
    explanation: "AVL and Red-Black trees maintain balance through rotations."},
  { q: "43. Which traversal is used to get prefix expression from expression tree?",
    options: ["Inorder","Postorder","Preorder","Level-order"],
    answer: 2,
    explanation: "Preorder (root,left,right) generates prefix (Polish) notation."},
  { q: "44. What does 'hash collision' mean?",
    options: ["Two keys map to different buckets","Two keys map to same bucket","No keys in table","Table full"],
    answer: 1,
    explanation: "Collision occurs when multiple keys produce same hash index."},
  { q: "45. Which data structure helps to check balanced parentheses efficiently?",
    options: ["Queue","Stack","Graph","Heap"],
    answer: 1,
    explanation: "Stack is used to match opening and closing parentheses in linear time."},
  { q: "46. What is the worst-case time for searching in a hash table with chaining?",
    options: ["O(1)","O(n)","O(log n)","O(n log n)"],
    answer: 1,
    explanation: "Worst-case all keys in one bucket yields O(n) lookup."},
  { q: "47. Which algorithm is used to get minimum spanning tree (MST)?",
    options: ["Dijkstra","Prim/Kruskal","BFS","Topological sort"],
    answer: 1,
    explanation: "Prim and Kruskal compute MST for weighted undirected graphs."},
  { q: "48. Which sort is stable?",
    options: ["QuickSort","MergeSort","HeapSort","SelectionSort"],
    answer: 1,
    explanation: "MergeSort is a stable comparison sort; QuickSort is not stable by default."},
  { q: "49. What is topological sort applicable for?",
    options: ["Any graph","Directed Acyclic Graph (DAG)","Undirected cyclic graph","Weighted graph only"],
    answer: 1,
    explanation: "Topological sorting orders vertices of a DAG linearly respecting dependencies."},
  { q: "50. Which structure represents relationships in many-to-many manner?",
    options: ["Array","Graph","Stack","Queue"],
    answer: 1,
    explanation: "Graphs model complex pairwise relationships between entities."},
  { q: "51. Which DS supports FIFO processing with O(1) enqueue and dequeue?",
    options: ["Array naive","Circular queue (array) or linked list queue","Stack only","Tree"],
    answer: 1,
    explanation: "Circular buffer or linked-list queue supports O(1) enqueue/dequeue."},
  { q: "52. Which algorithm finds shortest paths from single source for weighted graphs with non-negative weights?",
    options: ["BFS","Dijkstra","Bellman-Ford","Floyd-Warshall"],
    answer: 1,
    explanation: "Dijkstra's algorithm computes shortest paths for non-negative edge weights."},
  { q: "53. Which technique reduces collisions using double hashing?",
    options: ["Separate chaining","Open addressing with double hashing","Linked lists","BST mapping"],
    answer: 1,
    explanation: "Double hashing probes positions based on two hash functions for open addressing."},
  { q: "54. Which tree data structure is optimized for fast search in databases (disk-friendly)?",
    options: ["Binary heap","B-Tree/B+Tree","Linked List","Trie"],
    answer: 1,
    explanation: "B-Trees minimize disk IO and balance branching for database indices."},
  { q: "55. For Trie, which operation is very efficient?",
    options: ["Exact match only","Prefix search / autocomplete","Numeric sort only","Graph traversal"],
    answer: 1,
    explanation: "Tries enable efficient prefix queries and autocomplete."},
  { q: "56. Which DS is best for LIFO and allows O(1) push/pop at one end?",
    options: ["Queue","Deque or Stack","Hash Table","Binary Tree"],
    answer: 1,
    explanation: "Stacks (or deque used as stack) provide O(1) push/pop."},
  { q: "57. What is complexity of binary search on sorted array?",
    options: ["O(1)","O(n)","O(log n)","O(n log n)"],
    answer: 2,
    explanation: "Binary search halves the search space each step — O(log n)."},
  { q: "58. In open addressing, what does linear probing cause over time?",
    options: ["No issues","Primary clustering","Secondary clustering","Immediate rehash"],
    answer: 1,
    explanation: "Linear probing can cause primary clustering where consecutive filled slots slow operations."},
  { q: "59. Which algorithm detects cycle in directed graph?",
    options: ["Kahn's algorithm / DFS with recursion stack detection","Dijkstra","Prim","BFS only"],
    answer: 0,
    explanation: "Topological sort via Kahn or DFS recursion stack method detects cycles in directed graphs."},
  { q: "60. Which DS is space-efficient for storing sparse vectors?",
    options: ["Full array","Hash map / dictionary","Large matrix","Linked list of fixed size"],
    answer: 1,
    explanation: "Hash map stores only non-zero entries for sparse arrays saving memory."},
  { q: "61. Which sorting algorithm is in-place and O(n^2) in worst-case?",
    options: ["MergeSort","QuickSort (worst-case)","HeapSort (O(n log n))","CountingSort"],
    answer: 1,
    explanation: "QuickSort worst-case (e.g., sorted pivot choices) degrades to O(n^2) if not randomized."},
  { q: "62. Which DS is used by garbage collectors to track object graphs?",
    options: ["Stacks only","Graphs/traversals (mark-and-sweep)","Queues only","Heaps only"],
    answer: 1,
    explanation: "GC uses graph traversal from roots to mark reachable objects."},
  { q: "63. What is a balanced tree's height complexity approximately?",
    options: ["O(n)","O(log n)","O(1)","O(n log n)"],
    answer: 1,
    explanation: "Balanced trees maintain height ~ O(log n) for n nodes."},
  { q: "64. Which approach reduces collision by chaining with linked lists?",
    options: ["Open addressing","Separate chaining","Double hashing","Linear probing"],
    answer: 1,
    explanation: "Separate chaining stores colliding keys in buckets implemented as linked lists."},
  { q: "65. Which DS is best for implementing undo & redo (both)?",
    options: ["Two stacks","Single queue","Hash table","Priority queue"],
    answer: 0,
    explanation: "Two stacks (undo/redo stacks) manage operations for undo and redo."},
  { q: "66. What data structure supports insertion, deletion, and search in O(log n) average?",
    options: ["Unbalanced BST worst-case","AVL / balanced BST","Array unsorted","Hash with O(1) average"],
    answer: 1,
    explanation: "Balanced BSTs (AVL, Red-Black) guarantee O(log n) operations."},
  { q: "67. Which algorithm converts infix to postfix (RPN)?",
    options: ["Shunting-yard (stack)","Dijkstra shortest path","Kruskal","Prim"],
    answer: 0,
    explanation: "Shunting-yard algorithm uses stack to convert infix to postfix."},
  { q: "68. Which technique speeds up repeated queries by storing results?",
    options: ["Hashing collisions","Memoization / caching","Sorting only","Graph coloring"],
    answer: 1,
    explanation: "Memoization caches function results to avoid recomputation."},
  { q: "69. Which DS helps implement adjacency list and efficient degree queries?",
    options: ["Adjacency matrix only","Adjacency list with vector/list per vertex","Stack per vertex","Hash array only"],
    answer: 1,
    explanation: "Adjacency list stores neighbor lists enabling degree queries easily."},
  { q: "70. Which DS supports priority with ability to remove arbitrary element quickly if you have index?",
    options: ["Heap without index","Indexed priority queue (heap with positions)","Linked list only","Array naive"],
    answer: 1,
    explanation: "Indexed priority queues maintain a mapping from element to heap index for fast updates/removals."},

  // 30 HARD (71-100)
  { q: "71. Which algorithm finds articulation points (cut vertices) in an undirected graph?",
    options: ["Tarjan's algorithm (DFS lowlink)","Dijkstra","Kahn","Prim"],
    answer: 0,
    explanation: "Tarjan's DFS lowlink technique identifies articulation points and bridges."},
  { q: "72. What is amortized complexity of delete-min in binary heap with n elements?",
    options: ["O(1) amortized","O(log n)","O(n)","O(n log n)"],
    answer: 1,
    explanation: "Delete-min (extract) performs sift-down costing O(log n)."},
  { q: "73. Which structure allows O(1) push/pop and O(1) middle delete if you have pointer to middle?",
    options: ["Array","Doubly linked list with pointer","Singly list only","Binary tree"],
    answer: 1,
    explanation: "Doubly linked list supports O(1) removal given direct pointer to node."},
  { q: "74. In persistent (immutable) data structures, how are updates typically handled?",
    options: ["In-place mutation","Path copying / structural sharing","Delete whole structure","No updates allowed"],
    answer: 1,
    explanation: "Persistent structures use path-copying and share unchanged portions to maintain versions."},
  { q: "75. Which algorithm finds articulation points and bridges and is O(V+E)?",
    options: ["Tarjan's algorithm using discovery/low times","Dijkstra","Prim","Topological sort"],
    answer: 0,
    explanation: "Tarjan's DFS finds bridges/articulation points in linear time."},
  { q: "76. Which tree is used to implement interval queries (range min/max)?",
    options: ["Binary heap","Segment tree / Fenwick (BIT)","Linked list","Trie"],
    answer: 1,
    explanation: "Segment trees and Fenwick (BIT) support range queries and updates efficiently."},
  { q: "77. Which DS accelerates prefix-sum queries with O(log n) updates/queries?",
    options: ["Segment tree","Fenwick tree (BIT)","Hash table only","Brute force array"],
    answer: 1,
    explanation: "Fenwick tree supports prefix sums and point updates in O(log n)."},
  { q: "78. Which DS allows O(1) amortized union/find when using union by rank and path compression?",
    options: ["Hash table","Disjoint set (Union-Find)","Binary heap","Trie"],
    answer: 1,
    explanation: "Union-Find with optimizations provides near-constant inverse-Ackermann time."},
  { q: "79. Which graph algorithm uses priority queue and relaxations for weighted shortest paths?",
    options: ["BFS","Dijkstra","DFS","Kruskal"],
    answer: 1,
    explanation: "Dijkstra uses PQ for selecting nearest unreached node and relax edges."},
  { q: "80. Which structure is efficient to implement substring search using automaton?",
    options: ["Trie / Aho-Corasick automaton","Heap","Queue","BST"],
    answer: 0,
    explanation: "Trie with Aho-Corasick builds automaton to search multiple patterns in linear time."},
  { q: "81. Which tree balances by rotations and tracks height differences ≤1?",
    options: ["Red-Black Tree","AVL Tree","B-Tree","Splay Tree"],
    answer: 1,
    explanation: "AVL tree maintains height balance and uses rotations to restore balance."},
  { q: "82. Which DS suits implementing priority scheduling with decrease-key operation efficiently?",
    options: ["Binary heap (no efficient decrease-key)","Fibonacci heap","Array only","Linked list"],
    answer: 1,
    explanation: "Fibonacci heaps provide very fast amortized decrease-key used in algorithms like Dijkstra."},
  { q: "83. What is suffix array used for?",
    options: ["Quick sort","Efficient substring search and pattern matching","Graph traversal","Heap operations"],
    answer: 1,
    explanation: "Suffix arrays/indexes help search substrings and compute suffix-related queries."},
  { q: "84. Which DS is suitable for representing sparse matrices compactly?",
    options: ["Full 2D array","Compressed Sparse Row (CSR) / lists","Linked list of all cells","Heap"],
    answer: 1,
    explanation: "CSR and similar compressed formats store only non-zero elements compactly."},
  { q: "85. Which approach finds strongly connected components in O(V+E)?",
    options: ["Kosaraju / Tarjan","Dijkstra","Prim","BFS only"],
    answer: 0,
    explanation: "Kosaraju (two DFS passes) and Tarjan (single pass lowlinks) find SCCs in linear time."},
  { q: "86. What is the time complexity of building a heap from n elements (heapify)?",
    options: ["O(n log n)","O(n)","O(log n)","O(n^2)"],
    answer: 1,
    explanation: "Bottom-up heap construction is O(n), not O(n log n)."},
  { q: "87. Which DS supports range minimum query (RMQ) fastest for static arrays?",
    options: ["Segment tree","Sparse table","Fenwick tree","Hash table"],
    answer: 1,
    explanation: "Sparse table answers static RMQ in O(1) after O(n log n) preprocessing."},
  { q: "88. Which DS technique compresses paths in Union-Find?",
    options: ["Path compression","Path splitting","Path halving","All of the above"],
    answer: 3,
    explanation: "Variants like path compression, splitting and halving improve Union-Find efficiency."},
  { q: "89. Which structure enumerates combinations/permutations via backtracking with pruning?",
    options: ["Heap","Recursion with stack","Trie only","Queue"],
    answer: 1,
    explanation: "Backtracking uses recursion (stack) and pruning to generate combinatorial sets."},
  { q: "90. Which data structure provides O(log n) successor/predecessor queries and is ordered?",
    options: ["Hash table","BST (balanced) like RB-tree","Heap","Stack"],
    answer: 1,
    explanation: "Balanced BSTs support ordered operations like successor/predecessor in O(log n)."},
  { q: "91. What technique reduces memory overhead for sparse tries by compressing chains?",
    options: ["Patricia / compressed trie","Normal trie only","heapification","segmentation"],
    answer: 0,
    explanation: "Patricia tries compress common single-child paths to save space."},
  { q: "92. Which structure supports efficient top-k queries (largest k elements)?",
    options: ["Min-heap of size k","Max-heap of full array only","Queue only","Trie"],
    answer: 0,
    explanation: "Maintain min-heap of size k to track top-k items in streaming data."},
  { q: "93. Which algorithm computes all-pairs shortest paths?",
    options: ["Dijkstra repeated","Floyd-Warshall","Kruskal","Prim"],
    answer: 1,
    explanation: "Floyd-Warshall computes APSP in O(n^3) using dynamic programming."},
  { q: "94. Which DS is useful for implementing undoable union operations (rollback)?",
    options: ["Persistent Union-Find / rollbackable DS","Normal array","Simple stack only","Hash table only"],
    answer: 0,
    explanation: "Rollbackable DS or persistent UF supports undoing unions for divide-and-conquer algorithms."},
  { q: "95. What is heavy-light decomposition used for?",
    options: ["Graph coloring","Decompose trees to answer path queries efficiently","Sorting only","Heap optimization"],
    answer: 1,
    explanation: "Heavy-light splits tree into chains to answer path queries like sum/max efficiently with segment trees."},
  { q: "96. Which tree uses rotations and ensures ~O(log n) for operations and is used in STL set/map?",
    options: ["AVL","Red-Black Tree","Splay Tree","Treap"],
    answer: 1,
    explanation: "C++ STL typically uses Red-Black trees for ordered containers."},
  { q: "97. Which randomized DS merges BST properties with heap priorities to maintain balance?",
    options: ["Treap","AVL","RB-Tree","Splay"],
    answer: 0,
    explanation: "Treap assigns random priorities and maintains both BST key order and heap priority."},
  { q: "98. Which algorithm solves maximum flow using augmenting paths and capacities?",
    options: ["Ford-Fulkerson / Edmonds-Karp / Dinic","Dijkstra","Prim","Kruskal"],
    answer: 0,
    explanation: "Flow algorithms use graph residual networks and BFS/DFS for augmenting paths."},
  { q: "99. Which data structure helps represent function calls & local variables during execution?",
    options: ["Heap","Call stack","Queue","Graph"],
    answer: 1,
    explanation: "Call stack stores return addresses and local variables during function calls."},
  { q: "100. Which technique orders nodes so that edges go from earlier to later nodes (if possible)?",
    options: ["Topological sort","BFS only","Dijkstra","Union-Find"],
    answer: 0,
    explanation: "Topological sort orders nodes of a DAG so that all edges go from earlier to later nodes."}
];

// --------- Test runtime logic ----------
const total = questions.length;
let currentIndex = 0;
let answers = new Array(total).fill(null);
let timeLeft = 60;
let timerId = null;

// DOM refs (assumes elements exist)
const timerEl = document.getElementById('timer');
const containerEl = document.getElementById('question-container');
const resultDiv = document.getElementById('result');

// Render a question
function renderQuestion() {
  stopTimer();
  timeLeft = 60;
  const q = questions[currentIndex];
  let html = `<div class="question"><strong>Q${currentIndex+1}.</strong> ${q.q}</div>`;
  html += `<div class="options">`;
  q.options.forEach((opt, i) => {
    const checked = answers[currentIndex] === i ? 'checked' : '';
    html += `<label style="display:block;margin:8px 0;padding:10px;border-radius:6px;background:#ffffff12;cursor:pointer">
      <input type="radio" name="choice" value="${i}" ${checked} style="margin-right:10px"> ${opt}
    </label>`;
  });
  html += `</div>`;
  html += `<div style="margin-top:12px;color:#fff8">Selected: ${answers[currentIndex]===null ? 'None' : q.options[answers[currentIndex]]}</div>`;
  containerEl.innerHTML = html;

  // Attach listeners to radio inputs
  const radios = containerEl.querySelectorAll('input[name="choice"]');
  radios.forEach(r => r.addEventListener('change', (e) => {
    answers[currentIndex] = parseInt(e.target.value, 10);
  }));

  updateTimerDisplay();
  startTimer();
  // Scroll to top of question container for better UX
  containerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Timer functions
function startTimer() {
  updateTimerDisplay();
  timerId = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      // auto advance
      if (currentIndex < total - 1) {
        currentIndex++;
        renderQuestion();
      } else {
        submitTest();
      }
    }
  }, 1000);
}
function stopTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; }
}
function updateTimerDisplay() {
  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const ss = String(timeLeft % 60).padStart(2, '0');
  if (timerEl) timerEl.textContent = `Time left: ${mm}:${ss}`;
}

// Navigation
function prevQuestion() {
  stopTimer();
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}
function nextQuestion() {
  stopTimer();
  if (currentIndex < total - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    submitTest();
  }
}

// Submit and results
function submitTest() {
  stopTimer();
  // compute score and prepare explanations for wrongs
  let score = 0;
  const wrongs = [];
  for (let i = 0; i < total; i++) {
    const user = answers[i];
    const correctIndex = questions[i].answer;
    if (user === correctIndex) score++;
    else {
      wrongs.push({
        index: i + 1,
        question: questions[i].q,
        your: user === null ? "Not Attempted" : questions[i].options[user],
        correct: questions[i].options[correctIndex],
        explanation: questions[i].explanation
      });
    }
  }

  // Build result HTML
  let html = `<h2 style="margin-top:0;color:#fff">You scored ${score} / ${total}</h2>`;
  html += `<p style="color:#fff8">Attempted: ${total - wrongs.length} | Wrong/Unattempted: ${wrongs.length}</p>`;
  html += `<div style="max-height:60vh;overflow:auto;padding:8px;margin-top:12px;background:rgba(255,255,255,0.03);border-radius:8px">`;
  html += `<h3 style="color:#ffd;">Review Wrong / Unattempted</h3>`;
  wrongs.forEach(w => {
    html += `<div style="border-radius:8px;padding:10px;margin-bottom:8px;background:#fff3;text-align:left">
      <strong>Q${w.index}:</strong> ${escapeHtml(w.question)}<br>
      <strong>Your answer:</strong> ${escapeHtml(w.your)}<br>
      <strong>Correct answer:</strong> ${escapeHtml(w.correct)}<br>
      <strong>Explanation:</strong> ${escapeHtml(w.explanation)}
    </div>`;
  });
  html += `</div>`;
  html += `<div style="margin-top:12px;color:#fff8">Tip: Review the explanations, revisit corresponding learn pages, and retake the test.</div>`;

  if (resultDiv) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = html;
  }

  // optionally hide question container UI
  if (containerEl) containerEl.style.display = 'none';
  if (timerEl) timerEl.style.display = 'none';
  // hide nav buttons if present (they're in HTML)
  const btns = document.querySelectorAll('button');
  btns.forEach(b => {
    if (b.id === 'submitBtn') return;
    if (b.id === 'prevBtn' || b.id === 'nextBtn') b.style.display = 'none';
  });
  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// small helper to escape HTML
function escapeHtml(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g, function(m){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

// start test by rendering first question
renderQuestion();

// expose functions to global scope so HTML buttons can call them
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.submitTest = submitTest;
