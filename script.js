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
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                console.log ("You win! Rock beats scissors");
                humanScore++;
            }
            else if (computerChoice === "paper") {
                console.log ("You lose :( Paper beats rock");
                computerScore++;
            }
            else {
                console.log("It's a draw!");
            };
            break;

        case "paper":
            if(computerChoice === "scissors") {
                console.log ("You lose :( Scissors beat paper");
                computerScore++;
            }
            else if (computerChoice === "paper") {
                console.log ("It's a draw!");
            }
            else {
                console.log ("You win! Paper beats rock");
                humanScore++;
            };
            break;

        case "scissors":
            if (computerChoice === "scissors") {
                console.log ("It's a draw!");
            }
            else if (computerChoice === "paper") {
                console.log ("You win! Scissors beat paper");
                humanScore++;
            }
            else {
                console.log ("You lose :( Rock beats scissors");
                computerScore++;
            };
            break;
    }

}
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`The computer chose: ${computerSelection}`);
        playRound(humanSelection,computerSelection);
        console.log(`Your score is: ${humanScore}`);
        console.log(`The computer's score is: ${computerScore}`);
        console.log("----------------------");
    }

    if (computerScore > humanScore) {
        console.log("And the winner is... the computer!");
    }
    else if (humanScore > computerScore) {
        console.log("And the winner is... you!");
    }
    else {
        console.log("And the winner is... no one :(");       
    }

}

playGame();
