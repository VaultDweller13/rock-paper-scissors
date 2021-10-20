"use strict";
let moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    let result;

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
    else if (playerSelection == computerSelection) {
        result = "It's a tie!";
    }
    else {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }

    //console.log(playerSelection, computerSelection);
    return result;
}

function announceWinner() {
  if (playerScore > computerScore) {
    console.log(`You win! Score is ${playerScore + " : " + computerScore}`);
  } else if (playerScore < computerScore) {
      console.log(`You lose! Score is ${playerScore + " : " + computerScore}`);
  } else console.log(`It's a tie! Score is ${playerScore + " : " + computerScore}`)
}

function game() {
  playerScore = computerScore = 0;
  
  for(let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Choose your play").toLowerCase(), computerPlay()));
  }
  
  announceWinner();
}

