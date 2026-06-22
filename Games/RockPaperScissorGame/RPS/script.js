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

const emojis = {
  rock: "🪨",
  paper: "📄",
  scissor: "✂️",
};

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  userChoiceDisplay.textContent = emojis[userChoice];
  computerChoiceDisplay.textContent = emojis[computerChoice];

  if (userChoice === computerChoice) {
    draw++;
    result.textContent = "🤝 It's a Draw!";
    drawScoreDisplay.textContent = draw;
    return;
  }

  const userWins =
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper");

  if (userWins) {
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
