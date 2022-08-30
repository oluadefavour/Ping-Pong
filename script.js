const p1 = {
  score: 0,
  button: document.querySelector("#p1button"),
  display: document.querySelector("#p1display")
}

const p2 = {
  score: 0,
  button: document.querySelector("#p2button"),
  display: document.querySelector("#p2display")
}

const resetButton = document.querySelector("#reset")

const winningScoreSelect = document.querySelector("#playto")

let winningScore = 3;

let isGameOver = false;


function updateScores(player1, player2) {
  if (!isGameOver) {
    player1.score += 1;
    if (player1.score === winningScore) {
      isGameOver = true;
      player1.display.classList.add("green")
      player2.display.classList.add("red")
      player1.button.disabled = true;
      player2.button.disabled = true;
    }
    player1.display.textContent = player1.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2)
})
p2.button.addEventListener("click", function () {
  updateScores(p2, p1)
})

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener("click", reset)

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0
    p.display.textContent = 0
    p.button.disabled = false
  }
}
