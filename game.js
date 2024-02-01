function getComputerChoice() {
    let options = ['ROCK', 'PAPER', 'SCISSORS']
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
    {
        return ('Tie!')
    }
    else if (playerSelection == 'ROCK')
    {
        if (computerSelection == 'SCISSORS')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'PAPER')
    {
        if (computerSelection == 'ROCK')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'SCISSORS')
    {
        if (computerSelection == 'PAPER')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        return ('Invalid option');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose between paper, rock or scissors. Type one:").toUpperCase();;
        console.log(`Your selection: ${playerSelection}`);
        const computerSelection = getComputerChoice().toUpperCase();
        console.log(`Computer selection ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();