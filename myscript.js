//Initiating score keeping
let playerScore = 0;
let computerScore = 0;

//Initiating computer selectiom
const choices = ['rock', 'paper', 'scissors'];

//This allows one round of the game with user input. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
            alert('We\'ve tied...Try again?');

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert('You chose rock and I chose paper. I win this round!');
            ++computerScore;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            alert('You chose rock and I chose scissors. You win this round!');
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('You chose paper and I chose rock. You win this round!');
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            alert('You chose paper and I chose scissors. I win this round!');
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            alert('You chose scissors and I chose rock. I win this round!');
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            alert('You chose scissors and I chose paper. You win this round!');
            ++playerScore; 

        } else {
            alert('Please choose between rock, paper, or scissors.')
            
        }
        return(playRound)
    }  


//Each button represents a player choice against the computer's random choice
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
});

// Each click must add a correspondig ponint to either the computer or player.

div = document.getElementById('pScore');
pScore.textContent = 'Your score is: ' + playerScore;

div = document.getElementById('cScore');
cScore.textContent = 'My score is: ' + computerScore;


/*This function repeats the game 5 times and alerts the user if they've won the 5 rounds or not
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