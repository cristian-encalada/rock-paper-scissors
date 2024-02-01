let options = ['ROCK', 'PAPER', 'SCISSORS']
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
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
        if (computerSelection == 'SCISSORS'){
            playerScore += 1;
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
            computerScore += 1;
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
        }
            
    }
    else if (playerSelection == 'PAPER')
    {
        if (computerSelection == 'ROCK') {
            playerScore += 1;
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else {
            computerScore += 1;
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
        }
    }
    else if (playerSelection == 'SCISSORS')
    {
        if (computerSelection == 'PAPER') {
            playerScore += 1;
            return (`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else {
            computerScore += 1;
            return (`You lose! ${computerSelection} beats ${playerSelection}`);
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose between paper, rock or scissors. Type one:").toUpperCase();;
        console.log(`Your selection: ${playerSelection}`);
        const computerSelection = getComputerChoice().toUpperCase();
        console.log(`Computer selection ${computerSelection}`);
        if (options.indexOf(playerSelection) > -1){
            console.log(playRound(playerSelection, computerSelection));
            console.log(playerScore);
            console.log(computerScore); 
        }
        else {
            console.log('Invalid option. Choose a between paper, rock or scissors');
            i--; // Decrement the loop counter for invalid inputs
        }
    }

    if (playerScore > computerScore)
        alert('Congratulations! You win!')
    else
        alert('Computer win!. Try again')
}

playGame();