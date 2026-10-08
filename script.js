const photos = Array.from({length:10}, (_,i)=>`${i+1}.jpg`);
const messages = [
  "🥹❤️ Ye smile… bas isi pe toh dil haar gaya. 🫶",
  "Accha ji, itni cute photo daal ke mera chain chura liya… ab khush ho Moti? 🤭😂❤️",
  "🙈❤️ Chehra chhupa lo, par meri nazar se kaise bachogi? 🥹",
  "Haan haan, photo achhi hai… ab zyada attitude mat dikhana Moti 😏🤭❤️",
  "😎❤️ Ye attitude aur ye shades… meri jaan le logi kya? 🥹",
  "🥹✨ Mirror bhi sochta hoga, roz itni khoobsurat kaise? ❤️",
  "🌸❤️ Phool bhi sharma gaya hoga tumhare saamne. 🫶",
  "💚🥹 Is look mein toh nazar hatana mushkil hai, Madamjii. ❤️",
  "Baat chahe jitni kam ho, feelings kabhi kam nahi hongi… you’ll always be special to me 🥺❤️",
  "🥹🫂 Bas aise hi sukoon se raho… tumhe dekhna hi mere liye enough hai. ❤️"
];

const cover = document.getElementById("cover");
const app = document.getElementById("app");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const photo = document.getElementById("photo");
const message = document.getElementById("message");
const count = document.getElementById("count");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let index = 0;

function render(){
  photo.classList.add("fade");
  setTimeout(()=>{
    photo.src = photos[index];
    message.innerHTML = `${messages[index]}<span>— Tumhara ❤️</span>`;
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
  bgMusic.volume = 0.35;
  bgMusic.play().catch(()=>{});
  musicBtn.textContent = "🔊 Music";
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


musicBtn.addEventListener("click", ()=>{
  if (bgMusic.paused) {
    bgMusic.play().catch(()=>{});
    musicBtn.textContent = "🔊 Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔇 Music";
  }
});
