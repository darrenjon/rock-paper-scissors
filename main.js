//Computer randomly chooses rock, paper, or scissors
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';

    }
}

//Player chooses rock, paper, or scissors
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'You Win! Paper beats Rock';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beats Paper';
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));