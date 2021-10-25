let choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

const computerSelection = computerPlay(choices);
const playerSelection = 'Rock';

function playRound(playerSelection, computerSelection) {
    if ((computerSelection = 'Rock') && (playerSelection = 'Rock') || 
    (computerSelection = 'Scissors') && (playerSelection = 'Scissors') ||
    (computerSelection = 'Paper') && (playerSelection = 'Paper')) {
        alert('It\'s a tie!');
    }      
}
