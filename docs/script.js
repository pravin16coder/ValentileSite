const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let count = 0;
let blurLevel = 0;          // 👈 NEW
const MAX_BLUR = 10;

const funnyMessages = [
  "Nice try 😏",
  "NO is not available today 😂",
  "That button is just for decoration 🙃",
  "Hard to get, huh? 😌",
  "Still NO? Bold choice 😄",
  "Universe says try YES 💫",
  "This NO button is tired 😴",
  "Okay now you’re just clicking for fun 🤭",
  "NO.exe has stopped working 💻❌",
  "Button said ‘not today’ 😎",
  "Even the button ships us 💕",
  "At this point, YES is easier 😆",
  "Plot twist: NO was never an option 😜",
  "Why are you running after NO? 😂",
  "This is emotional damage 😭",
  "NO is socially distancing 🚫",
  "Button is playing hard to get 😏",

  // Banglish (Bengali in English)
  "Ei NO ta aaj ektu drama korche 😌",
  "NO bolle kintu kaaj hobe na 😏",
  "Ei button ta aaj chuti te 😂",
  "Eto koshto kore NO keno? 😄",
  "YES ta kintu besh cute 💕",
  "NO aaj available na 🙃",
  "Button bolche— YES e click koro 😜",
  "Eto na na korcho keno? 🤭",
  "Ei NO ta ektu lajuk 😳",
  "YES dile kintu smile free 😍",
  "NO ta puro acting korche 🎭",
  "YES e click korle chocolate pabe 🍫😏",
  "Ei NO button ta tomake test korche 😌",
  "Arre baba, YES e click koro na 😄",
  "NO ta aaj mood e nei 😴"
];

// ❌ Disable clicking on NO
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  // 1️⃣ Loop message
  message.textContent = funnyMessages[count % funnyMessages.length];
  count++;

  const container = document.querySelector(".buttons");

  // Container size (RELATIVE, not viewport)
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Button size (layout size, blur doesn't affect this)
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // Message size
  const msgHeight = message.offsetHeight || 20;

  // 2️⃣ Safe padding (prevents edge sticking)
  const PADDING = 8;

  // 3️⃣ Max allowed positions (hard clamp)
  const maxX = containerWidth - btnWidth - PADDING;
  const maxY = containerHeight - btnHeight - msgHeight - PADDING;

  // 4️⃣ Generate position
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  // 5️⃣ Clamp (ABSOLUTE SAFETY)
  x = Math.max(PADDING, Math.min(x, maxX));
  y = Math.max(msgHeight + PADDING, Math.min(y, maxY));

  // 6️⃣ Apply position
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  message.style.left = `${x}px`;
  message.style.top = `${y - msgHeight}px`;

  // 7️⃣ Gradual blur
  if (blurLevel < MAX_BLUR) {
    blurLevel += 0.2;
  }

  noBtn.style.filter = `blur(${blurLevel}px)`;
}

/*// 🏃 Move NO button + show funny messages (infinite loop)
noBtn.addEventListener("mouseover", () => {
  message.textContent = funnyMessages[count % funnyMessages.length];
  count++;

  const x = Math.random() * 400 - 100;
  const y = Math.random() * 250 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // 🧠 Increase blur gradually
  if (blurLevel < MAX_BLUR) {
    blurLevel += 0.2; // control speed of blur
  }

  noBtn.style.filter = `blur(${blurLevel}px)`;

});*/

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      color:white;
      font-family:Poppins, sans-serif;
      text-align:center;
      padding:20px;
    ">
      <h1>YAYYY 💕</h1>

      <img
        src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
        alt="Happy Love"
        style="width:260px; border-radius:20px; margin:20px 0;"
      />

      <p style="font-size:18px; max-width:320px;">
        Ms. Bengoli, you just made my Valentine’s Day truly special 🥰<br><br>
        Thank you for saying YES ✨<br>
        Mishti celebration begins 🍥💖
      </p>

      <button id="backBtn"
        style="
          margin-top:25px;
          padding:12px 26px;
          border:none;
          border-radius:30px;
          background:white;
          color:#ff4d6d;
          font-size:16px;
          cursor:pointer;
        ">
        Back
      </button>
    </div>
  `;

  // Back button logic
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.reload();
  });
});
