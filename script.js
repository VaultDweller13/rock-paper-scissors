"use strict";
<<<<<<< HEAD
const buttons = document.querySelectorAll(".moves");
=======
let moves = ["rock", "paper", "scissors"];
>>>>>>> refs/remotes/origin/main
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => btn.addEventListener('click', playRound));

function playRound(e) {
  const playerSelection = this.value;
  const computerSelection = computerPlay();
  const resultField = document.querySelector('#result');
  const playerSelectionField = document.querySelector('#player-move');
  const computerSelectionField = document.querySelector('#computer-move');
  const scoreField = document.querySelector('#score');

  let result = getResult(playerSelection, computerSelection);

<<<<<<< HEAD
  playerSelectionField.textContent = `Your play: ${playerSelection}`;
  computerSelectionField.textContent = `Opponent play: ${computerSelection}.`;
  scoreField.textContent = `Player ${playerScore} : ${computerScore} Opponent`;
  
  resultField.textContent = `${result}`;

  if (playerScore >= 5) {
    resultField.textContent = resultField.textContent.concat(` Congratulations! You win ${playerScore} rounds!`)
    resetScore();
  } else if (computerScore >= 5) {
      resultField.textContent = resultField.textContent.concat(` What a shame! Computer wins ${computerScore} rounds!`)
      resetScore();
    }
}

function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
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
=======
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

>>>>>>> refs/remotes/origin/main
