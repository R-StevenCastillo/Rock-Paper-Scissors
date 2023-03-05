/*function playRound (playerSelection, computerSelection) {
    let winResult = `${playerSelection}-${computerSelection}`;
    let playerWinResult = ['1-0', '0-2', '2-1'];
    console.log(winResult)
    if (Number(playerSelection) === computerSelection) {
        playerScore.textContent = ++playerPts
        pcScore.textContent = ++pcPts
    } else if (playerWinResult.includes(winResult)) {
        playerScore.textContent = ++playerPts;
    }else {
        pcScore.textContent = ++pcPts;
    }
}*/

/*function getComputerChoice(computerSelection) {
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

function playRound(player, computer) {
    let result
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
    let getPlayerSelection = prompt("Rock, Paper or Scissor?");
    let playerSelection = getPlayerSelection.charAt(0).toUpperCase() + getPlayerSelection.slice(1);
    let computerChoice = getComputerChoice()
    console.log(playerSelection);
    console.log(computerChoice);
    console.log(playRound(playerSelection, computerChoice));
}*/