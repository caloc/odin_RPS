var humanScore = 0;
var computerScore = 0;


function getComputerChoice() {
    var num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            // console.log('rock');
            return 'rock';
        case 1:
            // console.log('paper');
            return 'paper';
        case 2:
            // console.log('scissors');
            return 'scissors';
    }
};

function getHumanChoice() {
    var choice =prompt("Mời bạn nhập 1 lựa chọn sau đây: rock | paper | scissors ");
    // console.log(choice.toUpperCase());
    return choice.toUpperCase();
};
 

function playRound(humanChoice, computerChoice){
    if(humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "PAPER"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "SCISSORS"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice.toUpperCase() == "ROCK" && computerChoice.toUpperCase() == "ROCK"){
        console.log("You tie! Rock equals Rock");
    }
    else if(humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "ROCK"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "SCISSORS"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice.toUpperCase() == "PAPER" && computerChoice.toUpperCase() == "PAPER"){
        console.log("You tie! Paper equals Paper");
    }
    else if(humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "SCISSORS"){
        console.log("You tie! Scissors equals Scissors");
    }
    else if(humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "PAPER"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice.toUpperCase() == "SCISSORS" && computerChoice.toUpperCase() == "ROCK"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
};

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore){
        console.log("You win the game!");
    }
    else if (computerScore > humanScore){
        console.log("You lose the game!");
    }
    else {
        console.log("You tied in the game");
    }
}

playGame();

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


