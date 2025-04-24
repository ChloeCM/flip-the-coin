const randomButton = document.getElementById("randomBtn");
const answerContainer = document.getElementById("answer-container");
const coinAnswerImgEl = document.getElementById("coin-answer");
const score = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const totalScore = {
  Heads: 0,
  Tails: 0,
};

document.addEventListener("click", (event) => {
  if (event.target.id === "randomBtn") {
    randomSelection();
  }

  if (event.target.id === "restart-btn") {
    restartApp();
  }
});

function randomSelection() {
  const headsOrTailsArr = ["Heads", "Tails"];

  const randomIndex = Math.floor(Math.random() * headsOrTailsArr.length);
  const answer = headsOrTailsArr[randomIndex];
  console.log(answer);

  answerContainer.innerHTML = `<h2>${answer}</h2>`;
  totalScore[answer]++;
  updateScore();

  const coinImages = {
    Heads: "/images/heads.svg",
    Tails: "/images/tails.svg",
  };

  coinAnswerImgEl.src = coinImages[answer];
}

function updateScore() {
  score.innerHTML = `
  <h3>Score:</h3>
    <p>Heads: ${totalScore.Heads}</p>
    <p>Tails: ${totalScore.Tails}</p>
  `;
}

function restartApp() {
  answerContainer.innerHTML = `<h2>Pick Heads or Tails</h2>`;
  coinAnswerImgEl.src = "/images/heads.svg";
  totalScore.Heads = 0;
  totalScore.Tails = 0;
  updateScore();
  console.clear();
}
