const squares= document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft= document.querySelector("#time-left");
const score = document.querySelector("#score");

let result  = 0;
let hitposi;
let currentTime =30;
let timerId= null;

function randomSquare(){
squares.forEach(square=>{
    square.classList.remove('mole');

})


// this function is for generating mole in a random sqaure 
let randomSquare= squares[Math.floor( Math.random()*9)]

randomSquare.classList.add("mole")
hitposi= randomSquare.id;
}
//-----------------------------------------------------------------------

// this is for checking wheter the clicked sqaure contain the mole or not 
squares.forEach(square=>{
    square.addEventListener("mousedown",() =>{
        if(square.id===hitposi){
            result++;
            score.textContent=result;
            hitposi=null;

        }
    })
})
//------------------------------------------------------------------------------------------

// this function is for time interval of chainging the mole to one square to another square 
const moveMole = ()=>{
 
    timerId=setInterval(randomSquare,500);
}
moveMole();
//---------------------------------------------------------------------------------------





function countDown (){
currentTime--
timeLeft.textContent=currentTime;

if(currentTime==0){
    clearInterval(countDownTimerId);
    alert("Game is Over Your Final score is "+result);
    clearInterval(timerId)
}

}

let countDownTimerId= setInterval(countDown,1000);









