const choiceBtn = document.querySelectorAll('.player-container button');
const playerScore = document.querySelector('#player');
const pcScore = document.querySelector('#pc');
let playerPts = 0;
let pcPts = 0;
let playerChoice;

function getComputerChoice(computerSelection) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            computerSelection = "rock";
            return computerSelection;
            break;
        case 2:
            computerSelection = "paper";
            return computerSelection;
            break;
        case 3:
            computerSelection = "scissor";
            return computerSelection;
            break;
        default:
            console.log("How?");
            break;
    }
}

choiceBtn.forEach(button => {button.addEventListener('click', () => {
    playerChoice = button.id;
    
    playRound(playerChoice, getComputerChoice())

    });
});

function playRound(playerSelection, computerChoice) {
    let result;
    console.log(playerSelection);
    console.log(computerChoice);

    if (playerSelection === computerChoice) {
        result = "It's a tie";
    } else {
        if (playerSelection === "rock") {
            if (computerChoice === "paper") {
                result = "Computer wins. Paper beats Rock!";
                pcScore.textContent = ++pcPts;
            } else {
                result = "Player wins. Rock beats Scissor!";
                playerScore.textContent = ++playerPts;
            }
        } else if (playerSelection === "paper") {
            if (computerChoice === "rock") {
                result = "Player wins. Paper beats Rock!";
                playerScore.textContent = ++playerPts;
            } else {
                result = "Computer wins. Scissor beats Paper!";
                pcScore.textContent = ++pcPts;
            }
        } else {
            if (computerChoice === "paper") {
                result = "Player wins. Scissor beats Paper!";
                playerScore.textContent = ++playerPts;
            } else {
                result = "Computer wins. Rock beats Scissor!";
                pcScore.textContent = ++pcPts;
            }
        }
    }
}


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