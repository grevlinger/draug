let gold = 0;
let goldBonus = 1.4; // 40% bonus
let walletLimit = 50; // Opprinnelig lommeboksgrense
let walletCost = 50; // Kostnad for å kjøpe større lommebok
let walletIncrease = 50; // Økning i lommeboksgrense ved kjøp
let goldPerClick = 1; // Gull per klikk
let upgradeCost = 100; // Kostnad for oppgraderingen
let upgradePurchased = false; // Oppgraderingens kjøpsstatus
let shovelCost = 250;
let hasShovel = false;
let inventory = [];
let strengthBonus = 0.6; // 60% bonus på strength
let manualLaborIncome = 3;
let hasShovel = false; // Legg til denne variabelen for å spore om spaden er kjøpt

function makeChoice(choice, additionalText) {
  document.getElementById('storyBox').style.display = 'none';
  document.getElementById('goldButton').style.display = 'block';
  document.getElementById('additionalText').innerHTML = additionalText;
  document.getElementById('buyWalletButton').style.display = 'block';
  document.getElementById('upgradeButton').style.display = hasShovel ? 'none' : 'block'; // Vis "Buy Shovel" kun hvis spaden ikke er kjøpt

  if (choice === 'gainStrength') {
    backgroundChoice = 'strength'; // Rettet skrivefeil
    strengthBonus = 0.6; // Sett styrkebonus til 60%
  } else {
    backgroundChoice = ''; // Tilbakestiller bakgrunnsvalget for andre valg
  }

  if (hasShovel) {
    document.getElementById('buyShovelButton').style.display = 'none'; // Skjuler "Buy Shovel"-knappen hvis spaden er kjøpt
  } else {
    document.getElementById('buyShovelButton').style.display = 'block'; // Vis "Buy Shovel"-knappen hvis spaden ikke er kjøpt
  }

  document.getElementById('manualLaborButton').style.display = 'block'; // Vis alltid "Manual Labor"

  switch (choice) {
    case 'earnGold':
      goldBonus = 1.0; // Ingen styrkebonus for "earnGold"
      document.getElementById('manualLaborButton').style.display = hasShovel ? 'block' : 'none'; // Vis "Manual Labor" kun hvis spaden er kjøpt
      break;
    default:
      goldBonus = 1.0;
      break;
  }
}



function earnGold() {
  if (gold < walletLimit) {
    gold += goldBonus * goldPerClick; // Justert for bonus og oppgradering
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

function buyUpgrade() {
  if (gold >= upgradeCost && !upgradePurchased) {
    gold -= upgradeCost;
    goldPerClick += 1; // Øker gull per klikk etter kjøpet av oppgraderingen
    upgradePurchased = true;
    updateGoldCounter();
    document.getElementById('upgradeButton').style.display = 'none'; // Skjuler oppgraderingsknappen etter kjøpet
  } else {
    alert("Du har ikke nok gull eller har allerede kjøpt oppgraderingen!");
  }
}

function buyShovel() {
  if (gold >= shovelCost && !hasShovel) {
    gold -= shovelCost;
    hasShovel = true;
    inventory.push("Shovel");
    updateGoldCounter();
    document.getElementById('buyShovelButton').style.display = 'none'; // Skjuler "Buy Shovel"-knappen etter kjøpet
    showInventory();
  } else {
    alert("Du har ikke nok gull eller har allerede kjøpt spaden!");
  }
}


function showInventory() {
  document.getElementById('inventoryBox').style.display = 'block';
  document.getElementById('manualLaborButton').style.display = 'block';
  document.getElementById('inventoryContent').innerText = "Inventory:\n" + inventory.join("\n");
}

function manualLabor() {
  if (hasShovel) {
    let goldEarned = manualLaborIncome * ((backgroundChoice === 'strenght') ? (strengthBonus + 0.6) : 1); // Justert for styrkebonus
    gold += goldEarned;
    if (gold > walletLimit) {
      gold = walletLimit; // Begrens gullet til lommeboksgrensen
    }
    updateGoldCounter();
  }
}
function fillWallet() {
  gold = walletLimit;
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/${walletLimit} (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%)`;
}


function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/${walletLimit} (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%) - Gold per Click: ${goldPerClick}`;
  document.getElementById('inventoryContent').innerText = "Inventory:\n" + inventory.join("\n");
}
