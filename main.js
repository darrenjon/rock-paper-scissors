const playerSelection = '';
const computerSelection = '';

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
  //Make playerSelection case insensitive
  playerSelection = playerSelection.toLowerCase();
  //Check game rules
  if (playerSelection === computerSelection) {
    alert('Tie');
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      alert('You Lose! Paper beats Rock');
    } else {
      alert( 'You Win! Rock beats Scissors');
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      alert ('You Lose! Scissors beats Paper');
    } else {
      alert('You Win! Paper beats Rock');
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      alert('You Lose! Rock beats Scissors');
    } else {
      alert('You Win! Scissors beats Paper');
    }
  }
}

//Play 5 rounds of the game and keep score
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose rock, paper, or scissors');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === 'You Win!') {
      playerScore++;
    } else if (result === 'You Lose!') {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    alert('The Final result is: You Win!');
  } else if (playerScore < computerScore) {
    alert('The Final result is: You Lose!');
  } else {
    alert('The Final result is: Tie');
  }
}

game();
