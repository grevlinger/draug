let level = 1;
let experience = 0;
let health = 100;
let energy = 50;

function startBattle() {
  const enemyHealth = Math.floor(Math.random() * 50) + 50; // Random enemy health between 50 and 100
  const enemyDamage = Math.floor(Math.random() * 10) + 10; // Random enemy damage between 10 and 20

  while (health > 0 && enemyHealth > 0) {
    const playerDamage = Math.floor(Math.random() * 10) + 10; // Random player damage between 10 and 20

    // Player attacks
    enemyHealth -= playerDamage;
    logBattle(`You deal ${playerDamage} damage to the enemy. Enemy health: ${enemyHealth}`);

    if (enemyHealth <= 0) {
      winBattle();
      break;
    }

    // Enemy attacks
    health -= enemyDamage;
    logBattle(`Enemy deals ${enemyDamage} damage to you. Your health: ${health}`);

    if (health <= 0) {
      loseBattle();
      break;
    }
  }
}

function logBattle(message) {
  const battleLog = document.getElementById('battle-log');
  battleLog.innerHTML += `<p>${message}</p>`;
}

function winBattle() {
  const battleLog = document.getElementById('battle-log');
  const experienceGain = Math.floor(Math.random() * 20) + 10; // Random experience gain between 10 and 30
  experience += experienceGain;
  levelUp();

  battleLog.innerHTML += `<p>You won the battle! You gained ${experienceGain} experience points.</p>`;
  updateCharacterInfo();
}

function loseBattle() {
  const battleLog = document.getElementById('battle-log');
  battleLog.innerHTML += '<p>You lost the battle. Try again!</p>';
⬤