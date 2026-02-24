let playerHealth = 100;
let computerHealth = 100;

function updateHealth() {
  document.getElementById("playerHealth").innerText = playerHealth;
  document.getElementById("computerHealth").innerText = computerHealth;

  document.getElementById("playerBar").style.width = playerHealth + "%";
  document.getElementById("computerBar").style.width = computerHealth + "%";
}

function attack() {
  let damage = Math.floor(Math.random() * 10) + 5;
  computerHealth -= damage;

  if (computerHealth < 0) computerHealth = 0;

  updateHealth();
  checkWinner();
}

function specialAttack() {
  let damage = Math.floor(Math.random() * 20) + 10;
  computerHealth -= damage;

  if (computerHealth < 0) computerHealth = 0;

  updateHealth();
  checkWinner();
}

function defend() {
  playerHealth += 5;
  if (playerHealth > 100) playerHealth = 100;

  updateHealth();
}

function restartGame() {
  playerHealth = 100;
  computerHealth = 100;
  document.getElementById("result").innerText = "";
  updateHealth();
}

function checkWinner() {
  if (computerHealth <= 0) {
    document.getElementById("result").innerText = "🎉 You Win!";
  }
}
