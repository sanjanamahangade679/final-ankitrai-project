// ===============================
// CYBER ASSISTANT WIDGET
// ===============================
(function () {

  if (document.getElementById("cyberAssistant")) return;

  const assistant = document.createElement("div");
  assistant.id = "cyberAssistant";
  assistant.innerHTML = `
    <div id="assistantBtn">🤖</div>

    <div id="assistantBox">
      <div class="assistant-header">
        Cyber Assistant
        <span id="assistantClose">✕</span>
      </div>

      <div id="assistantMessages">
        <div class="bot">
          👋 Hi! Ask me anything about <b>Cybersecurity</b>, 
          <b>Networking</b>, <b>VAPT</b>, or <b>Careers</b>.
        </div>
      </div>

      <div class="assistant-input">
        <input id="assistantInput" placeholder="Ask a cyber question..." />
        <button id="assistantSend">Send</button>
      </div>
    </div>
  `;

  document.body.appendChild(assistant);

  // ===============================
  // TOGGLE
  // ===============================
  const btn = document.getElementById("assistantBtn");
  const box = document.getElementById("assistantBox");
  const close = document.getElementById("assistantClose");

  btn.onclick = () => box.classList.toggle("open");
  close.onclick = () => box.classList.remove("open");

  // ===============================
  // CHAT LOGIC
  // ===============================
  const input = document.getElementById("assistantInput");
  const send = document.getElementById("assistantSend");
  const messages = document.getElementById("assistantMessages");

  send.onclick = ask;
  input.addEventListener("keypress", e => e.key === "Enter" && ask());

  function ask() {
    const q = input.value.trim();
    if (!q) return;

    addMessage("user", q);
    input.value = "";

    setTimeout(() => {
      addMessage("bot", getAnswer(q));
    }, 500);
  }

  function addMessage(type, text) {
    const div = document.createElement("div");
    div.className = type;
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  // ===============================
  // KNOWLEDGE BASE
  // ===============================
  function getAnswer(q) {
    q = q.toLowerCase();

    if (q.includes("cybersecurity"))
      return "Cybersecurity protects systems, networks, and data from digital attacks.";

    if (q.includes("vapt"))
      return "VAPT (Vulnerability Assessment & Penetration Testing) identifies and exploits security weaknesses.";

    if (q.includes("network security"))
      return "Network security protects infrastructure using firewalls, IDS/IPS, segmentation, and monitoring.";

    if (q.includes("ethical hacking"))
      return "Ethical hacking is authorized testing to improve system security.";

    if (q.includes("career"))
      return "Cyber careers include SOC Analyst, Pentester, GRC, Cloud Security, and Threat Hunter.";

    if (q.includes("malware"))
      return "Malware includes viruses, ransomware, spyware, and trojans.";

    if (q.includes("zero trust"))
      return "Zero Trust means never trust, always verify every user and device.";

    return "I can help with Cybersecurity, Networking, VAPT, Careers, Malware, and Compliance.";
  }

})();
