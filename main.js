const choiceBtn = document.querySelectorAll('.player-container button');
const playerScore = document.querySelector('#player');
const pcScore = document.querySelector('#pc');
const message = document.querySelector('#message');
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
    }
}

choiceBtn.forEach(button => {button.addEventListener('click', () => {
    playerChoice = button.id;
    
    if (pcPts == 5) {
        message.textContent = "GAME OVER"
        
    } else if (playerPts == 5) {
        message.textContent = "YOU WIN"
    } else {
        playRound(playerChoice, getComputerChoice())
    }

    });
});

function playRound(playerSelection, computerChoice) {

    if (playerSelection === computerChoice) {
        message.textContent = "It's a tie";
    } else {
        if (playerSelection === "rock") {
            if (computerChoice === "paper") {
                message.textContent = "Computer win. Paper beats Rock!";
                pcScore.textContent = ++pcPts;
            } else {
                message.textContent = "You win. Rock beats Scissor!";
                playerScore.textContent = ++playerPts;
            }
        } else if (playerSelection === "paper") {
            if (computerChoice === "rock") {
                message.textContent = "You win. Paper beats Rock!";
                playerScore.textContent = ++playerPts;
            } else {
                message.textContent = "Computer win. Scissor beats Paper!";
                pcScore.textContent = ++pcPts;
            }
        } else {
            if (computerChoice === "paper") {
                message.textContent = "You win. Scissor beats Paper!";
                playerScore.textContent = ++playerPts;
            } else {
                message.textContent = "Computer win. Rock beats Scissor!";
                pcScore.textContent = ++pcPts;
            }
        }
    }
}