function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let Choice = arr[Math.floor(Math.random() * arr.length)];
  return Choice;
}

// game logic
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;
  let result = 0;
  if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    result = 1; // player wins
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "paper" && computer == "scissors") ||
    (player == "scissors" && computer == "rock")
  ) {
    result = 2; // computer wins
  } else {
    result = 0; // tie
  }

  return result;
}

let playerScore = document.querySelector("#player");
let computerScore = document.querySelector("#computer");
let playerCount = 0;
let computerCount = 0;
let result = document.querySelector("#result");

function rockClicked() {
  let computer = getComputerChoice();
  let player = "rock";
  let resultCode = playRound(player, computer);
  // used setTimeout method to call functions
  // if has arguments then use anonymous arrow function
  updateScore(resultCode);
  setTimeout(match, 3000);
}

function paperClicked() {
  let computer = getComputerChoice();
  let player = "paper";
  let resultCode = playRound(player, computer);
  updateScore(resultCode);
  setTimeout(match, 3000);
}

function scissorsClicked() {
  let computer = getComputerChoice();
  let player = "scissors";
  let resultCode = playRound(player, computer);
  updateScore(resultCode);
  setTimeout(match, 3000);
}

// update score
function updateScore(resultCode) {
  if (resultCode == 1) {
    playerCount++;
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
    result.textContent = "You win!";
  } else if (resultCode == 2) {
    computerCount++;
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
    result.textContent = "You lost!";
  } else {
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
    result.textContent = "Round tied!";
  }
}

function gameStart() {
  let Rock = document.querySelector("#rock");
  let Paper = document.querySelector("#paper");
  let Scissors = document.querySelector("#scissors");

  // to remove previous event listeners if they exist
  Rock.removeEventListener("click", rockClicked);
  Paper.removeEventListener("click", paperClicked);
  Scissors.removeEventListener("click", scissorsClicked);

  // to add new event listeners
  Rock.addEventListener("click", rockClicked);
  Paper.addEventListener("click", paperClicked);
  Scissors.addEventListener("click", scissorsClicked);
}

// to declare winner
function match() {
  if (playerCount == 5) {
    alert("You win the match!");
    // reset scores
    playerCount = 0;
    computerCount = 0;
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
    result.textContent = "-";
    gameStart();
  } else if (computerCount == 5) {
    alert("Computer won the match!");
    // reset scores
    playerCount = 0;
    computerCount = 0;
    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();
    result.textContent = "-";
    gameStart();
  }
}

gameStart();
