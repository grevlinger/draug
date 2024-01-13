let gold = 0;
let goldBonus = 1.4; // 40% bonus
let walletLimit = 50; // Opprinnelig lommeboksgrense
let walletCost = 50; // Kostnad for å kjøpe større lommebok
let walletIncrease = 50; // Økning i lommeboksgrense ved kjøp

function makeChoice(choice, additionalText) {
  document.getElementById('storyBox').style.display = 'none';
  document.getElementById('goldButton').style.display = 'block';
  document.getElementById('additionalText').innerHTML = additionalText;
  document.getElementById('buyWalletButton').style.display = 'block';
  
  switch (choice) {
    case 'earnGold':
      goldBonus = 1.4;
      break;
    default:
      goldBonus = 1.0;
      break;
  }
}

function earnGold() {
  if (gold < walletLimit) {
    gold += goldBonus;
    if (gold > walletLimit) {
      gold = walletLimit; // Begrens gullet til lommeboksgrensen
    }
    updateGoldCounter();
  } 
}

function buyWallet() {
  if (gold >= walletCost) {
    gold -= walletCost;
    walletLimit += walletIncrease;
    updateGoldCounter();
  } else {
    alert("Du har ikke nok gull til å kjøpe en større lommebok!");
  }
}

function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/${walletLimit} (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%)`;
}
