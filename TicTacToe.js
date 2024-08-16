let player1 = prompt("Enter Player 1 name");
let player2 =  prompt("Enter player 2 name");

let body = document.querySelector("body");
let btn  = document.querySelectorAll(".btn");
let resetGameBtn =  document.querySelector("#reset-game");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let playerName = document.querySelector(".playerName");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let turn = true;
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turn){
            btn.innerText = "X";
            btn.style.color = "#3d5a80";
            turn = false;
            winner = player1;
        }else{
            btn.innerText = "O";
            btn.style.color = "red";
            turn = true;
            winner = player2;
        };
        btn.disabled = true;
        checkWinner();
        showName();
    })
})

let showName = () => {
    playerName.innerText = `Player 1: ${player1}   Player 2: ${player2}`;
    playerName.style.color = "white";
    playerName.style.fontSize = "25px";
    playerName.style.width = "250px";
    playerName.style.height = "50px";
    playerName.style.marginLeft = "25px";
    playerName.style.marginTop = "15px";
    playerName.style.padding = "5px";
    playerName.style.marginLeft = "25px";
    playerName.style.backgroundColor = "#124559";   
    playerName.style.border = "2px solid white";
}

let checkWinner = () => {
    for(let val of winPatterns){
        let box1 = btn[val[0]].innerText;
        let box2 = btn[val[1]].innerText;
        let box3 = btn[val[2]].innerText;
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 === box2 && box2 === box3){
                showWinner(winner);
            }
        }
    }
}

let disableBtn = () => {
    for(let btns of btn){
        btns.disabled = true;
    }
}

let enableBtn = () => {
    for(let btns of btn){
        btns.disabled = false;
        btns.innerText = "";
    }
}

const showWinner = (val) => {
    msg.innerText = `Congratulations ${val}, you are the winner !! `;
    msgContainer.classList.remove("hide");
    disableBtn();
  };

const resetGame = () => {
    turn = true;
    msgContainer.classList.add("hide");
    enableBtn();
}

resetGameBtn.addEventListener("click", (resetGame));
newGameBtn.addEventListener("click", (resetGame));
