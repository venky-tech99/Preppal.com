// ================== QUESTION BANK ==================
// ================== QUESTION BANK ==================
const questions = [
    // ---- EASY (30) ----
    {q:"Which protocol is used to send emails?",options:["SMTP","HTTP","FTP","IMAP"],answer:0,explanation:"SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers."},
    {q:"Which protocol is used to browse websites?",options:["HTTP","SMTP","FTP","SNMP"],answer:0,explanation:"HTTP (Hypertext Transfer Protocol) is used for accessing and transferring web pages."},
    {q:"Which secure protocol replaces Telnet?",options:["SSH","HTTP","SMTP","IMAP"],answer:0,explanation:"SSH (Secure Shell) is a secure replacement for Telnet."},
    {q:"What does DNS stand for?",options:["Domain Name System","Data Network Server","Digital Number Service","Domain Network Setup"],answer:0,explanation:"DNS translates domain names into IP addresses."},
    {q:"Which protocol transfers files between computers?",options:["FTP","SMTP","HTTP","DNS"],answer:0,explanation:"FTP (File Transfer Protocol) is used for transferring files between hosts."},
    {q:"Which protocol retrieves emails from a server?",options:["POP3","SMTP","FTP","DNS"],answer:0,explanation:"POP3 (Post Office Protocol v3) retrieves emails from mail servers."},
    {q:"Which protocol is secure version of HTTP?",options:["HTTPS","FTP","SMTP","IMAP"],answer:0,explanation:"HTTPS adds encryption (SSL/TLS) to HTTP for secure communication."},
    {q:"Which protocol is used for remote login?",options:["Telnet","SMTP","FTP","HTTP"],answer:0,explanation:"Telnet allows remote login but is insecure."},
    {q:"Which protocol assigns IP addresses automatically?",options:["DHCP","DNS","SMTP","FTP"],answer:0,explanation:"DHCP assigns IP addresses automatically."},
    {q:"Which protocol is used for voice/video calls?",options:["SIP","SMTP","FTP","DNS"],answer:0,explanation:"SIP is used to establish and manage multimedia sessions."},
    {q:"Which protocol uses port 443 by default?",options:["HTTPS","FTP","SMTP","IMAP"],answer:0,explanation:"HTTPS uses port 443 by default."},
    {q:"What port does HTTP use by default?",options:["80","21","25","110"],answer:0,explanation:"HTTP uses port 80 by default."},
    {q:"Which protocol is used to get an IP from a domain name?",options:["DNS","DHCP","FTP","SMTP"],answer:0,explanation:"DNS resolves domain names to IP addresses."},
    {q:"Which mail protocol allows email download and offline viewing?",options:["POP3","SMTP","FTP","HTTP"],answer:0,explanation:"POP3 downloads messages for offline use."},
    {q:"Which protocol is mainly used for network device management?",options:["SNMP","SMTP","FTP","HTTP"],answer:0,explanation:"SNMP (Simple Network Management Protocol) manages network devices."},
    {q:"Which secure protocol transfers files?",options:["SFTP","SMTP","HTTP","SNMP"],answer:0,explanation:"SFTP transfers files securely over SSH."},
    {q:"Which protocol is used for sending webpages securely?",options:["HTTPS","HTTP","FTP","SMTP"],answer:0,explanation:"HTTPS is secure HTTP."},
    {q:"Which protocol uses port 25?",options:["SMTP","HTTP","FTP","DNS"],answer:0,explanation:"SMTP uses port 25."},
    {q:"Which protocol is used by browsers to fetch data?",options:["HTTP","FTP","SMTP","IMAP"],answer:0,explanation:"HTTP is the protocol browsers use."},
    {q:"Which protocol is used for email retrieval that keeps messages on server?",options:["IMAP","POP3","SMTP","FTP"],answer:0,explanation:"IMAP keeps messages on the server."},
    {q:"Which layer does HTTP operate on in the OSI model?",options:["Application","Transport","Network","Data Link"],answer:0,explanation:"HTTP is an Application layer protocol."},
    {q:"Which protocol uses port 22?",options:["SSH","FTP","SMTP","HTTP"],answer:0,explanation:"SSH uses port 22."},
    {q:"Which protocol is used for downloading files from a server?",options:["FTP","SMTP","HTTP","SNMP"],answer:0,explanation:"FTP can download and upload files."},
    {q:"Which protocol is used to manage email sending?",options:["SMTP","HTTP","FTP","IMAP"],answer:0,explanation:"SMTP handles outgoing mail."},
    {q:"Which protocol is used for encrypted file transfer?",options:["FTPS","SMTP","HTTP","IMAP"],answer:0,explanation:"FTPS is FTP over SSL/TLS."},
    {q:"Which protocol uses port 110?",options:["POP3","SMTP","FTP","HTTP"],answer:0,explanation:"POP3 uses port 110."},
    {q:"Which protocol helps in translating URLs into IPs?",options:["DNS","DHCP","FTP","SMTP"],answer:0,explanation:"DNS resolves domain names."},
    {q:"Which protocol is used for secure remote login?",options:["SSH","Telnet","HTTP","FTP"],answer:0,explanation:"SSH is secure remote login."},
    {q:"Which protocol uses port 23?",options:["Telnet","FTP","SMTP","HTTP"],answer:0,explanation:"Telnet uses port 23."},
    {q:"Which protocol is used for network time synchronization?",options:["NTP","SMTP","HTTP","FTP"],answer:0,explanation:"NTP synchronizes clocks over a network."},

    // ---- MEDIUM (40) ----
    {q:"Which protocol is used by ping command?",options:["ICMP","TCP","UDP","HTTP"],answer:0,explanation:"Ping uses ICMP (Internet Control Message Protocol)."},
    {q:"Which protocol is responsible for secure transactions in e-commerce?",options:["HTTPS","FTP","SMTP","Telnet"],answer:0,explanation:"HTTPS encrypts transactions."},
    {q:"Which protocol works at transport layer and is connection-oriented?",options:["TCP","UDP","ICMP","HTTP"],answer:0,explanation:"TCP is reliable and connection-oriented."},
    {q:"Which protocol is faster but less reliable than TCP?",options:["UDP","HTTP","SMTP","FTP"],answer:0,explanation:"UDP is faster but doesn't guarantee delivery."},
    {q:"Which port does FTP control connection use?",options:["21","20","25","80"],answer:0,explanation:"FTP control connection uses port 21."},
    {q:"Which port does FTP data transfer use?",options:["20","21","22","23"],answer:0,explanation:"FTP data connection uses port 20."},
    {q:"Which protocol resolves MAC addresses from IP addresses?",options:["ARP","RARP","DNS","DHCP"],answer:0,explanation:"ARP maps IP to MAC addresses."},
    {q:"Which protocol resolves IP from MAC address?",options:["RARP","ARP","DNS","DHCP"],answer:0,explanation:"RARP maps MAC to IP."},
    {q:"Which protocol does VoIP use for call setup?",options:["SIP","SMTP","FTP","HTTP"],answer:0,explanation:"SIP sets up VoIP calls."},
    {q:"Which protocol uses port 161?",options:["SNMP","SMTP","FTP","HTTP"],answer:0,explanation:"SNMP uses port 161."},
    {q:"Which protocol uses port 53?",options:["DNS","HTTP","FTP","SMTP"],answer:0,explanation:"DNS uses port 53."},
    {q:"Which protocol is used to transfer hypertext securely?",options:["HTTPS","HTTP","FTP","SMTP"],answer:0,explanation:"HTTPS is secure hypertext transfer."},
    {q:"Which protocol does Traceroute use?",options:["ICMP","TCP","UDP","HTTP"],answer:0,explanation:"Traceroute often uses ICMP."},
    {q:"Which protocol is used to control multimedia communication sessions?",options:["RTSP","SMTP","FTP","HTTP"],answer:0,explanation:"RTSP controls media streaming sessions."},
    {q:"Which protocol uses port 3389?",options:["RDP","SSH","FTP","HTTP"],answer:0,explanation:"RDP uses port 3389 for remote desktop."},
    {q:"Which protocol ensures delivery by retransmitting lost packets?",options:["TCP","UDP","ICMP","HTTP"],answer:0,explanation:"TCP retransmits lost packets."},
    {q:"Which protocol is used for transferring email messages between servers?",options:["SMTP","POP3","IMAP","FTP"],answer:0,explanation:"SMTP transfers email between servers."},
    {q:"Which protocol can operate in active or passive mode for file transfer?",options:["FTP","SMTP","HTTP","DNS"],answer:0,explanation:"FTP can work in active or passive mode."},
    {q:"Which protocol sends error messages about network issues?",options:["ICMP","TCP","UDP","HTTP"],answer:0,explanation:"ICMP reports errors."},
    {q:"Which protocol uses three-way handshake?",options:["TCP","UDP","ICMP","HTTP"],answer:0,explanation:"TCP uses a three-way handshake."},
    {q:"Which protocol is lightweight and often used in IoT?",options:["MQTT","SMTP","HTTP","FTP"],answer:0,explanation:"MQTT is lightweight for IoT."},
    {q:"Which protocol is used for secure file transfer and based on SSH?",options:["SFTP","FTP","HTTP","SMTP"],answer:0,explanation:"SFTP is secure file transfer over SSH."},
    {q:"Which protocol uses port 69?",options:["TFTP","FTP","SMTP","HTTP"],answer:0,explanation:"TFTP uses port 69."},
    {q:"Which protocol is designed for simple file transfer without authentication?",options:["TFTP","FTP","SFTP","HTTP"],answer:0,explanation:"TFTP is simple and unauthenticated."},
    {q:"Which protocol can automatically configure network devices?",options:["DHCP","DNS","FTP","SMTP"],answer:0,explanation:"DHCP auto-configures devices."},
    {q:"Which protocol is stateless and faster for web traffic?",options:["HTTP","HTTPS","FTP","SMTP"],answer:0,explanation:"HTTP is stateless and quick."},
    {q:"Which protocol is stateful and ensures security?",options:["HTTPS","HTTP","FTP","SMTP"],answer:0,explanation:"HTTPS is stateful with encryption."},
    {q:"Which protocol supports file transfer with resume capability?",options:["FTP","TFTP","HTTP","SMTP"],answer:0,explanation:"FTP supports resume."},
    {q:"Which protocol is used for secure network device management?",options:["SNMPv3","SMTP","FTP","HTTP"],answer:0,explanation:"SNMPv3 adds security to SNMP."},
    {q:"Which protocol delivers email to the recipient's mail server?",options:["SMTP","POP3","IMAP","FTP"],answer:0,explanation:"SMTP delivers email."},
    {q:"Which protocol allows multiple people to work on a document in real-time?",options:["WebDAV","FTP","HTTP","SMTP"],answer:0,explanation:"WebDAV supports collaborative editing."},
    {q:"Which protocol is designed for exchanging routing information between gateways?",options:["BGP","SMTP","FTP","HTTP"],answer:0,explanation:"BGP exchanges routing info between ASes."},
    {q:"Which protocol uses port 179?",options:["BGP","FTP","SMTP","HTTP"],answer:0,explanation:"BGP uses port 179."},
    {q:"Which protocol is used by email clients to synchronize mail?",options:["IMAP","POP3","SMTP","FTP"],answer:0,explanation:"IMAP synchronizes mail."},
    {q:"Which protocol is used to send webpages in plain text?",options:["HTTP","HTTPS","FTP","SMTP"],answer:0,explanation:"HTTP sends data in plain text."},
    {q:"Which protocol can compress web data to reduce bandwidth?",options:["HTTP with gzip","FTP","SMTP","IMAP"],answer:0,explanation:"HTTP with gzip reduces bandwidth."},
    {q:"Which protocol is the foundation of data exchange on the Web?",options:["HTTP","FTP","SMTP","DNS"],answer:0,explanation:"HTTP is the foundation of the web."},
    {q:"Which protocol is used to fetch webpages securely?",options:["HTTPS","HTTP","FTP","SMTP"],answer:0,explanation:"HTTPS fetches pages securely."},

    // ---- HARD (30) ----
    {q:"Which protocol operates at layer 4 and can multiplex multiple connections over the same port?",options:["TCP","UDP","SCTP","ICMP"],answer:2,explanation:"SCTP supports multi-streaming and multiplexing."},
    {q:"Which protocol uses port 1701?",options:["L2TP","PPTP","IPSec","SSH"],answer:0,explanation:"L2TP uses port 1701."},
    {q:"Which protocol encapsulates PPP frames for transmission over IP networks?",options:["PPTP","L2TP","IPSec","GRE"],answer:1,explanation:"L2TP encapsulates PPP frames."},
    {q:"Which protocol is used to transport multicast traffic efficiently?",options:["IGMP","BGP","OSPF","EIGRP"],answer:0,explanation:"IGMP manages multicast group memberships."},
    {q:"Which protocol does IPSec use for encryption?",options:["ESP","AH","TLS","SSL"],answer:0,explanation:"ESP (Encapsulating Security Payload) provides encryption in IPSec."},
    {q:"Which protocol does IPSec use for authentication only?",options:["AH","ESP","TLS","SSL"],answer:0,explanation:"AH (Authentication Header) provides authentication without encryption."},
    {q:"Which protocol is used for link-state routing within an autonomous system?",options:["OSPF","BGP","RIP","EIGRP"],answer:0,explanation:"OSPF is a link-state routing protocol."},
    {q:"Which protocol is a hybrid routing protocol developed by Cisco?",options:["EIGRP","BGP","RIP","OSPF"],answer:0,explanation:"EIGRP combines features of distance-vector and link-state."},
    {q:"Which protocol uses port 119?",options:["NNTP","SMTP","FTP","HTTP"],answer:0,explanation:"NNTP is Network News Transfer Protocol."},
    {q:"Which protocol is designed for low-latency streaming over HTTP?",options:["HLS","RTMP","SIP","RTSP"],answer:0,explanation:"HLS is HTTP Live Streaming."},
    {q:"Which protocol secures VoIP conversations?",options:["SRTP","RTP","SIP","RTSP"],answer:0,explanation:"SRTP encrypts RTP streams."},
    {q:"Which protocol is used for directory services over IP?",options:["LDAP","DNS","FTP","SMTP"],answer:0,explanation:"LDAP provides directory services."},
    {q:"Which protocol uses port 636 for secure communication?",options:["LDAPS","HTTPS","SSH","SFTP"],answer:0,explanation:"LDAPS is LDAP over SSL."},
    {q:"Which protocol uses port 514 for sending log messages?",options:["Syslog","SNMP","FTP","SMTP"],answer:0,explanation:"Syslog uses port 514."},
    {q:"Which protocol is used for point-to-point links?",options:["PPP","HDLC","SLIP","Frame Relay"],answer:0,explanation:"PPP is common for point-to-point."},
    {q:"Which protocol replaces SLIP for encapsulating IP packets?",options:["PPP","HDLC","Frame Relay","ATM"],answer:0,explanation:"PPP replaced SLIP."},
    {q:"Which protocol is used to discover the MAC address of a known IPv6 address?",options:["NDP","ARP","ICMP","IGMP"],answer:0,explanation:"NDP is Neighbor Discovery Protocol for IPv6."},
    {q:"Which protocol is used to provide clock synchronization in packet-switched networks?",options:["PTP","NTP","SNTP","IGMP"],answer:0,explanation:"PTP is Precision Time Protocol."},
    {q:"Which protocol allows secure tunneling of IP traffic over SSH?",options:["SSH Tunneling","IPSec","L2TP","GRE"],answer:0,explanation:"SSH Tunneling can forward ports securely."},
    {q:"Which protocol is used for media streaming between a server and client?",options:["RTSP","SMTP","FTP","HTTP"],answer:0,explanation:"RTSP controls media streaming."},
    {q:"Which protocol uses port 853 for encrypted DNS?",options:["DNS over TLS","HTTPS","SSH","SFTP"],answer:0,explanation:"DoT (DNS over TLS) uses port 853."},
    {q:"Which protocol improves DNS security by signing records?",options:["DNSSEC","DoT","DoH","LDAP"],answer:0,explanation:"DNSSEC uses cryptographic signatures."},
    {q:"Which protocol sends DNS queries over HTTPS?",options:["DoH","DoT","DNSSEC","LDAP"],answer:0,explanation:"DNS over HTTPS sends queries via HTTPS."},
    {q:"Which protocol is used in blockchain peer-to-peer communication?",options:["gRPC","BitTorrent","IPFS","MQTT"],answer:2,explanation:"IPFS is often used in decentralized storage."},
    {q:"Which protocol handles call signaling in VoIP along with media control?",options:["H.323","SIP","RTP","RTCP"],answer:0,explanation:"H.323 covers signaling and control."},
    {q:"Which protocol monitors quality and provides feedback in VoIP?",options:["RTCP","RTP","SIP","H.323"],answer:0,explanation:"RTCP provides quality feedback for RTP streams."},
    {q:"Which protocol uses port 554?",options:["RTSP","RTP","SIP","SRTP"],answer:0,explanation:"RTSP uses port 554."},
    {q:"Which protocol was designed to replace FTP for secure transfers?",options:["SCP","TFTP","HTTP","SMTP"],answer:0,explanation:"SCP is secure copy over SSH."},
    ];

