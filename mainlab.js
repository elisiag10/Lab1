var hits = Math.floor(Math.random() * Math.floor(2)+1); 


  if (question==="yes"){
  
 var userInput = prompt ("What is your name"); 
  
  //var intro = alert("Welcome " + userInput + ". Your mission is to defeat the evil Chirpet. By the third defeat you or the Chirpet will be the last man standing. Are you ready let's begin. Good Luck!");
    

while (wins <=  3 && defeats >=0 ){
  if(userHP <=40 ){
    grantHP = grantHP - hits;
    wins = wins + 1;
    
  }
     if (computerHP <= 0 ){console.log ("you win"); }
}

}


//function getRandomInt(max) {
  //return Math.floor(Math.random() * Math.floor(max));
//}
