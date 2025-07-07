// Heart Game logic for page3.html
let score = 0;
const btn = document.getElementById("heart-btn");
const scoreText = document.getElementById("score");

if (btn && scoreText) {
  btn.addEventListener("click", () => {
    score++;
    scoreText.innerText = `Pyaar: ${score}%`;
  });
}
