let choices = ['rock', 'paper', 'scissors'];

function computerPlay(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerPlay(choices));