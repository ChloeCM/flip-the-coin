// const randomButton = document.querySelector("#btn");

// randomButton.addEventListener("click", () => {
//   const answerContainer = document.getElementById("answer-container");
//   const coinAnswerImgEl = document.getElementById("coin-answer");

//   const headsOrTailsArr = ["Heads", "Tails"];

//   const answerIndex = Math.floor(Math.random() * headsOrTailsArr.length);
//   const answer = headsOrTailsArr[answerIndex];

//   answerContainer.innerHTML = `<h2 class="answer-text">${answer}</h2>`;

//   const coinImgAnswer =
//     answer === "Heads" ? "/images/heads.svg" : "/images/tails.svg";

//   coinAnswerImgEl.src = coinImgAnswer;
// });
//
//
//
//
const randomButton = document.getElementById("btn");
const restartButton = document.getElementById("restart-btn");
const answerContainer = document.getElementById("answer-container");
const coinAnswerImgEl = document.getElementById("coin-answer");
const score = document.getElementById("score");
const totalScore = {
  Heads: 0,
  Tails: 0,
};

document.addEventListener("click", (event) => {
  if (event.target.id === "btn") {
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

  answerContainer.innerHTML = `<h1>${answer}</h1>`;
  totalScore[answer]++;
  updateScore();

  const coinImages = {
    Heads: "/images/heads.svg",
    Tails: "/images/tails.svg",
  };

  coinAnswerImgEl.src = coinImages[answer];
  console.log(answer);
}

function updateScore() {
  score.innerHTML = `
  <h2>Score: </h2>
    <p>Heads: ${totalScore.Heads}</p>
    <p>Tails: ${totalScore.Tails}</p>
    `;
}

function restartApp() {
  answerContainer.innerHTML = "<h2>Pick Heads or Tails</h2>";
  coinAnswerImgEl.src = "/images/heads.svg";
  totalScore.Heads = 0;
  totalScore.Tails = 0;
  updateScore();
}
