var question= prompt ("do you want to play?");

var userHP = 40;
var computerHP = 10;
var wins = 0; 
var hits= 0;


  if (question==="yes"){
  
  var userInput = prompt ("What is your name"); 
  
  var intro = alert("Welcome " + userInput + ". Your mission is to defeat Grant. Are you ready let's begin. Good Luck!");
    

while (userHP > 0 && wins < 3){
  userHP = userHP - Math.floor((Math.random() * 2) + 1); 
  console.log (userInput + " is now at " +userHP);
  computerHP = computerHP - Math.floor((Math.random() * 2) + 1);
  console.log ("Grant is now at " + computerHP) ;
  if (computerHP <= 0) {
    wins = wins + 1;
    computerHP = 10;
  }
}
  if (wins === 3){
    console.log("You are a winner");
  }
  else{
    console.log("Grant wins");
  }


}