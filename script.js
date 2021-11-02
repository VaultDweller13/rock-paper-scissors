"use strict";
const moves = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".moves");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => btn.addEventListener('click', playRound));

function playRound(e) {
  const playerSelection = this.value;
  const computerSelection = computerPlay();
  const resultField = document.querySelector('#result');

  let result = getResult(playerSelection, computerSelection);
  
  resultField.textContent = `Your play: ${playerSelection}; 
                            Opponent play: ${computerSelection}. ${result}
                            Player: ${playerScore} Opponent: ${computerScore}`;

  if (playerScore >= 5) {
    resultField.textContent = resultField.textContent.concat(` Congratulations! You win ${playerScore} rounds!`)
    resetScore();
  } else if (computerScore >= 5) {
      resultField.textContent = resultField.textContent.concat(` What a shame! Computer wins ${computerScore} rounds!`)
      resetScore();
    }
}

function computerPlay() {
  return moves[Math.floor(Math.random() * moves.length)];
}

function getResult(playerSelection, computerSelection) {
  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")) {
      playerScore++;
      return `You win! ${playerSelection} beats ${computerSelection}.`;
      
  }
  else if (playerSelection == computerSelection) {
    playerScore++;
    computerScore++;  
    return "It's a tie!";
      
  }
  else {
    computerScore++;  
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function resetScore() {
  playerScore=computerScore=0;
}