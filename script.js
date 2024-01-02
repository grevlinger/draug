let metalPlates = 0;
let platesPerClick = 1;
let factories = 0;
let passiveProduction = 0;
let productionInterval;

function updateMetalPlateDisplay(adjustment = 0) {
  metalPlates += adjustment;
  document.getElementById('metalPlates').innerText = metalPlates;

  // Check if the user has enough metal plates to show the screw upgrade button
  if (metalPlates >= 100) {
    document.getElementById('screwUpgrade').style.display = 'inline-block';
  }
}

function clickButton() {
  metalPlates += platesPerClick;
  updateMetalPlateDisplay();
}

function buyUpgrade(upgrade) {
  switch (upgrade) {
    case 'factory':
      if (metalPlates >= 20) {
        metalPlates -= 20;
        factories++;
        passiveProduction = factories;
        updateMetalPlateDisplay(0);
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
    case 'screw':
      if (metalPlates >= 100) {
        metalPlates -= 100;
        // Add logic to generate screws here
        alert('You bought a Screw Generator!');
      } else {
        alert('Not enough metal plates to buy a Screw Generator!');
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
