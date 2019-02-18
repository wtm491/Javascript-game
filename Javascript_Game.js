let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;


function startGame() {
  let play = prompt("Would you like to play a game?");

  if(play === "Yes" || play === "yes") {
    startCombat();
  }else {
    alert("Booooo");
  }

}

function startCombat() {
  while(userHealth > 0 && grantHealth > 0) {
    userHealth = userHealth - getDamage();
    grantHealth = grantHealth - getDamage();

    alert("Grant has " + grantHealth + " health points and you have " + userHealth + " health points")

  }

  if(userHealth <= 0) {
    alert("You lose!")
    grantWins++;
  } else if(grantHealth <= 0) {
    alert("YOU WIN!!!")
    userWins++;
  }
}

function getDamage() {
  let damage = Math.floor(Math.random() * 6);
  return damage;

}

startGame(); 
