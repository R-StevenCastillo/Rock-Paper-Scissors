function getComputerChoice(computerSelection) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
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
    const randomNum = Math.floor(Math.random() * 3) + 1;

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



function playRound(player = getPlayerChoice(), computer = getComputerChoice()) {
    let result
    console.log(player);
    console.log(computer);
    if (player === computer) {
        result = "It's a tie";
        return result;
    } else {
        if (player === "Rock") {
            if (computer === "Paper") {
                result = "Computer wins. Paper beats Rock!";
                return result;
            } else {
                result = "Player wins. Rock beats Scissor!";
                return result;
            }
        } else if (player === "Paper") {
            if (computer === "Rock") {
                result = "Player wins. Paper beats Rock!";
                return result;
            } else {
                result = "Computer wins. Scissor beats Paper!";
                return result;
            }
        } else {
            if (computer === "Paper") {
                result = "Player wins. Scissor beats Paper!";
                return result;
            } else {
                result = "Computer wins. Rock beats Scissor!";
                return result;
            }
        }
    }
}

for (let i = 0; i < 5; i++) {
    console.log(playRound());
}