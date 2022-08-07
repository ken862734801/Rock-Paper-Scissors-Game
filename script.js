//Global Variables
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

//Buttons
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

//Variable for current choice image.
let playerImage = document.getElementById("player-image");

//Function for random computer Selection.
function computerSelection(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerImage = document.getElementById("computer-image");
    if(randomNumber === 0){
        computerChoice = "rock"
        computerImage.src ="./images/rock.png";
    }else if (randomNumber === 1){
        computerChoice = "paper"
        computerImage.src ="./images/paper.png";
    }else if(randomNumber === 2){
        computerChoice = "scissors"
        computerImage.src ="./images/scissors.png";
    }
};

//Function for player choice selection.
function playerSelection(){
    rockBtn.addEventListener("click", function(e){
        playerChoice = "rock";
        console.log(playerChoice);
        if(e.target.id === "rockBtn"){
            playerImage.src = "./images/rock.png";
        }
    });
    paperBtn.addEventListener("click", function(e){
        playerChoice = "paper";
        console.log(playerChoice);
        if(e.target.id === "paperBtn"){
            playerImage.src = "./images/paper.png";
        }
    });
    scissorsBtn.addEventListener("click", function(e){
        playerChoice = "scissors";
        console.log(playerChoice);
        if(e.target.id === "scissorsBtn"){
            playerImage.src = "./images/scissors.png";
        }
    });
}
playerSelection();

//Calls the computer selection function.
rockBtn.addEventListener("click", computerSelection);
paperBtn.addEventListener("click", computerSelection);
scissorsBtn.addEventListener("click", computerSelection);


//Variables for game messages and score.
let message = document.getElementById("message");
let resultMessage = document.getElementById("resultMessage");
let playerScoreDisplay = document.getElementById("player-display");
let computerScoreDisplay = document.getElementById("computer-display");

//Function for one round. Win/loss conditions & Score.
function playRound(){

    if (playerChoice === "rock" && computerChoice === "scissors"){
        message.textContent = "Rock beats scissors.";
        resultMessage.textContent = "You win!";
            playerScore+=1;
            playerScoreDisplay.textContent = `Player: ${playerScore}`;

    }else if (playerChoice === "rock" && computerChoice === "paper"){
        message.textContent = "Paper beats rock.";
        resultMessage.textContent = "You lose!";
            computerScore+=1;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    }else if (playerChoice === "paper" && computerChoice === "scissors"){
        message.textContent ="Scissors beats paper.";
        resultMessage.textContent = "You lose!";
            computerScore+=1;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`

    }else if (playerChoice === "paper" && computerChoice === "rock"){
        message.textContent = "Paper beats rock.";
        resultMessage.textContent = "You win!";
            playerScore+=1;
            playerScoreDisplay.textContent = `Player: ${playerScore}`;

    }else if (playerChoice === "scissors" && computerChoice === "rock"){
        message.textContent = "Rock beats scissors.";
        resultMessage.textContent = "You lose!";
            computerScore+=1;
            computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    }else if (playerChoice === "scissors" && computerChoice === "paper"){
        message.textContent = "Scissors beats paper.";
        resultMessage.textContent = "You win!";
            playerScore+=1;
            playerScoreDisplay.textContent = `Player: ${playerScore}`;

    }else if (playerChoice === computerChoice){
        message.textContent = `You both chose ${playerChoice}.`;
        resultMessage.textContent = "It's a tie!"
    }
};

//Call the start of game.
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);


