const choices = ["rock", "paper", "scissor"];

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const drawScoreDisplay = document.getElementById("draw-score");

const result = document.getElementById("result");

let userScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice(choices) {
  const randIdx = Math.floor(Math.random() * choices.length);
  return choices[randIdx];
}
function playGame(userChoice) {
  const computerChoice = getComputerChoice(choices);

  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;

  if (userChoice == computerChoice) {
    draw++;
    result.textContent = "🤝 It's a Draw!";
    drawScoreDisplay.textContent = draw;
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    result.textContent = `🎉 You Win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    result.textContent = `Computer Wins! ${computerChoice} beats ${userChoice}`;
  }
}

rockBtn.addEventListener("click", () => {
  playGame("rock");
});

paperBtn.addEventListener("click", () => {
  playGame("paper");
});

scissorBtn.addEventListener("click", () => {
  playGame("scissor");
});
