var grantHealth = 10;
var userHealth = 40;
var wins = 0;

startGame();

function startGame(){
var question = prompt("Do you want to play a game?");
if (question.toLowerCase() === 'yes' || 'y'){

var userName = prompt("What is your name?");
startCombat(userName);

}else{
 console.log("Thats fine");
}

function startCombat(userName){
while(userHealth>0 && wins<3)
   {
     var attack=prompt("Would you like to attack or quit?");
     if (attack.toLowerCase() === 'quit'){
       console.log("you quit!");
       return;
     }
      if (attack.toLowerCase()=== 'attack'){
     userHealth -= getDamage(userHealth);
     grantHealth -= getDamage(grantHealth);
     console.log(`${userName} has ${userHealth} health left`);
     console.log(`Grant has ${grantHealth} health left`);
     
      }else{
        console.log("you must choose \'attack\' or \'quit\'  ");
        continue;
      }
     
     if (grantHealth<=0){
       wins++;
       grantHealth = 10;
       console.log(`${wins} victory`);
     }
   }
}
   if (wins === 3){
     console.log(startCombat.userName + ' wins! Grant is defeated');
   }else{
     console.log(`Grant Wins!`);
   }
   

function getDamage(damage){
 damage = Math.floor(Math.random() * 5) + 1;
 return damage; 
}
 
}
