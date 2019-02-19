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
    alert("Lame...");
  }

}

//Combat - subract userHealth and grantHealth from random number generated in getDamage function
function startCombat() {
  while(userHealth > 0 && grantHealth > 0) {
  let offense = prompt("Do you want to attack or quit?")

  if(offense === "attack"){
  	userHealth = userHealth - getDamage();
    grantHealth = grantHealth - getDamage();
    alert("Grant has " + grantHealth + " health points and you have " + userHealth + " health points");

  	}else if(offense === "quit") {
    	quitGame();
    	break;
    }
  }

//Check for who won the game
  if(userHealth <= 0) {
    alert("You lose!")
    grantWins++;
    alert("Grant has won " +grantWins + " games")
  } else if(grantHealth <= 0) {
    alert("YOU WIN!!!")
    userWins++;
    alert("You've won " + userWins + " games!")
  }

//Check number of wins
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

//PLAY!
startGame();

//Quit alert message
function quitGame(){
	alert("You've quit the current game...Restarting now")
}
