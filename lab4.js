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
  constructor(name, health, healsRemaining, wins) {
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
var startbutton = document.getElementById('start');
var attackbutton = document.getElementById('attack');
var healbutton = document.getElementById('heal');
var quitbutton = document.getElementById('quit');
var nameInput = document.getElementById('name');
var createUserButton = document.getElementById('create');
var messageP = document.getElementById('message');
var userHealthBar = document.getElementById('userHealth');
var grantHealthBar = document.getElementById('grantHealth');
var healBar = document.getElementById('heal');
var grant = new Computer('Grant', 10);
var user;

startbutton.addEventListener('click', function(){
  this.setAttribute('class', 'hidden');
  nameInput.setAttribute('class', '');
  createUserButton.setAttribute('class', '');
  
});

createUserButton.addEventListener('click', function(){
  this.setAttribute('class', 'hidden');
  nameInput.setAttribute('class', 'hidden'); 
  attackbutton.setAttribute("class", '');
  healbutton.setAttribute("class", '');
  quitbutton.setAttribute('class', '');
  user = new Character(nameInput.value, 40, 2);
});

attackbutton.addEventListener('click', function(){
  attack();
});


healbutton.addEventListener('click', function(){
  heal();
});

function attack(){
  user.health -= grant.generateAttackDamage();
  grant.health -= user.generateAttackDamage();
  showresults();
}

function heal(){
  user.heal();
  if(!user.healsRemaining) {
    healbutton.disabled = true;
  }
  showresults();
}

function showresults(){
  var ULTIMATE_VICTORY = 5;
  
  messageP.innerText = `${user.name} is at ${user.health} health count ${grant.name} is at ${grant.health} health count`;
   
  
  if(grant.health <= 0) {
      user.wins++;
      grant.health = 10;
      messageP.innerText =`${user.wins} victory`;
      console.log(user.wins);
    }
    if (user.wins === ULTIMATE_VICTORY){
    messageP.innerText = `${user.name} has won the game`;
  } 
   if (user.health <= 0) {
    messageP.innerText = `${grant.name} won`;
  }
}

quitbutton.addEventListener('click', function(){
  this.setAttribute('class', 'hidden');
  nameInput.setAttribute('class', 'hidden');
  createUserButton.setAttribute('class', 'hidden');
  attackbutton.setAttribute('class', 'hidden');
  healbutton.setAttribute('class', 'hidden');
 messageP.innerText = `${user.name} has decided to quit`;
});



function getRandomInt(min, max){
  return Math.floor(Math.random() * max) + min;
  
}