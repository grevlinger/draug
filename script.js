let gold = 0;
let goldBonus = 1.4; // 40% bonus

function makeChoice(choice, additionalText) {
  // Show the gold button and additional text box, and hide the story box
  document.getElementById('storyBox').style.display = 'none';
  document.getElementById('goldButton').style.display = 'block';
  document.getElementById('additionalText').innerHTML = additionalText;
  document.getElementById('buyWalletButton').style.display = 'block'; // Show the "Buy Larger Wallet" button

  // Set goldBonus based on the choice
  switch (choice) {
    case 'earnGold':
      goldBonus = 1.4; // 40% bonus
      break;
    default:
      goldBonus = 1.0; // No bonus for other choices
      break;
  }
}


function earnGold() {
  if (gold < 50) {
    gold += goldBonus; // Adjusted for bonus
    updateGoldCounter();
  } else {
    alert("You have reached the maximum gold limit!");
  }
}
function buyWallet() {
  if (gold >= 100) {
    gold -= 100;
    goldBonus *= 1.5; // Increase the bonus to 50%
    updateGoldCounter();
  } else {
    alert("You don't have enough gold to buy a larger wallet!");
  }
}
function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/50 (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%)`;
}

