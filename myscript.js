let playerScore = 0;
let computerScore = 0;

//Initiating computer selectiom
const choices = ['rock', 'paper', 'scissors'];
let computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection);


//This allows one round of the game with user input. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
            alert('It\'s a tie!');

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert('A point for the computer!');
            ++computerScore;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            alert('A point for you!');
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('A point for you!');
            ++playerScore; 

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            alert('A point for the computer!');
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            alert('A point for the computer!');
            ++computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            alert('A point for you!');
            ++playerScore; 

        } else {
            alert('Please choose between rock, paper, or scissors.')
            
        }
        return(playRound)
    }  


/*Buttons are responsive, but results don't match the computerChoice that is being console logged (log will say paper, I choose rock and it declares I've won)
Console log is showing the correct output for player choice, but results don't match the logic in the playRound fucntion above
*/
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

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