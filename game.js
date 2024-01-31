function getComputerChoice()
{
    let options = ['Rock', 'Paper', 'Scissors']
    let option = options[Math.floor(Math.random()*options.length)];
    console.log(option);
}

getComputerChoice();