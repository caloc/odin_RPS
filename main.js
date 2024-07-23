// biến lưu trữ lựa chọn của máy tính 
let computersChoice = "";

// hàm lấy kết quả chọn của máy
function getComputerChoice() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ]

    let computersIndex = Math.floor(Math.random() * choices.length);
    if (computersIndex === 0) {
        computersChoice = "rock";
    }
    else if (computersIndex === 1) {
        computersChoice = "paper";
    }
    else if (computersIndex === 2) {
        computersChoice = "scissors";

    }
    
    return computersChoice;
};

// tạo biến lưu trữ lựa chọn của người chơi
let humanChoice = "";

// tạo biến message thông báo thắng thua của mỗi lượt
let  message = "";

// tạo biến đếm cho điểm số của người và máy
let humanScore = 0;
let computerScore = 0;

// viết hàm so sánh của mỗi lượt chơi

function compare(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper"){
        message = "You lose! Paper beats rock.";
        computerScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        message = "You win! Rock beats scissors.";
        humanScore++;
    }
    else if(humanChoice === "rock" && computerChoice === "rock"){
        message = "Draw! You both chose rock.";
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        message = "You win! Paper beats rock.";
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        message = "Draw! You both chose paper.";
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        message = "You lose! Scissors beats paper.";
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        message = "You lose! Rock beats scissors.";
        computerScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        message = "Draw! You both chose scissors.";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        message = "You win! Scissors beats paper.";
        humanScore++;
    }
    else{
        message = "Something has gone wrong, please refresh anh try again.";
    }
    return message;
};

const results = document.querySelector(".displayResult");
const humanScoreKeeper = document.querySelector(".humanScore")
const computerScoreKeeper = document.querySelector(".computerScore")
humanScoreKeeper.textContent = humanScore;
computerScoreKeeper.textContent = computerScore;


// hàm chơi từng lượt
function playRound(){
    getComputerChoice();
    compare(humanChoice, computersChoice);
    let p = document.createElement("p");
    p.textContent = message;
    results.appendChild(p);
    // if (message == "You lose! Paper beats rock.") {
    //     p.classList.add("lose");
    // }
    // else if (message == "You lose! Scissors beats paper.") {
    //     p.classList.add("lose");
    // }
    // else if (message == "You lose! Rock beats scissors.") {
    //     p.classList.add("lose");
    // }
    // else if (message == "Draw! You both chose rock.") {
    //     p.classList.add("draw");
    // }
    // else if (message == "Draw! You both chose paper.") {
    //     p.classList.add("draw");
    // }
    // else if (message == "Draw! You both chose scissors.") {
    //     p.classList.add("draw");
    // }
    humanScoreKeeper.textContent = humanScore;
    computerScoreKeeper.textContent = computerScore;

    if ( humanScore === 5){
        alert("You win! Goob job!");
        computerScore = 0;
        humanScore = 0;
        humanScoreKeeper.textContent = humanScore;
        computerScoreKeeper.textContent = computerScore;
        while(results.firstChild){
            results.removeChild(results.lastChild);
        }
    }
    else if (computerScore === 5){
        alert("You lose! Better luck next time!");
        computerScore = 0;
        humanScore = 0;
        humanScoreKeeper.textContent = humanScore;
        computerScoreKeeper.textContent = computerScore;
        while(results.firstChild){
            results.removeChild(results.lastChild);
        }
    }
}

//viết hàm cho nút restart
const restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
    computerScore = 0;
    humanScore = 0;
    humanScoreKeeper.textContent = humanScore;
    computerScoreKeeper.textContent = computerScore;
    while(results.firstChild){
        results.removeChild(results.lastChild);
    }
})

// hàm bấm bất kì nút nào để chơi
const buttons = document.querySelectorAll(".btn");
for( let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        if ( i == 0){
            humanChoice = "rock";
            playRound();
        }else if ( i == 1){
            humanChoice = "paper";
            playRound();
        }else if (i == 2){
            humanChoice = "scissors";
            playRound();
        }
    })
}






