console.log("Hello World");

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return("You Win! Rock beats scissors")
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return("You lose! Paper beats rock")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return("You won! Paper beats rock")
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return("You lose! scissors beat paper")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return("You lose! Rock beats scissors")
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return("You win! Scissors beat paper")
    } else {
        return("It's a draw!")
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));