
let playerHealth = 100;
let computerHealth = 100;

updateHealth();

function updateHealth() {
  document.getElementById("playerHealth").innerText = playerHealth;
  document.getElementById("computerHealth").innerText = computerHealth;

  document.getElementById("playerBar").style.width = playerHealth + "%";
  document.getElementById("computerBar").style.width = computerHealth + "%";
}

function attack() {
  if (playerHealth <= 0 || computerHealth <= 0) return;

  let damage = Math.floor(Math.random() * 10) + 5;
  computerHealth -= damage;

  if (computerHealth < 0) computerHealth = 0;

  updateHealth();
  checkWinner();

  if (computerHealth > 0) {
    setTimeout(computerTurn, 500);
  }
}

function specialAttack() {
  if (playerHealth <= 0 || computerHealth <= 0) return;

  let damage = Math.floor(Math.random() * 20) + 10;
  computerHealth -= damage;

  if (computerHealth < 0) computerHealth = 0;

  updateHealth();
  checkWinner();

  if (computerHealth > 0) {
    setTimeout(computerTurn, 500);
  }
}

function defend() {
  if (playerHealth <= 0 || computerHealth <= 0) return;

  playerHealth += 5;
  if (playerHealth > 100) playerHealth = 100;

  updateHealth();

  setTimeout(computerTurn, 500);
}

function computerTurn() {
  let damage = Math.floor(Math.random() * 10) + 5;
  playerHealth -= damage;

  if (playerHealth < 0) playerHealth = 0;

  updateHealth();
  checkWinner();
}

function checkWinner() {
  if (computerHealth <= 0) {
    document.getElementById("result").innerText = "🎉 You Win!";
  } 
  else if (playerHealth <= 0) {
    document.getElementById("result").innerText = "💀 Computer Wins!";
  }
}

function restartGame() {
  playerHealth = 100;
  computerHealth = 100;
  document.getElementById("result").innerText = "";
  updateHealth();
}
