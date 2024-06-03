let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const User = document.getElementById('user-score');
const Comp = document.getElementById('comp-score');
const result = document.querySelector('#msg');

const choiceArr = ["rock", "paper", "scissors"];

const drawGame = () => {
  result.innerText = `Game Draw`;
}

const msg = (message) => {
  User.innerText = userScore;
  Comp.innerText = compScore;
  result.innerText = message;
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    msg(`You Won! Your ${userChoice} beats ${compChoice}`)
  }
  else {
    compScore++;
    msg(`You Loose! Play Again`)
  }
}

const playGame = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

function compChoiceFun() {
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choiceArr[randomIndex];
  return compChoice;
}

choice.forEach((uChoice) => {
  uChoice.addEventListener("click", (e) => {
    let userChoice = uChoice.getAttribute("id");
    let compChoice = compChoiceFun();
    playGame(userChoice, compChoice);
  });
});