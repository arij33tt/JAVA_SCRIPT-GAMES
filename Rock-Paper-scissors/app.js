const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay  = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice ; 
let computerChoice; 
let result

// for choices of users 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
  userChoice = e.target.id;    
  console.log(e);
  
  userChoiceDisplay.innerHTML=userChoice  

  generateComputerChoice();
  getResults();
}))

// Random number Generator for assigning computer choice 

function generateComputerChoice(){
const randomNumber =Math.floor(Math.random () *3) +1 ;
// console.log(randomNumber);

switch(randomNumber){

  case 1 : computerChoice = 'rock';
  break;
  case 2: computerChoice = 'scissors';
  break;
  case 3: computerChoice = 'paper';
  break;
  default: computerChoice = 'Error';

}
computerChoiceDisplay.innerHTML = computerChoice;
}


// Setting result after each round by comparing each computer and user choice  


function getResults (){
if(computerChoice === userChoice)
{
result = " It's a tie";
}
if(computerChoice === "rock" && userChoice ==="paper")
{
  result = "You win";
}
if(computerChoice === "rock" && userChoice === "scissors")
{
  result = "You lose";
}
if(computerChoice==="paper" && userChoice ==="scissors")
{
  result = "You win";
}
if(computerChoice==="paper" && userChoice ==="rock")
{
  result = "You lose";
}
if(computerChoice==="scissors" && userChoice ==="rock")
{
  result = "You win";
}
if(computerChoice==="scissors" && userChoice ==="paper"){
  result = "You lose";
}
resultDisplay.innerHTML = result;
}
