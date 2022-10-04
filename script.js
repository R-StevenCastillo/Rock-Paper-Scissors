const randomNumber = Math.floor(Math.random() * 3) + 1;
const randomNum = Math.floor(Math.random() * 3) + 1;


function getComputerChoice(computerSelection) {
    switch (randomNumber) {
        case 1:
            computerSelection = "Rock";
            return computerSelection;
            break;
        case 2:
            computerSelection = "Paper";
            return computerSelection;
            break;
        case 3:
            computerSelection = "Scissor";
            return computerSelection;
            break;
        default:
            console.log("How?");
            break;
    }
}

function getPlayerChoice(playerSelection) {
    switch (randomNum) {
        case 1:
            playerSelection = "Rock";
            return playerSelection;
            break;
        case 2:
            playerSelection = "Paper";
            return playerSelection;
            break;
        case 3:
            playerSelection = "Scissor";
            return playerSelection;
            break;
        default:
            console.log("How?");
            break;
    }
}

