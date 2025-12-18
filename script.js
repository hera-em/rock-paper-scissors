let humanSelection = "";
let computerSelection = "";
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const humanScoreResult = document.querySelector("#human-score");
const computerScoreResult = document.querySelector("#computer-score");


function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    switch (roll) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    } 
}


function getHumanChoice(){
    return prompt("rock / paper / scissors?");
}

function playGame () {

    rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
    paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
    scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

    function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You win! Rock beats scissors")
                results.appendChild(roundResult);
                humanScore++;
            }
            else if (computerChoice === "paper") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You lose :( Paper beats rock")
                results.appendChild(roundResult);
                computerScore++;
            }
            else {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("It's a draw!")
                results.appendChild(roundResult);
            };
            break;

        case "paper":
            if(computerChoice === "scissors") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You lose :( Scissors beat paper!")
                results.appendChild(roundResult);

                computerScore++;
            }
            else if (computerChoice === "paper") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("It's a draw!")
                results.appendChild(roundResult);

            }
            else {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You win! Paper beats rock!")
                results.appendChild(roundResult);
                humanScore++;
            };
            break;

        case "scissors":
            if (computerChoice === "scissors") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("It's a draw!")
                results.appendChild(roundResult);

            }
            else if (computerChoice === "paper") {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You win! Scissors beat paper")
                results.appendChild(roundResult);
                humanScore++;
            }
            else {
                const roundResult = document.createElement("p");
                roundResult.textContent = ("You lose :( Rock beats scissors")
                results.appendChild(roundResult);
                computerScore++;
            };
            break;
    }
    humanScoreResult.textContent = `Your score: ${humanScore}`; 
    computerScoreResult.textContent = `Computer score: ${computerScore}`;

    if (humanScore == 5) {
        const winner = document.createElement("p");
        winner.textContent = "And the winner is... you!";
        results.appendChild(winner);
    }

    else if (computerScore == 5) {
        const winner = document.createElement("p");
        winner.textContent = "And the winner is... the computer!";
        results.appendChild(winner);
    }
}


}
playGame();
