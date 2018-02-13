class Computer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  
  generateAttackDamage() {
    return getRandomInt(1, 5);
  }
}

class Character extends Computer {
  constructor(name, health, healsRemaining) {
    super(name, health);
    this.healsRemaining = healsRemaining;
    this.wins = 0;
  }
  
  generateAttackDamage() {
    return getRandomInt(1, 3);
  }
  
  heal() {
    this.health += getRandomInt(1, 10);
    this.healsRemaining--;
  }
}

startGame();
function startGame(){
  var game = prompt('Do you want to play a game?');
  if(game.toLowerCase() === 'yes'){
    var username = prompt('What is your character\'s name?');
    startCombat(username);
  } else {
    console.log('You decided not to play');
  }
}

function startCombat(username){
  var grant = new Computer('Grant', 10);
  var user = new Character(username, 40, 2);
  var ULTIMATE_VICTORY = 5;
  while (user.wins < ULTIMATE_VICTORY && user.health > 0) {
    var response = prompt('Would you like to \'attack\', \'heal\', or \'quit\'?');
    if(response.toLowerCase() === 'quit') {
      console.log('You decided to end the game');
      return;
    }
    
    
    if(response.toLowerCase() === 'attack'){
      user.health -= grant.generateAttackDamage();
      grant.health -= user.generateAttackDamage();
      console.log(`${user.name} is at ${user.health} health count`);
      console.log(`${grant.name} is at ${grant.health} health count`);
    } else if (response.toLowerCase() === 'heal' && user.healsRemaining){
      user.heal();
      console.log(`${user.name} healed at has ${user.health} health count`);
    } else if (response.toLowerCase() === 'heal') {
      console.log(`${user.name} has no heals remaining, choose between attack or quit`);
    } else {
      console.log('You must choose between \'attack\', \'heal\', or  \'quit\'');
      continue;
    }
    
    if(grant.health <= 0) {
      user.wins++;
      grant.health = 10;
      console.log(`${user.wins} victory`);
    }
  }
  
   if (user.wins === ULTIMATE_VICTORY){
    console.log(`${user.name} has won the game`);
  } else {
    console.log(`${grant.name} won`);
  }
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}
 