function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let Choice = arr[Math.floor(Math.random() * arr.length)];
  return Choice;
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;
  let result = 0;
  if (player == "rock" && computer == "scissors") {
    result = 1;
  } else if (player == "rock" && computer == "paper") {
    result = 2;
  } else if (player == "rock" && computer == "rock") {
    result = 0;
  } else if (player == "paper" && computer == "scissors") {
    result = 2;
  } else if (player == "paper" && computer == "paper") {
    result = 0;
  } else if (player == "paper" && computer == "rock") {
    result = 1;
  } else if (player == "scissors" && computer == "rock") {
    result = 2;
  } else if (player == "scissors" && computer == "paper") {
    result = 1;
  } else if (player == "scissors" && computer == "scissors") {
    result = 0;
  } else {
    result = 5;
  }
  return result;
}

function game(computerSelection) {
  let computer = computerSelection;
  let player = prompt("Rock, Paper or Scissors?");
  let resultCode = playRound(player, computer);
  if (resultCode == 1) {
    alert("You win!");
    return resultCode;
  } else if (resultCode == 2) {
    alert("You lose!");
    return resultCode;
  } else if (resultCode == 0) {
    alert("It's a tie!");
  } else {
    alert("Invalid choice");
  }
}

let playerCount = 0;
let computerCount = 0;

while (playerCount < 3 && computerCount < 3) {
  let key = game(getComputerChoice());
  if (key == 1) {
    playerCount++;
  } else if (key == 2) {
    computerCount++;
  }
}

if (playerCount > computerCount) {
  alert("You win the series! " + playerCount + "-" + computerCount);
} else if (computerCount > playerCount) {
  alert("You lose the series! " + playerCount + "-" + computerCount);
} else {
  alert("Series tied!");
}
