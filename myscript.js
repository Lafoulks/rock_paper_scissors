//Initiating score keeping
let playerScore = 0;
let computerScore = 0;

//Initiating computer selectiom
const choices = ['rock', 'paper', 'scissors'];

//This determines whether the player or computer wins each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
            round.textContent = "We\'ve tied...Try again?";

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            round.textContent = 'You chose rock and I chose paper. I win this round!';
            ++computerScore;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            round.textContent = 'You chose rock and I chose scissors. You win this round!';
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            round.textContent = 'You chose paper and I chose rock. You win this round!';
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            round.textContent = 'You chose paper and I chose scissors. I win this round!';
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            round.textContent = 'You chose scissors and I chose rock. I win this round!';
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            round.textContent = 'You chose scissors and I chose paper. You win this round!';
            ++playerScore; 

        } else {
            round.textContent = 'Please choose between rock, paper, or scissors.'
            
        }
        return(playRound)
    }  


//Each button represents a player choice against the computer's random choice
//TO DO: still need to get rid of round alerts and add that with a DOM method
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  div = document.getElementById('pScore');
  pScore.textContent = 'Your score is: ' + playerScore;
  div = document.getElementById('cScore');
  cScore.textContent = 'My score is: ' + computerScore;
  console.log(playerSelection);
  console.log(computerSelection);
  if ((computerScore === 5 || playerScore === 5) && (computerScore < playerScore)) {
    round.textContent = 'Game Over! You win. Refresh the page; I demand a rematch!'
} else if ((computerScore === 5 || playerScore === 5) && (computerScore > playerScore)) {
    round.textContent = 'Game over! I win. Refresh the page if you dare play me again...'
}
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  div = document.getElementById('pScore');
  pScore.textContent = 'Your score is: ' + playerScore;
  div = document.getElementById('cScore');
  cScore.textContent = 'My score is: ' + computerScore;
  console.log(playerSelection);
  console.log(computerSelection);
  if ((computerScore === 5 || playerScore === 5) && (computerScore < playerScore)) {
    round.textContent = 'Game Over! You win. Refresh the page; I demand a rematch!'
} else if ((computerScore === 5 || playerScore === 5) && (computerScore > playerScore)) {
    round.textContent = 'Game over! I win. Refresh the page if you dare play me again...'
}
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  div = document.getElementById('pScore');
  pScore.textContent = 'Your score is: ' + playerScore;
  div = document.getElementById('cScore');
  cScore.textContent = 'My score is: ' + computerScore;
  console.log(playerSelection);
  console.log(computerSelection);
  if ((computerScore === 5 || playerScore === 5) && (computerScore < playerScore)) {
    round.textContent = 'Game Over! You win. Refresh the page; I demand a rematch!'
} else if ((computerScore === 5 || playerScore === 5) && (computerScore > playerScore)) {
    round.textContent = 'Game over! I win. Refresh the page if you dare play me again...'
}
});

//Declares scores
div = document.getElementById('pScore');
pScore.textContent = 'Your score is: ' + playerScore;

div = document.getElementById('cScore');
cScore.textContent = 'My score is: ' + computerScore;

/*Function used for previous version that repeats the game 5 times and alerts the user if they've won the 5 rounds or not
function game() {
 playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    playerSelection = prompt('What will you choose?', 'Rock, paper, or scissors?').toLowerCase();
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    playerSelection = prompt('What will you choose?', 'Rock, paper, or scissors?').toLowerCase();
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    playerSelection = prompt('What will you choose?', 'Rock, paper, or scissors?').toLowerCase();
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    playerSelection = prompt('What will you choose?', 'Rock, paper, or scissors?').toLowerCase();
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
playRound(playerSelection, computerSelection)
    console.log(computerSelection);
    if (playerScore > computerScore) {
        alert('Congratulations! You\'ve won!')
    } else if (playerScore == computerScore) {
        alert('It\'s a draw!')
    } else {
        alert('Sorry, you\'ve lost.')
    }
}
game(); 
*/