// ================== VARIABLES ==================
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timer;
let timeLeft = 60;

// ================== FUNCTIONS ==================
function loadQuestion(index) {
    clearInterval(timer);
    timeLeft = 60;
    startTimer();

    const qElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    qElement.textContent = `${index + 1}. ${questions[index].q}`;
    optionsElement.innerHTML = "";

    questions[index].options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${i}" ${userAnswers[index] === i ? "checked" : ""}> ${opt}`;
        optionsElement.appendChild(label);
    });
}

function startTimer() {
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        submitTest();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
    }
}

function jumpToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    loadQuestion(currentQuestion);
}

function renderNumberNav() {
    const nav = document.getElementById("numberNav");
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.onclick = () => jumpToQuestion(i);
        nav.appendChild(btn);
    }
}

function submitTest() {
    saveAnswer();
    clearInterval(timer);
    let score = 0;
    let resultHTML = "<h3>Results:</h3>";
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        } else {
            resultHTML += `<p>Q${i + 1}: ${q.q}<br><b>Correct:</b> ${q.options[q.answer]}<br><b>Your Answer:</b> ${userAnswers[i] !== null ? q.options[userAnswers[i]] : "Not Attempted"}<br><b>Explanation:</b> ${q.explanation}</p>`;
        }
    });
    resultHTML = `<h2>Your Score: ${score}/${questions.length}</h2>` + resultHTML;
    document.getElementById("result").innerHTML = resultHTML;
    document.getElementById("result").style.display = "block";
}

// ================== INIT ==================
window.onload = () => {
    renderNumberNav();
    loadQuestion(currentQuestion);
};
