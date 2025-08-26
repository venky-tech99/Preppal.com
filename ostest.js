// ostest.js
// Operating Systems Test — 100 MCQs (30 easy, 40 medium, 30 hard)
// 1 minute per question, auto-advance when time is up
// Save as ostest.js in same folder as ostest.html

/* -----------------------
   Questions array (100 items)
   Each item: { q, options:[4], answer:index, explanation }
   ----------------------- */

const questions = [
  // 30 Easy (1-30)
  { q: "What is an Operating System (OS)?",
    options: ["A hardware component","A system software that manages resources","A programming language","A database"],
    answer: 1,
    explanation: "An OS is system software that manages hardware & software resources and provides services to applications."
  },
  { q: "Which of the following is a popular open-source OS?",
    options: ["Windows 10","macOS","Linux","iOS"],
    answer: 2,
    explanation: "Linux is a widely used open-source operating system kernel and family (e.g., Ubuntu)."
  },
  { q: "Which OS is primarily used on Apple desktops?",
    options: ["Ubuntu","macOS","Android","ChromeOS"],
    answer: 1,
    explanation: "macOS is Apple's desktop operating system."
  },
  { q: "What is a process?",
    options: ["A passive program stored on disk","A running instance of a program","A networking protocol","A file system structure"],
    answer: 1,
    explanation: "A process is an active (running) instance of a program with its own resources and execution state."
  },
  { q: "Which is an example of a real-time OS usage?",
    options: ["Word processing","Flight control system","Web browsing","Email client"],
    answer: 1,
    explanation: "Real-time OS are used in systems like flight control where timely responses are critical."
  },
  { q: "What does CPU scheduling do?",
    options: ["Manages file permissions","Decides order of process execution","Assigns memory addresses","Controls device drivers"],
    answer: 1,
    explanation: "CPU scheduler selects which process runs on CPU and for how long (time-slicing, priorities)."
  },
  { q: "What is virtual memory?",
    options: ["Physical RAM only","A technique that uses disk to extend apparent RAM","An application cache","Network memory"],
    answer: 1,
    explanation: "Virtual memory lets OS use disk as an extension of RAM, enabling larger address spaces."
  },
  { q: "What does paging do?",
    options: ["Splits memory into fixed-size pages","Encrypts memory","Allocates CPU time","Manages network packets"],
    answer: 0,
    explanation: "Paging divides memory into fixed-size pages and maps them between physical and virtual memory."
  },
  { q: "Which is a file system used by Linux?",
    options: ["NTFS","HFS+","ext4","FAT32"],
    answer: 2,
    explanation: "ext4 is a common Linux file system."
  },
  { q: "What is a thread relative to a process?",
    options: ["A type of disk partition","A lightweight process sharing memory","A network socket","A file handle"],
    answer: 1,
    explanation: "A thread is the smallest execution unit within a process; threads share process memory."
  },
  { q: "Which call creates a new process in Unix-like systems?",
    options: ["fork()","open()","connect()","read()"],
    answer: 0,
    explanation: "fork() creates a new process by duplicating the calling process."
  },
  { q: "Which component of OS handles interrupts?",
    options: ["File system","Memory manager","Interrupt handler in kernel","Shell"],
    answer: 2,
    explanation: "Interrupt handlers in the kernel manage interrupts from hardware or software."
  },
  { q: "What is a kernel?",
    options: ["A user application","The core part of an OS managing resources","A database engine","A networking protocol"],
    answer: 1,
    explanation: "The kernel is the central component of an OS that controls hardware and system calls."
  },
  { q: "Which mechanism isolates programs from each other?",
    options: ["User interface","Memory protection","Printer driver","Shell scripts"],
    answer: 1,
    explanation: "Memory protection prevents processes from accessing each other's memory."
  },
  { q: "What is context switching?",
    options: ["Switching network protocols","Saving/restoring CPU state between processes","Switching file systems","Changing display modes"],
    answer: 1,
    explanation: "Context switching saves the CPU state of the current process and loads another's state."
  },
  { q: "What is thrashing?",
    options: ["Excessive paging causing low performance","High CPU utilization profit","A disk I/O scheduling strategy","A file deletion method"],
    answer: 0,
    explanation: "Thrashing occurs when system spends most time swapping pages in/out instead of useful work."
  },
  { q: "Which scheduling algorithm gives fair time slices in round-robin?",
    options: ["FCFS","Round Robin","Shortest Job First","Priority Scheduling"],
    answer: 1,
    explanation: "Round Robin assigns each process a time quantum cyclically."
  },
  { q: "Which is an example of inter-process communication (IPC)?",
    options: ["Shared memory","Keyboard input","Disk partition","Mouse pointer"],
    answer: 0,
    explanation: "Shared memory is an IPC method for processes to share data."
  },
  { q: "What is a system call?",
    options: ["A user-level function","A request from program to kernel services","A network request","A database query"],
    answer: 1,
    explanation: "System calls allow user programs to request kernel services like read(), fork()."
  },
  { q: "Which file permission bit gives execute permission in Unix?",
    options: ["r","w","x","p"],
    answer: 2,
    explanation: "'x' indicates execute permission for owner/group/others."
  },
  { q: "What does 'mount' do in Unix/Linux?",
    options: ["Run a program","Attach a filesystem to directory tree","Format disk","Start a service"],
    answer: 1,
    explanation: "mount attaches a filesystem at a specified directory (mount point)."
  },
  { q: "Which command shows running processes in Linux?",
    options: ["ps","ls","cp","rm"],
    answer: 0,
    explanation: "ps lists processes; top gives dynamic view."
  },
  { q: "What is swap space used for?",
    options: ["Storing user files","Backing up OS only","Extending RAM by storing pages","Storing network packets"],
    answer: 2,
    explanation: "Swap is disk space used to store pages moved out of RAM."
  },
  { q: "Which term describes mutually blocking processes waiting for each other?",
    options: ["Deadlock","Thrashing","Starvation","Paging"],
    answer: 0,
    explanation: "Deadlock occurs when processes wait indefinitely for resources held by each other."
  },
  { q: "What is the primary role of the device driver?",
    options: ["Manage user accounts","Translate OS commands to hardware-specific operations","Schedule CPU","Manage files"],
    answer: 1,
    explanation: "Device drivers provide OS interfaces to hardware devices."
  },
  { q: "Which mode does the kernel run in?",
    options: ["User mode","Kernel (supervisor) mode","Debug mode","Safe mode"],
    answer: 1,
    explanation: "Kernel runs in privileged supervisor mode with full hardware access."
  },
  { q: "Which scheduler picks which process should run next on CPU?",
    options: ["Long-term scheduler","Short-term scheduler (dispatcher)","Medium-term scheduler","I/O scheduler"],
    answer: 1,
    explanation: "Short-term (CPU) scheduler selects processes to execute on CPU."
  },
  { q: "Which Linux directory typically contains device files?",
    options: ["/etc","/dev","/home","/var"],
    answer: 1,
    explanation: "/dev contains special device files representing hardware devices."
  },
  { q: "Which Windows equivalent of 'init' or 'systemd' is responsible for services?",
    options: ["services.msc/Service Control Manager","cmd.exe","regedit","explorer.exe"],
    answer: 0,
    explanation: "Service Control Manager (services.msc) manages Windows services."
  },

  // 40 Medium (31-70)
  { q: "What is priority inversion?",
    options: ["High priority always preempts low priority","A low-priority task holds a resource needed by high-priority task","Scheduler starvation","Deadlock between equal priorities"],
    answer: 1,
    explanation: "Priority inversion occurs when lower-priority process blocks a higher one via resource holding."
  },
  { q: "Which algorithm prevents deadlock by preemptively denying unsafe resource requests?",
    options: ["Banker's algorithm","Round Robin","FCFS","SJF"],
    answer: 0,
    explanation: "Banker's algorithm checks for safe state before granting resources to avoid deadlock."
  },
  { q: "Which swap technique swaps whole processes in/out of memory?",
    options: ["Paging","Segmentation","Swapping (process-level)","Demand paging"],
    answer: 2,
    explanation: "Swapping moves entire processes between RAM and disk."
  },
  { q: "What does demand paging mean?",
    options: ["Load entire process into memory initially","Load pages only when they are needed","Never use swap","Preload all pages"],
    answer: 1,
    explanation: "Demand paging loads a page only when the process references it (page fault triggers load)."
  },
  { q: "Which page replacement algorithm approximates LRU using a reference bit?",
    options: ["Second-chance (clock)","FIFO","Optimal","Random"],
    answer: 0,
    explanation: "Second-chance/clock uses reference bits to approximate LRU at lower cost."
  },
  { q: "Which scheduling algorithm minimizes average waiting time given all job lengths known?",
    options: ["Shortest Job First (SJF)","Round Robin","FCFS","Priority"],
    answer: 0,
    explanation: "SJF (non-preemptive) minimizes average waiting time when job times are known."
  },
  { q: "What is kernel preemption?",
    options: ["Kernel cannot be interrupted","Kernel allows preemption to schedule higher priority tasks","Kernel uses swapping","Kernel blocks all interrupts"],
    answer: 1,
    explanation: "Preemptive kernels allow interrupting running kernel tasks to improve responsiveness."
  },
  { q: "Which IPC mechanism uses message queues?",
    options: ["Sockets","Message Queue API","Shared memory only","Signals"],
    answer: 1,
    explanation: "Message queues are an IPC method allowing sending/receiving structured messages."
  },
  { q: "Which file allocation method stores file as sequence of disk blocks with explicit pointers?",
    options: ["Linked allocation","Contiguous allocation","Indexed allocation","Extent-based"],
    answer: 0,
    explanation: "Linked allocation stores file as linked list of blocks with pointers."
  },
  { q: "What problem does fragmentation describe?",
    options: ["I/O errors","Memory wasted due to holes between allocations","CPU overload","File corruption"],
    answer: 1,
    explanation: "Fragmentation (internal/external) leads to wasted memory or disk space causing allocation issues."
  },
  { q: "Which kernel design keeps most services in user space and uses small kernel?",
    options: ["Monolithic kernel","Microkernel","Hybrid kernel","Exokernel"],
    answer: 1,
    explanation: "Microkernels move services to user space, keeping kernel minimal for modularity."
  },
  { q: "What does 'hotplug' mean for OS?",
    options: ["Plugging keyboard only","Adding/removing devices while system runs","Rebooting after plug","USB only"],
    answer: 1,
    explanation: "Hotplug allows connecting/disconnecting devices without rebooting (e.g., USB)."
  },
  { q: "Which syscall returns the PID of the calling process in Unix?",
    options: ["getpid()","fork()","execve()","wait()"],
    answer: 0,
    explanation: "getpid() returns the process ID of the current process."
  },
  { q: "Which memory model allows processes to have their own address spaces mapped to physical memory?",
    options: ["Flat addressing","Virtual memory with paging","Segmented model only","Real mode addressing"],
    answer: 1,
    explanation: "Virtual memory with paging provides processes private virtual address spaces."
  },
  { q: "Which of these is a virtualization hypervisor type 1 (bare-metal)?",
    options: ["VMware ESXi","VirtualBox running inside OS","QEMU user-mode","Docker container engine"],
    answer: 0,
    explanation: "Type 1 hypervisors (e.g., ESXi) run directly on hardware, unlike hosted hypervisors."
  },
  { q: "Which technique reduces syscall overhead by batching requests?",
    options: ["System call batching (e.g., writev)","Context switching","Spooling","Paging"],
    answer: 0,
    explanation: "Batched syscalls (like writev) reduce transitions between user and kernel space."
  },
  { q: "What is copy-on-write (COW)?",
    options: ["Immediate copy of pages when fork occurs","Pages are shared until write occurs, then copied","Always share pages","Never copy pages"],
    answer: 1,
    explanation: "COW delays copying until a write occurs, optimizing fork performance."
  },
  { q: "Which lock prevents multiple writers but allows multiple readers?",
    options: ["Reader-writer lock","Spinlock","Mutex only","Semaphore for single thread"],
    answer: 0,
    explanation: "Reader-writer locks allow concurrent reads but exclusive writes."
  },
  { q: "What is a kernel module?",
    options: ["A user program","Loadable piece of kernel code (driver)","A filesystem","A type of shell script"],
    answer: 1,
    explanation: "Kernel modules (e.g., device drivers) can be loaded/unloaded at runtime."
  },
  { q: "Which is true about /proc filesystem in Linux?",
    options: ["Contains persistent files","Provides runtime system information as files","Is a device filesystem","Stores binaries"],
    answer: 1,
    explanation: "/proc is virtual and exposes kernel/process info (e.g., /proc/cpuinfo)."
  },
  { q: "What is the role of an I/O scheduler?",
    options: ["Schedule network packets","Schedule disk I/O requests for performance fairness","Allocate memory","Schedule processes only"],
    answer: 1,
    explanation: "I/O scheduler orders disk requests to balance throughput and latency (e.g., CFQ, deadline)."
  },
  { q: "Which technique maps virtual to physical addresses via a hardware table?",
    options: ["MMU using page tables","Disk controller mapping","File table mapping","Socket mapping"],
    answer: 0,
    explanation: "The Memory Management Unit (MMU) uses page tables to translate virtual addresses."
  },
  { q: "Which concept best describes 'least privilege' in OS security?",
    options: ["Grant maximum rights to all users","Grant only necessary permissions","Share passwords","No security"],
    answer: 1,
    explanation: "Least privilege limits user/process rights to only what is necessary."
  },
  { q: "Which debugging tool helps examine kernel logs on Linux?",
    options: ["dmesg","ls","grep","ps"],
    answer: 0,
    explanation: "dmesg prints kernel and boot messages useful for debugging hardware/driver issues."
  },
  { q: "Which mechanism helps avoid race conditions by disabling interrupts briefly?",
    options: ["Spinlocks in kernel","Using more threads","Disabling CPU entirely","Increasing memory"],
    answer: 0,
    explanation: "Spinlocks and disabling interrupts can protect critical sections in kernel code."
  },
  { q: "What is swap thrashing due to too small RAM when many pages are swapped?",
    options: ["Thrashing","Garbage collection","Random access","Paging success"],
    answer: 0,
    explanation: "Thrashing occurs when excessive paging reduces useful work progress."
  },
  { q: "Which Linux init system replaced SysV init in many distributions?",
    options: ["systemd","upstart","rc","launchd"],
    answer: 0,
    explanation: "systemd is now common for service management and parallel startup."
  },
  { q: "Which scheduling metric measures average turnaround time?",
    options: ["Average turnaround time","CPU temperature","Network latency","Disk IOPS"],
    answer: 0,
    explanation: "Turnaround time measures total time from submission to completion; average is used to evaluate schedulers."
  },

  // 30 Hard (71-100)
  { q: "In Linux, what does OOM killer do?",
    options: ["Creates more memory","Kills processes when system runs out of memory","Optimizes disk I/O","Schedules CPU tasks"],
    answer: 1,
    explanation: "OOM killer selects and terminates processes to recover memory when the system is critically low on RAM."
  },
  { q: "Which scheduling algorithm is preemptive and based on dynamic priorities with aging to prevent starvation?",
    options: ["Multilevel Feedback Queue (MLFQ)","FCFS","Shortest Remaining Time","Round Robin"],
    answer: 0,
    explanation: "MLFQ adjusts priorities and uses aging to reduce starvation while offering responsiveness."
  },
  { q: "Which attack exploits race conditions in file operations (e.g., TOCTOU)?",
    options: ["Time-of-check to time-of-use (TOCTOU) attack","Buffer overflow","SQL injection","Cross-site scripting"],
    answer: 0,
    explanation: "TOCTOU vulnerabilities occur when checks and usage are separated allowing attackers to change resources in-between."
  },
  { q: "Which structure provides fast page lookup in TLB context?",
    options: ["Translation Lookaside Buffer (TLB)","Swap file","I/O ring buffer","inode table"],
    answer: 0,
    explanation: "TLB caches recent virtual->physical translations to speed up address translation."
  },
  { q: "Which page replacement algorithm is optimal (but not implementable) minimizing page faults?",
    options: ["Optimal (Belady's) algorithm","LRU","FIFO","Clock"],
    answer: 0,
    explanation: "Optimal algorithm evicts the page not used for the longest future time; it requires future knowledge."
  },
  { q: "Which file system journaling mode protects against partial writes by recording intent before changes?",
    options: ["Journaling (ordered/metadata)","Write-through cache only","Non-journaling","RAID striping"],
    answer: 0,
    explanation: "Journaling records metadata (and sometimes data) to avoid corruption after crashes."
  },
  { q: "What is ASLR (Address Space Layout Randomization)?",
    options: ["A memory compression mechanism","Randomizing memory layout to deter exploits","A scheduling algorithm","A disk encryption"],
    answer: 1,
    explanation: "ASLR randomizes addresses for libraries/stack/heap to make exploitation harder."
  },
  { q: "Which kernel sync primitive is best for short critical sections and on multiprocessor without sleeping?",
    options: ["Spinlock","Mutex","Semaphore","Condition variable"],
    answer: 0,
    explanation: "Spinlocks busy-wait and are used for short non-sleepable critical sections in kernel context."
  },
  { q: "What is the purpose of page table entries' dirty bit?",
    options: ["Indicate page was written to (modified)","Indicate page is read-only","Mark page as executable","Show page is swapped out"],
    answer: 0,
    explanation: "Dirty bit shows page has been modified and needs to be written back before eviction."
  },
  { q: "Which virtualization technique shares host kernel with guests for lightweight containers?",
    options: ["OS-level virtualization (containers)","Full virtualization","Paravirtualization","Hardware partitioning"],
    answer: 0,
    explanation: "Containers share the host kernel (namespaces, cgroups) offering lightweight isolation."
  },
  { q: "Which CPU feature speeds up virtualization by supporting nested page tables (EPT/NPT)?",
    options: ["Hardware-assisted virtualization with nested paging (EPT/NPT)","Hyperthreading only","Segment registers","I/O APIC"],
    answer: 0,
    explanation: "Nested paging support (EPT for Intel, NPT for AMD) improves guest memory virtualization performance."
  },
  { q: "What does 'copy-on-write' enable when creating process snapshots or forked processes?",
    options: ["Immediate full copy of memory","Pages shared until written then copied","Disable writes","Always use swap"],
    answer: 1,
    explanation: "COW defers copying until modification, so parent and child share pages until a write occurs."
  },
  { q: "Which kernel debugging technique allows examining kernel memory safely via crash dumps?",
    options: ["kdump/crash (crash dump analysis)","gdb on user process only","printf debugging only","valgrind"],
    answer: 0,
    explanation: "Crash dumps captured at kernel panic can be analyzed offline with tools like crash/kdump."
  },
  { q: "Which file descriptor dup2() does?",
    options: ["Duplicate a file descriptor to a given descriptor number","Close all descriptors","Allocate memory","Open a file"],
    answer: 0,
    explanation: "dup2(oldfd, newfd) makes newfd refer to the same open file description as oldfd."
  },
  { q: "Which advanced memory technique uses copy-on-write combined with deduplication for VMs?",
    options: ["KSM (Kernel Samepage Merging)","Paging only","Swapping only","Huge pages"],
    answer: 0,
    explanation: "KSM finds identical pages and merges them (with COW on write) to save memory in virtualized environments."
  },
  { q: "Which security model enforces mandatory policies with labels (MLS)?",
    options: ["Mandatory Access Control (MAC) like SELinux/AppArmor","Discretionary Access Control (DAC) only","Access Control Lists only","No policy"],
    answer: 0,
    explanation: "MAC enforces system-level policies using labels independent of user discretion; SELinux is an example."
  },
  { q: "What is a race condition in kernel device driver context?",
    options: ["Two threads concurrently access shared hardware causing inconsistencies","A timed benchmark","An IO scheduling event","A security policy"],
    answer: 0,
    explanation: "Race condition arises when concurrent operations lead to unpredictable behavior without synchronization."
  },
  { q: "Which concept allows a process to wait for multiple events (e.g., select()/poll())?",
    options: ["I/O multiplexing (select/poll/epoll)","Single-thread blocking only","Busy polling only","Signal ignoring"],
    answer: 0,
    explanation: "I/O multiplexing APIs allow waiting on multiple file descriptors efficiently."
  },
  { q: "Which Linux mechanism limits resource usage per group of processes?",
    options: ["cgroups (control groups)","umask only","systemd only","cron"],
    answer: 0,
    explanation: "cgroups control CPU/memory/io usage for process groups (used by containers)."
  },
  { q: "Which approach avoids a process from starving by increasing priority over time?",
    options: ["Aging","Priority inversion","Deadlock recovery","Thrashing control"],
    answer: 0,
    explanation: "Aging gradually increases priority of waiting processes to prevent starvation."
  },
  { q: "Which syscall family executes a new program in the current process (replaces it)?",
    options: ["execve()/exec family","fork()","clone()","waitpid()"],
    answer: 0,
    explanation: "execve replaces the current process image with a new program."
  },
  { q: "Which memory allocation technique groups contiguous pages to reduce TLB misses for large arrays?",
    options: ["Huge pages (large pages)","Byte-level allocation","Non-contiguous paging","Virtual fragmentation"],
    answer: 0,
    explanation: "Huge pages use larger page sizes (e.g., 2MB) to reduce TLB pressure."
  },
  { q: "Which attack model leverages buffer overflows to overwrite return addresses?",
    options: ["Stack-based buffer overflow exploit","SQL injection","XSS","Directory traversal"],
    answer: 0,
    explanation: "Stack buffer overflows can corrupt control flow by overwriting return addresses."
  },
  { q: "Which kernel structure stores current CPU register state for a process context?",
    options: ["Process control block (PCB) / task_struct","File descriptor table","Page cache","inode"],
    answer: 0,
    explanation: "PCB (task_struct in Linux) stores registers, state, memory maps, and descriptors for a process."
  },
  { q: "Which approach reduces syscall overhead by batching I/O or using async I/O (AIO)?",
    options: ["Asynchronous I/O or io_uring","More threads only","Polling spin only","Use printf"],
    answer: 0,
    explanation: "Async I/O and new interfaces like io_uring reduce syscall overhead for high-performance I/O."
  },
  { q: "Which concept provides isolation of process resources including network and PID namespaces?",
    options: ["Namespaces (Linux)","Virtual memory only","Swap","Inode namespaces"],
    answer: 0,
    explanation: "Namespaces isolate process views of system resources enabling containerization."
  },
  { q: "Which disk layout improves performance using multiple disks for redundancy and speed?",
    options: ["RAID (various levels)","Single partition","FAT table only","Checksum"],
    answer: 0,
    explanation: "RAID combines multiple disks for redundancy, performance, or both depending on level."
  },
  { q: "Which scheduling concept reduces average waiting time by allowing preemption when shorter job arrives?",
    options: ["Shortest Remaining Time First (preemptive SJF)","FIFO only","Round Robin only","Multilevel queue without preemption"],
    answer: 0,
    explanation: "Shortest Remaining Time First preempts running job if a shorter job arrives, reducing average wait."
  },
  { q: "Which security hardening tool on Linux enforces mandatory policies at kernel level?",
    options: ["SELinux","ufw only","iptables only","tcpdump"],
    answer: 0,
    explanation: "SELinux enforces mandatory access control policies integrated with kernel security."
  },
  { q: "Which technology supports live migration of virtual machines with minimal downtime?",
    options: ["VM live migration (pre-copy/post-copy)","Cold migration only","Boot from network","Disk cloning only"],
    answer: 0,
    explanation: "Live migration transfers VM memory and state to another host while VM continues running; techniques include pre-copy and post-copy."
  }
];

