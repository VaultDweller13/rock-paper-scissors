"use strict";
let moves = ["rock", "paper", "scissors"];
let playerSelection = prompt("Choose your play").toLowerCase();

function computerPlay() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    let result;

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            result = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    else if (playerSelection == computerSelection) {
        result = "It's a tie!";
    }
    else result = `You lose! ${computerSelection} beats ${playerSelection}`;

    console.log(playerSelection, computerSelection);
    return result;
}
