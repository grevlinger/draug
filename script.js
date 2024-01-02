let metalPlates = 0;
let platesPerClick = 1;
let factories = 0;
let passiveProduction = 0;
let productionInterval;

function updateMetalPlateDisplay() {
  document.getElementById('metalPlates').innerText = metalPlates;
}

function clickButton() {
  metalPlates += platesPerClick;
  updateMetalPlateDisplay();
}

function buyUpgrade(upgrade) {
  switch (upgrade) {
    case 'house':
      if (metalPlates >= 20) {
        metalPlates -= 20;
        factories++;
        passiveProduction = factories; // Each factory adds 1 to passive production
        updateMetalPlateDisplay(1);
        addEmoji('🏭');
        if (!productionInterval) {
          productionInterval = setInterval(function () {
            metalPlates += passiveProduction;
            updateMetalPlateDisplay();
          }, 1000);
        }
      } else {
        alert('Not enough metal plates to buy a factory!');
      }
      break;
    // Add more cases for other upgrades
  }
}

function addEmoji(emoji) {
  const emojiSpan = document.createElement('span');
  emojiSpan.innerText = emoji;
  document.getElementById('upgrades').appendChild(emojiSpan);
}

// Additional functions for handling passive production and upgrades can be added here.
