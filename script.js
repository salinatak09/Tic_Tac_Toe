console.log('Welcome to Tic Tac Toe');

let audioTurn = new Audio("drop.wav") ;
let music = new Audio("music.mp3");
let gameOver = new Audio("gameOver.wav") ;
let turn = 'X';
let isGameOver = false;
//Function to change the Turn
const changeTurn = ()=>{
    return turn === "X" ? "O" : "X";
}

//Function to check for a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        //[index, index, index, xShiftLine, yShift, angle]
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '250px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = `20vw`;
            music.play();
            
        }
    });
    // return true;
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    });
});

//Add onclick to reset button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText ='';
    });
    turn = 'X';
    isGameOver = false;
    document.querySelector('.line').style.width = `0`;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
});
