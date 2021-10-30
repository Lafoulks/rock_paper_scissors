const choices = ['rock', 'paper', 'scissors'];

const computerSelection = choices[Math.floor(Math.random() * choices.length)];

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection ==  computerSelection) {
            alert('It\'s a tie!');

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert('You\'ve lost! Try again?');

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            alert('Congrats! You\'ve won.');

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('Congrats! You\'ve won.');

        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            alert('You\'ve lost! Try again?');

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            alert('You\'ve lost! Try again?');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            alert('Congrats! You\'ve won.');
        } else {
            alert('Oops! Something has gone wrong.')
        }
        return(playRound)
    }  


const playerSelection = prompt('What will you choose?', 'Rock, Paper, or Scissors?')
playerSelection.toLowerCase();
console.log(playRound(playerSelection, computerSelection));