// ---------- Test logic ----------
const QCOUNT = questions.length;
let current = 0;
let userAnswers = new Array(QCOUNT).fill(null);
let timeLeft = 60;
let timerId = null;

// DOM refs
const qText = id('qText');
const optionsDiv = id('options');
const timerDiv = id('timer');
const prevBtn = id('prevBtn');
const nextBtn = id('nextBtn');
const submitBtn = id('submitBtn');
const numbersGrid = id('numbersGrid');
const progressCount = id('progressCount');
const attemptInfo = id('attemptInfo');
const resultDiv = id('result');

// utility
function id(x){return document.getElementById(x)}
function el(tag, cls){ const e=document.createElement(tag); if(cls) e.className=cls; return e; }

// build navigation numbers
function buildNumbers(){
  numbersGrid.innerHTML='';
  for(let i=0;i<QCOUNT;i++){
    const b=el('button','num');
    b.textContent = i+1;
    b.onclick = ()=>{ saveAnswer(); goto(i); };
    numbersGrid.appendChild(b);
  }
  updateNumbers();
}

// render question
function render(){
  const q = questions[current];
  qText.textContent = `${current+1}. ${q.q}`;
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx)=>{
    const div = el('div','opt');
    if(userAnswers[current] === idx) div.classList.add('selected');
    div.onclick = ()=>{
      userAnswers[current] = idx;
      updateNumbers();
      render(); // re-render to show selected style
    };
    const radio = el('input'); radio.type='radio'; radio.name='opt'; radio.style.marginRight='8px';
    radio.checked = (userAnswers[current] === idx);
    // clicking on label should select as well
    div.appendChild(radio);
    const span = el('div'); span.textContent = opt;
    div.appendChild(span);
    optionsDiv.appendChild(div);
  });
  progressCount.textContent = `Q ${current+1} / ${QCOUNT}`;
  attemptInfo.textContent = `Attempted: ${userAnswers.filter(x=>x!==null).length}`;
  startTimer();
}

