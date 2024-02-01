function getComputerChoice()
{
    let options = ['Rock', 'Paper', 'Scissors']
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

const playerSelection = "Rock";
console.log(`Your selection: ${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(`Computer selection ${computerSelection}`);

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        return ('Tie!')
    }
    else if (playerSelection == 'Rock')
    {
        if (computerSelection == 'Scissors')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'Paper')
    {
        if (computerSelection == 'Rock')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'Scissors')
    {
        if (computerSelection == 'Paper')
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        else
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

console.log(playRound(playerSelection, computerSelection));