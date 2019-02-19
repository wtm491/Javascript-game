"use strict";

let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;

// Start Game - prompt user for name if they select Yes
function startGame() {
  let play = prompt("Would you like to play a game?");

  if(play === "Yes" || play === "yes") {
    startCombat();
  }else {
    alert("Booooo");
  }

}

//Combat - subract userHealth and grantHealth from random number generated in getDamage function
function startCombat() {
  while(userHealth > 0 && grantHealth > 0) {
    userHealth = userHealth - getDamage();
    grantHealth = grantHealth - getDamage();

    alert("Grant has " + grantHealth + " health points and you have " + userHealth + " health points")
  }

  if(userHealth <= 0) {
    alert("You lose!")
    grantWins++;
    alert("Grant has won " +grantWins + " games")
  } else if(grantHealth <= 0) {
    alert("YOU WIN!!!")
    userWins++;
    alert("You've won " + userWins + " games!")
  }

  if(userWins < 3){
  	userHealth = 40;
    grantHealth = 10;
  	startGame();
  }else if(grantWins === 1) {
  	alert("Grant wins the game")
  }
}

// Calculate damage per turn. reduce by a number between 1 and 5 
function getDamage() {
  let damage = Math.floor(Math.random() * 6);
  return damage;

}

startGame();
