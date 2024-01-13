let gold = 0;
let goldBonus = 1.4; // 40% bonus
let walletLimit = 50; // Opprinnelig lommeboksgrense
let walletCost = 50; // Kostnad for å kjøpe større lommebok
let walletIncrease = 50; // Økning i lommeboksgrense ved kjøp


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
  if (gold >= walletCost) {
    gold -= walletCost;
    walletLimit += walletIncrease; // Øker lommeboksgrense
    updateGoldCounter();
  } else {
    alert("Du har ikke nok gull til å kjøpe en større lommebok!");
  }
}

function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/${walletLimit} (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%)`;
}


