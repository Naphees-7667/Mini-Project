let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const User = document.getElementById('user-score');
const Comp = document.getElementById('comp-score');
const result = document.querySelector('#msg');

const resetBtn = document.createElement('button');
const text = document.createTextNode('Reset Game');
resetBtn.appendChild(text);

document.body.appendChild(resetBtn);

resetBtn.setAttribute('id','msg')
resetBtn.setAttribute('style','margin-top: 5rem')

const choiceArr = ["rock", "paper", "scissors"];

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  User.innerText = userScore;
  Comp.innerText = compScore;
  result.innerText = `Play You Move`
  result.style.backgroundColor = "#081b31"
}

resetBtn.addEventListener('click', (e) => {
  resetGame()
})

const drawGame = () => {
  result.innerText = `Game Draw`;
  result.style.backgroundColor = "blue"
}

const msg = (message,color) => {
  User.innerText = userScore;
  Comp.innerText = compScore;
  result.innerText = message;
  if(color){
    result.style.backgroundColor = "green"
  }
  else{
    result.style.backgroundColor = "red"
  }
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    msg(`You Won! Your ${userChoice} beats ${compChoice}`,true)
  }
  else {
    compScore++;
    msg(`You Loose! Play Again`,false)
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