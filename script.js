console.log("Hello World");

function computerPlay() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let selection = options[Math.floor(Math.random()*options.length)];
    console.log("Computer chooses " + selection)
    return selection
}

// Returns 0 if the player wins, 1 if the computer wins, 2 if it's a draw
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock crushes scissors");
        writeAlert("You win! Rock crushes scissors");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper covers rock");
        writeAlert("You lose! Paper covers rock");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You win! Paper covers rock");
        writeAlert("You win! Paper covers rock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You lose! scissors cut paper");
        writeAlert("You lose! scissors cut paper");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock crushes scissors");
        writeAlert("You lose! Rock crushes scissors");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors cut paper");
        writeAlert("You win! Scissors cut paper");
        score[0]++;
        return 0
    } 
    // Logic extended to lizard and spock
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "lizard") {
        console.log("You win! Rock crushes lizard");
        writeAlert("You win! Rock crushes lizard");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "lizard" && computerSelection == "rock") {
        console.log("You lose! Rock crushes lizard");
        writeAlert("You lose! Rock crushes lizard");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "lizard" && computerSelection == "spock") {
        console.log("You win! Lizard poisons Spock");
        writeAlert("You win! Lizard poisons spock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "spock" && computerSelection == "lizard") {
        console.log("You lose! Lizard poisons Spock");
        writeAlert("You lose! Lizard poisons Spock");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "spock" && computerSelection == "scissors") {
        console.log("You win! Spock smashes scissors");
        writeAlert("You win! Spock smashes scissors");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "spock") {
        console.log("You lose! Spock smashes scissors");
        writeAlert("You lose! Spock smashes scissors");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "lizard") {
        console.log("You win! Scissors decapitate lizard");
        writeAlert("You win! Scissors decapitate lizard");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "lizard" && computerSelection == "scissors") {
        console.log("You lose! Scissors decapitate lizard");
        writeAlert("You lose! Scissors decapitate lizard");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "lizard" && computerSelection == "paper") {
        console.log("You win! Lizard eats paper");
        writeAlert("You win! Lizard eats paper");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "lizard") {
        console.log("You lose! Lizard eats paper");
        writeAlert("You lose! Lizard eats paper");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "spock") {
        console.log("You win! Paper disproves spock");
        writeAlert("You win! Paper disproves spock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "spock" && computerSelection == "paper") {
        console.log("You lose! Paper disproves spock");
        writeAlert("You lose! Paper disproves spock");
        score[1]++;
        return 1
    } else if (playerSelection.toLowerCase() == "spock" && computerSelection == "rock") {
        console.log("You win! Spock vaporizes rock");
        writeAlert("You win! Spock vaporizes rock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "spock") {
        console.log("You lose! Spock vaporizes rock");
        writeAlert("You lose! Spock vaporizes rock");
        score[1]++;
        return 1
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
const button_lizard = document.getElementById("btn-lizard");
const button_spock = document.getElementById("btn-spock");
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
button_lizard.addEventListener("click", function () {
    console.log("You chose lizard!");
    playRound("lizard", computerPlay());
    // div_score.innerText = score;
    updateScore();
});
button_spock.addEventListener("click", function () {
    console.log("You chose spock!");
    playRound("spock", computerPlay());
    // div_score.innerText = score;
    updateScore();
});

// game();