console.log("Hello World");

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let selection = options[Math.floor(Math.random()*options.length)];
    console.log("Computer chooses " + selection)
    return selection
}

// Returns 0 if the player wins, 1 if the computer wins, 2 if it's a draw
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors")
        return 0
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock")
        return 1
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock")
        return 0
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You lose! scissors beat paper")
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors")
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beat paper")
        return 0
    } else {
        console.log("It's a draw!")
        return 2
    }
}

function game() {
    
    let score = [0, 0];

    for (let i = 0; i < 5; i++) {

        let playerSelection = "nothing"

        while (playerSelection.toLowerCase() != "rock" 
        && playerSelection.toLowerCase() != "paper" 
        && playerSelection.toLowerCase() != "scissors") {
            playerSelection = prompt("Make your choice! Rock, paper or scissors?");
            console.log("You choose " + playerSelection.toLowerCase())
        } 
    
        let computerSelection = computerPlay();
        switch (playRound(playerSelection, computerSelection)) {
            case 0:
                score[0]++;
                break;

            case 1:
                score[1]++;
                break;

            default:
                break;
        }
    }
    console.log("The score: " + score[0] + " : " + score[1])

    if (score[0] > score[1]) {
        console.log("You won the game!")
    } else if (score[0] < score[1]) {
        console.log("You lost the game!")
    } else {
        console.log("The game ended in a draw!")
    }
}

game();