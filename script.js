let score = 0;

document.getElementById("heart-btn").addEventListener("click", () => {
  score++;
  document.getElementById("score").innerText = `Pyaar: ${score}%`;

  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 90 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
});

// Create heart animation
const style = document.createElement('style');
style.innerHTML = `
.floating-heart {
  position: fixed;
  top: 100%;
  font-size: 2rem;
  animation: fly 2s ease-out forwards;
  z-index: 9999;
}
@keyframes fly {
  0% {
    opacity: 1;
    top: 100%;
  }
  100% {
    top: 0%;
    opacity: 0;
  }
}`;
document.head.appendChild(style);
