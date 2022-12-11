const computerSelection = getComputerChoice();
let score = 0;
//const playerSelection = "rock";



function getComputerChoice() {
    //makes an array of 3 choices. When based on the length of the array
    //selects a random number from 0-2 and rounds it down.
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * options.length);
    let computerSelection = options[index];
    return computerSelection;
}



let playerSelection = '';

const buttonRock = document.querySelector(".buttonRock");
const buttonPaper = document.querySelector(".buttonPaper");
const buttonScissors = document.querySelector(".buttonScissors");
//buttonRock.addEventListener("click", function() {playerSelection = "rock"});


// depending on what button they click it changes the player selection,
// runs and prints the playRound function
function checkvalue() {
    console.log(playerSelection);
}

//prints the players current score and then when score == 5
// it says you win the game
function checkScore() {
    if (score < 5) {
        return ("Games won", score);
    } else if (score == 5) {
        return ("You win the game!");
    }

}

//selects the players choice and then runs and prints the playRound
// function. select the div with .result as its a class.
buttonRock.addEventListener("click", e => {
    playerSelection = "rock";
    checkvalue();
    document.querySelector(".result").innerHTML = (playRound(playerSelection) +
    "</br>" + checkScore());
});

buttonPaper.addEventListener("click", e => {
    playerSelection = "paper";
    checkvalue();
    document.querySelector(".result").innerHTML = (playRound(playerSelection) +
    "</br>" + checkScore());
});

buttonScissors.addEventListener("click", e => {
    playerSelection = "scissors";
    checkvalue();
    document.querySelector(".result").innerHTML = (playRound(playerSelection) +
     "</br>" + checkScore());
    
});















// playerSelection is the players input
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    //3 if/else if statements for each player choice, rock, scissors
    //paper. added ++ and -- to keep track of the score.

    


    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            score ++;
            return"You win! Rock beats scissors";
        } else if (computerSelection == "paper") {
            score --;
            return"You lose! Paper beats rock";
        } else {
            return"It's a Draw!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            score ++;
            return"You win! Scissors beats paper.";
        } else if (computerSelection == "rock") {
            score --;
            return"You lose! Rock beats scissors";
        } else {
            return"It's a draw";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            score ++;
            return"You win! Paper beats rock.";
        } else if (computerSelection == "scissors") {
            score --;
            return"You lose! Scissors beats paper";
        } else {
            return"It's a draw.";
        }
    }
}


// runs the playRound functionn 5 times and outputs the results.
function game(){
    for (let i = 0; i < 5; i++) {
        userInput = prompt();
        let roundResult = playRound(userInput);
        console.log(`Round ${i} ${roundResult}`);
        
    }
}



console.log(playRound(playerSelection, computerSelection));

