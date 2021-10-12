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
        console.log("You win! Rock beats scissors");
        writeAlert("You win! Rock beats scissors");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock");
        writeAlert("You lose! Paper beats rock");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock");
        writeAlert("You win! Paper beats rock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You lose! scissors beat paper");
        writeAlert("You lose! scissors beat paper");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors");
        writeAlert("You lose! Rock beats scissors");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beat paper");
        writeAlert("You win! Scissors beat paper");
        score[0]++;
        return 0
    } else {
        console.log("It's a draw!");
        writeAlert("It's a draw!");
        return 2
    }
}

function game() {
    
    let score = [0, 0];


    let playerSelection = "nothing";

    // while (playerSelection.toLowerCase() != "rock" 
    // && playerSelection.toLowerCase() != "paper" 
    // && playerSelection.toLowerCase() != "scissors") {
    //     playerSelection = prompt("Make your choice! Rock, paper or scissors?");
    //     console.log("You choose " + playerSelection.toLowerCase())
    // } 


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

    console.log("The score: " + score[0] + " : " + score[1])

    if (score[0] > score[1]) {
        console.log("You won the game!")
    } else if (score[0] < score[1]) {
        console.log("You lost the game!")
    } else {
        console.log("The game ended in a draw!")
    }
}

function updateScore() {
    div_score_player.innerText = score[0];
    div_score_computer.innerText = score[1];
}

function writeAlert(text) {
    alert.innerText = text;
}

const button_rock = document.getElementById("btn-rock");
const button_paper = document.getElementById("btn-paper");
const button_scissors = document.getElementById("btn-scissors");
const div_score = document.getElementById("score");
const div_score_player = document.getElementById("score-player");
const div_score_computer = document.getElementById("score-computer");
const alert = document.getElementById("alert");

let score = [0, 0];

button_rock.addEventListener("click", function () {
    console.log("You chose rock!");
    playRound("rock", computerPlay());
    // div_score.innerText = score;
    updateScore();
});

button_paper.addEventListener("click", function () {
    console.log("You chose paper!");
    playRound("paper", computerPlay());
    // div_score.innerText = score;
    updateScore();
});
button_scissors.addEventListener("click", function () {
    console.log("You chose scissors!");
    playRound("scissors", computerPlay());
    // div_score.innerText = score;
    updateScore();
});

// game();