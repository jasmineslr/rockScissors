function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "It's a tie! Both chose " + playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      "Round " + round + ": Enter rock, paper, or scissors"
    );
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("You win")) {
      playerScore++;
    } else if (result.includes("You lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      "You win the game! Final Score: " + playerScore + " - " + computerScore
    );
  } else if (playerScore < computerScore) {
    console.log(
      "You lose the game! Final Score: " + playerScore + " - " + computerScore
    );
  } else {
    console.log(
      "It's a tie! Final Score: " + playerScore + " - " + computerScore
    );
  }
}

// Start the game
game();