// goto question index
function goto(i){
  stopTimer();
  current = i;
  render();
}

// save currently selected answer (already saved on click) - keep for compatibility
function saveAnswer(){
  // nothing extra: userAnswers updated on click
  updateNumbers();
}

// update number button colors
function updateNumbers(){
  const nodes = numbersGrid.children;
  for(let i=0;i<nodes.length;i++){
    if(userAnswers[i]===null) {
      nodes[i].classList.remove('answered');
      nodes[i].classList.add('unanswered');
    } else {
      nodes[i].classList.add('answered');
      nodes[i].classList.remove('unanswered');
    }
  }
}

// timers
function startTimer(){
  stopTimer();
  timeLeft = 60;
  timerDiv.textContent = `Time Left: 01:00`;
  timerId = setInterval(()=>{
    timeLeft--;
    const mm = Math.floor(timeLeft/60).toString().padStart(2,'0');
    const ss = (timeLeft%60).toString().padStart(2,'0');
    timerDiv.textContent = `Time Left: ${mm}:${ss}`;
    if(timeLeft<=0){
      clearInterval(timerId);
      // auto-advance
      if(current < QCOUNT-1){
        goto(current+1);
      } else {
        // last question time up, auto-submit
        submit();
      }
    }
  },1000);
}
function stopTimer(){ if(timerId) clearInterval(timerId); timerId = null; }

