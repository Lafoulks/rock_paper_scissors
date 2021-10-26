let choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPlay(choices));

const computerSelection = computerPlay(choices);
const playerSelection = prompt ('What will you choose?', 'Rock, Paper, or Scissors?');

function playRound(playerSelection, computerSelection) {
    if ((computerSelection == 'Rock' && playerSelection == 'Rock') || 
        (computerSelection == 'Scissors' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Paper')) {
            alert('It\'s a tie!');
    }   else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || 
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock')) {
            alert('Oh no! You lost!');
    }   else ((computerSelection == 'Rock' && playerSelection == 'Paper') || 
        (computerSelection == 'Scissors' && playerSelection == 'Rock') ||
        (computerSelection == 'Paper' && playerSelection == 'Scissors')); {
            alert('You win!');
    }
    return (playRound(playerSelection, computerSelection));
}
    console.log(playRound(playerSelection, computerSelection));
