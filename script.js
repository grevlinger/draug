let level = 1;
let experience = 0;
let health = 100;
let energy = 50;

function startBattle() {
  const enemyHealth = Math.floor(Math.random() * 50) + 50; // Random enemy health between 50 and 100
  const enemyDamage = Math.floor(Math.random() * 10) + 10; // Random enemy damage between 10 and 20

  resetCharacter(); // Reset character stats before each battle

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
  resetCharacter();
}

function levelUp() {
  if (experience >= level * 30) {
    level++;
    health += 20;
    energy += 10;
    logBattle(`Level up! You are now level ${level}. Health and energy increased.`);
  }
}

function updateCharacterInfo() {
  const levelElement = document.getElementById('level');
  const experienceElement = document.getElementById('experience');
  const healthElement = document.getElementById('health');
  const energyElement = document.getElementById('energy');

  levelElement.textContent = level;
  experienceElement.textContent = experience;
  healthElement.textContent = health;
  energyElement.textContent = energy;
}

function resetCharacter() {
  level = 1;
  experience = 0;
  health = 100;
  energy = 50;
  updateCharacterInfo();
  document.getElementById('battle-log').innerHTML = '';
}