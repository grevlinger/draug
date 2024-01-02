let gold = 0;
let goldPerClick = 1;
let goldPerSecond = 0;
let passiveIncomeInterval;

function updateGoldDisplay() {
  document.getElementById('gold').innerText = gold;
}

function clickButton() {
  gold += goldPerClick;
  updateGoldDisplay();
}

function buyUpgrade(upgrade) {
  switch (upgrade) {
    case 'house':
      if (gold >= 20) {
        gold -= 20;
        goldPerSecond += 1;
        updateGoldDisplay();
        addEmoji('🏠');
        if (!passiveIncomeInterval) {
          passiveIncomeInterval = setInterval(function() {
            gold += goldPerSecond;
            updateGoldDisplay();
          }, 1000);
        }
      } else {
        alert('Not enough gold to buy a house!');
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

// Additional functions for handling passive income and upgrades can be added here.
