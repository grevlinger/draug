let metalPlates = 0;
let platesPerClick = 1;
let factories = 0;
let passiveProduction = 0;
let productionInterval;

let screws = 0;
let screwRate = 5;

function updateMetalPlateDisplay() {
  document.getElementById('metalPlates').innerText = metalPlates;
  document.getElementById('passiveIncome').innerText = passiveProduction;
}

function updateScrewDisplay() {
  document.getElementById('screws').innerText = screws;
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
    case 'screw':
      if (metalPlates >= 100) {
        metalPlates -= 100;
        document.getElementById('screwUpgrade').style.display = 'inline-block'; // Show the screw upgrade button
        document.getElementById('buyScrews').style.display = 'inline-block'; // Show the buy screws button
        alert('You bought a Screw Generator!');
      } else {
        alert('Not enough metal plates to buy a Screw Generator!');
      }
      break;
    // Add more cases for other upgrades
  }
}

function buyScrews() {
  metalPlates -= 1;
  screws += screwRate;
  updateMetalPlateDisplay();
  updateScrewDisplay();
}

function addEmoji(emoji) {
  const emojiSpan = document.createElement('span');
  emojiSpan.innerText = emoji;
  document.getElementById('upgrades').appendChild(emojiSpan);
}
