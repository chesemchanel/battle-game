let playerHealth = 100;
let computerHealth = 100;

function updateHealth() {
 .health-bar {
    width: 100%;
    height: 20px;
    background: #555;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
}

.health-fill {
    height: 100%;
    width: 100%;
    background: limegreen;
    transition: width 0.4s ease-in-out;
}

/* Screen shake animation */
@keyframes shake {
    0% { transform: translate(0px, 0px); }
    25% { transform: translate(5px, 0px); }
    50% { transform: translate(-5px, 0px); }
    75% { transform: translate(5px, 0px); }
    100% { transform: translate(0px, 0px); }
}

.shake {
    animation: shake 0.3s;
}   
}
function attack() {
    let damage = Math.floor(Math.random() * 11) + 5;
    computerHealth -= damage;

    let computerDamage = Math.floor(Math.random() * 11) + 5;
    playerHealth -= computerDamage;

    document.getElementById("result").textContent =
        `You attacked for ${damage}! Computer attacked for ${computerDamage}!`;

    checkWinner();
    updateHealth();
}

function specialAttack() {
    let damage = Math.floor(Math.random() * 16) + 10;
    computerHealth -= damage;

    let computerDamage = Math.floor(Math.random() * 11) + 5;
    playerHealth -= computerDamage;

    document.getElementById("result").textContent =
        `SPECIAL! You did ${damage} damage! Computer did ${computerDamage}!`;

    checkWinner();
    updateHealth();
}

function defend() {
    let computerDamage = Math.floor(Math.random() * 6) + 2;
    playerHealth -= computerDamage;

    document.getElementById("result").textContent =
        `You defended! Computer did only ${computerDamage} damage.`;

    checkWinner();
    updateHealth();
}

function checkWinner() {
    if (playerHealth <= 0 && computerHealth <= 0) {
        document.getElementById("result").textContent = "It's a draw!";
    } else if (playerHealth <= 0) {
        document.getElementById("result").textContent = "You lost! 💀";
    } else if (computerHealth <= 0) {
        document.getElementById("result").textContent = "You won! 🎉";
    }
}

function restartGame() {
    playerHealth = 100;
    computerHealth = 100;
    document.getElementById("result").textContent = "New battle started!";
    updateHealth();
}

updateHealth();
