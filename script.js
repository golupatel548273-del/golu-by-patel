const photos = Array.from({length:10}, (_,i)=>`${i+1}.jpg`);
const messages = [
  "😍 Meri Moti, tum meri favourite ho.",
  "🥹 Tumhari smile dekh ke mood automatically better ho jata hai.",
  "😏 Thodi cute ho… thodi pagal bhi. Perfect combination. ❤️",
  "🫶 Tumhare saath har normal moment bhi special lagta hai.",
  "🙈 Haan haan, meri Moti hi ho tum… ab zyada bhaav mat khaana.",
  "💗 Tumhari care mujhe bahut precious lagti hai.",
  "😂 Tumhari nautanki bhi meri favourite hai.",
  "👑 Mere liye tum bas ek hi ho — my queen, my Moti.",
  "🥰 Jitni baar tumhe dekhu, utni baar aur pyaar ho jata hai.",
  "❤️ Last mein bas itna: I love you, meri Moti. Always."
];

const cover = document.getElementById("cover");
const app = document.getElementById("app");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const photo = document.getElementById("photo");
const message = document.getElementById("message");
const count = document.getElementById("count");

let index = 0;

function render(){
  photo.classList.add("fade");
  setTimeout(()=>{
    photo.src = photos[index];
    message.innerHTML = `${messages[index]}<span>💞 meri jaan</span>`;
    count.textContent = index + 1;
    photo.classList.remove("fade");
  },180);
}

function hearts(){
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["❤️","💗","💖","💕","🥹"][Math.floor(Math.random()*5)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (18 + Math.random()*18) + "px";
  h.style.animationDuration = (3.5 + Math.random()*3) + "s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),7000);
}

startBtn.addEventListener("click",()=>{
  cover.style.opacity = "0";
  cover.style.transition = "opacity .6s ease";
  setTimeout(()=>{
    cover.remove();
    app.classList.remove("hidden");
    render();
    setInterval(hearts,450);
  },600);
});

nextBtn.addEventListener("click",()=>{
  index = (index + 1) % photos.length;
  render();
});

render();
