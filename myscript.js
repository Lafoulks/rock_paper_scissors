const choices = ['rock', 'paper', 'scissors'];
let computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection);

//Code below plays 1 round successfully

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

playerSelection = prompt('What will you choose?', 'Rock, paper, or scissors?').toLowerCase();

//Game() attempt

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
 }

game();
