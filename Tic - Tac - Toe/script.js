let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg')

let turn = true;

let counter = 0;

const winPatterns = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], 
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
];

const resetGame = function(){
    turn = true;
    counter = 0;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener('click', (e) =>{
        if(turn){
            box.innerText = 'O';
            turn = false;
            box.style.color = "blue"
        }
        else{
            box.innerText = 'X';
            turn = true;
            box.style.color = "red"
        }
        box.setAttribute('disabled','');
        checkWinner();
    })
})

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
    disableBoxes();
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const gameDraw = ()=>{
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () =>{
    counter++;
    let draw  = true;
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText 
        let pos2 = boxes[pattern[1]].innerText 
        let pos3 = boxes[pattern[2]].innerText
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                draw = false;
            }
        } 
    }
    if(counter === 9 && draw){
        gameDraw();
    }
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);