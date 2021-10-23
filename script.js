console.log("Hello World");

function computerPlay() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let selection = options[Math.floor(Math.random()*options.length)];
    console.log("Computer chooses " + selection)
    timeout = 250;
    switch(selection) {
        case "rock":
            button_rock_img.style.backgroundColor = "red";
            setTimeout(function(){
                button_rock_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
              }, timeout);
            break;
        case "paper":
            button_paper_img.style.backgroundColor = "red";
            setTimeout(function(){
                button_paper_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
              }, timeout);
            break;
        case "scissors":
            button_scissors_img.style.backgroundColor = "red";
            setTimeout(function(){
                button_scissors_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
              }, timeout);
            break;
        case "lizard":
            button_lizard_img.style.backgroundColor = "red";
            setTimeout(function(){
                button_lizard_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
              }, timeout);
            break;
        case "spock":
            button_spock_img.style.backgroundColor = "red";
            setTimeout(function(){
                button_spock_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
              }, timeout);
            break;
        default:
            break;
    }
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
        writeAlert("You win! Lizard poisons Spock");
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
        console.log("You win! Paper disproves Spock");
        writeAlert("You win! Paper disproves Spock");
        score[0]++;
        return 0
    } else if (playerSelection.toLowerCase() == "spock" && computerSelection == "paper") {
        console.log("You lose! Paper disproves Spock");
        writeAlert("You lose! Paper disproves Spock");
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

function updateScore() {
    div_score_player.innerText = score[0];
    div_score_computer.innerText = score[1];
}

function writeAlert(text) {
    score_alert.innerText = text;
}

function checkForWinner(){
    console.log("Checking for winner")
    if(score[0] == 5) { /*Timeout bo inaczej alert wyświetla się bez czekania an zmiany w DOM*/
        score = [0, 0];
        score_alert.innerText = "You won the game :D \n Play again?";
    } else if(score[1] == 5) {
        score = [0, 0];
        score_alert.innerText = "You lost the game :/ \n Play again?";
    }
}

const button_rock = document.getElementById("btn-rock");
const button_paper = document.getElementById("btn-paper");
const button_scissors = document.getElementById("btn-scissors");
const button_lizard = document.getElementById("btn-lizard");
const button_spock = document.getElementById("btn-spock");

const button_rock_img = document.getElementById("btn-rock-img");
const button_paper_img = document.getElementById("btn-paper-img");
const button_scissors_img = document.getElementById("btn-scissors-img");
const button_lizard_img = document.getElementById("btn-lizard-img");
const button_spock_img = document.getElementById("btn-spock-img");

const div_score_player = document.getElementById("score-player");
const div_score_computer = document.getElementById("score-computer");
const score_alert = document.getElementById("alert");

let score = [0, 0];

button_rock.addEventListener("click", function () {
    console.log("You chose rock!");
    playRound("rock", computerPlay());
    updateScore();
    checkForWinner();
    button_rock_img.style.backgroundColor = "green";
    setTimeout(function(){
        button_rock_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
      }, 250);
});
button_paper.addEventListener("click", function () {
    console.log("You chose paper!");
    playRound("paper", computerPlay());
    updateScore();
    checkForWinner();
    button_paper_img.style.backgroundColor = "green";
    setTimeout(function(){
        button_paper_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
      }, 250);
});
button_scissors.addEventListener("click", function () {
    console.log("You chose scissors!");
    playRound("scissors", computerPlay());
    updateScore();
    checkForWinner();
    button_scissors_img.style.backgroundColor = "green";
    setTimeout(function(){
        button_scissors_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
      }, 250);
});
button_lizard.addEventListener("click", function () {
    console.log("You chose lizard!");
    playRound("lizard", computerPlay());
    updateScore();
    checkForWinner();
    button_lizard_img.style.backgroundColor = "green";
    setTimeout(function(){
        button_lizard_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
      }, 250);
});
button_spock.addEventListener("click", function () {
    console.log("You chose spock!");
    playRound("spock", computerPlay());
    updateScore();
    checkForWinner();
    button_spock_img.style.backgroundColor = "green";
    setTimeout(function(){
        button_spock_img.style.backgroundColor = "#72CBDB";  // Change the color back to the original
      }, 250);
});
