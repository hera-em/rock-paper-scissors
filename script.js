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


rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));


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
}




function playGame () {


    // for (let i = 0; i < 5; i++) {
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();
    //     console.log(`The computer chose: ${computerSelection}`);
    //     playRound(humanSelection,computerSelection);
    //     console.log(`Your score is: ${humanScore}`);
    //     console.log(`The computer's score is: ${computerScore}`);
    //     console.log("----------------------");
    // }

    // if (computerScore > humanScore) {
    //     console.log("And the winner is... the computer!");
    // }
    // else if (humanScore > computerScore) {
    //     console.log("And the winner is... you!");
    // }
    // else {
    //     console.log("And the winner is... no one :(");       
    // }

}