// navigation
prevBtn.onclick = ()=>{
  saveAnswer();
  if(current>0) goto(current-1);
};
nextBtn.onclick = ()=>{
  saveAnswer();
  if(current < QCOUNT-1) goto(current+1);
  else submit();
};
submitBtn.onclick = ()=>{
  if(confirm('Submit test now?')) submit();
};

// submit and show results
function submit(){
  stopTimer();
  // compute score
  let score = 0;
  const wrong = [];
  for(let i=0;i<QCOUNT;i++){
    const user = userAnswers[i];
    const correct = questions[i].answer;
    if(user === correct) score++;
    else {
      wrong.push({
        idx: i+1,
        q: questions[i].q,
        your: user===null ? 'Not Attempted' : questions[i].options[user],
        correct: questions[i].options[correct],
        explanation: questions[i].explanation
      });
    }
  }
  // hide main UI
  id('questionCard').style.display = 'none';
  numbersGrid.style.display = 'none';
  // show result
  resultDiv.style.display = 'block';
  let html = `<h2 style="margin:0 0 8px 0">Result: ${score} / ${QCOUNT}</h2>`;
  html += `<div style="margin-bottom:8px">Attempted: ${QCOUNT - wrong.length} | Wrong/Unattempted: ${wrong.length}</div>`;
  html += `<div style="max-height:60vh;overflow:auto;padding-right:8px">`;
  wrong.forEach(w=>{
    html += `<div style="background:#fff2f0;border:1px solid #ffd6d6;padding:10px;border-radius:8px;margin-bottom:10px">
      <strong>Q${w.idx}:</strong> ${escapeHtml(w.q)}<br>
      <strong>Your answer:</strong> ${escapeHtml(w.your)}<br>
      <strong>Correct:</strong> ${escapeHtml(w.correct)}<br>
      <strong>Explanation:</strong> ${escapeHtml(w.explanation)}
    </div>`;
  });
  html += `</div>`;
  html += `<div style="margin-top:12px;font-weight:700">Tip: Review wrong answers, then retake or study the corresponding OS topic pages.</div>`;
  resultDiv.innerHTML = html;
  window.scrollTo({top:0,behavior:'smooth'});
}

// escape helper
function escapeHtml(s){ if(s===null||s===undefined) return ''; return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

// initialize
(function init(){
  buildNumbers();
  goto(0);
})();
