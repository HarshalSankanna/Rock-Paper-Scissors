function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let Choice = arr[Math.floor(Math.random() * arr.length)];
  return Choice;
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;
  let result = "tie";
  if (player == "rock" && computer == "scissors") {
    result = "You Win! Rock beats Scissors";
  } else if (player == "rock" && computer == "paper") {
    result = "You Lose! Paper beats Rock";
  } else if (player == "rock" && computer == "rock") {
    result = "It's a tie!";
  } else if (player == "paper" && computer == "scissors") {
    result = "You Lose! Scissors beat Paper";
  } else if (player == "paper" && computer == "paper") {
    result = "It's a tie!";
  } else if (player == "paper" && computer == "rock") {
    result = "You Win! Paper beats Rock";
  } else if (player == "scissors" && computer == "rock") {
    result = "You Lose! Rock beats Scissors";
  } else if (player == "scissors" && computer == "paper") {
    result = "You Win! Scissors beat paper";
  } else if (player == "scissors" && computer == "scissors") {
    result = "It's a tie!";
  } else {
    result = "Invalid choice";
  }
  return result;
}
