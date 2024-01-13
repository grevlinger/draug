let gold = 0;
let goldBonus = 1.4; // 40% bonus
let walletLimit = 50; // Opprinnelig lommeboksgrense
let backgroundChoice = ''; // Legg til denne variabelen for å lagre valget av bakgrunn
let strengthBonus = 0.6; // 60% bonus på strength
let manualLaborIncome = 3;
let hasShovel = false; // Legg til denne variabelen for å spore om spaden er kjøpt
let inventory = [];

function makeChoice(choice, additionalText) {
  document.getElementById('storyBox').style.display = 'none';
  document.getElementById('goldButton').style.display = 'block';
  document.getElementById('additionalText').innerHTML = additionalText;
  document.getElementById('buyWalletButton').style.display = 'block';
  document.getElementById('upgradeButton').style.display = hasShovel ? 'none' : 'block'; // Vis "Buy Shovel" kun hvis spaden ikke er kjøpt

  if (choice === 'gainStrength') {
    backgroundChoice = 'strength'; // Sett bakgrunnsvalget til 'strength' når man velger 'gainStrength'
    strengthBonus = 0.6; // Sett styrkebonus til 60%
  } else {
    backgroundChoice = ''; // Tilbakestiller bakgrunnsvalget for andre valg
    strengthBonus = 1.0; // Sett styrkebonus til standardverdien for andre valg
  }

  if (hasShovel) {
    document.getElementById('buyShovelButton').style.display = 'none'; // Skjuler "Buy Shovel"-knappen hvis spaden er kjøpt
  } else {
    document.getElementById('buyShovelButton').style.display = 'block'; // Vis "Buy Shovel"-knappen hvis spaden ikke er kjøpt
  }

  document.getElementById('manualLaborButton').style.display = 'block'; // Vis alltid "Manual Labor"
}

function earnGold() {
  if (gold < walletLimit) {
    gold += goldBonus; // Justert for bonus
    if (gold > walletLimit) {
      gold = walletLimit; // Begrens gullet til lommeboksgrensen
    }
    updateGoldCounter();
  }
}

function buyWallet() {
  if (gold >= 50) {
    gold -= 50;
    walletLimit += 50;
    updateGoldCounter();
  } else {
    alert("Du har ikke nok gull til å kjøpe en større lommebok!");
  }
}

function buyShovel() {
  if (gold >= 250 && !hasShovel) {
    gold -= 250;
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
  document.getElementById('inventoryContent').innerText = "Inventory:\n" + inventory.join("\n");
}

function manualLabor() {
  if (hasShovel) {
    let goldEarned = manualLaborIncome * ((backgroundChoice === 'strength') ? (strengthBonus + 0.6) : 1); // Justert for styrkebonus
    gold += goldEarned;
    if (gold > walletLimit) {
      gold = walletLimit; // Begrens gullet til lommeboksgrensen
    }
    updateGoldCounter();
  }
}

function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold.toFixed(2)}/${walletLimit} (Bonus: ${((goldBonus - 1) * 100).toFixed(0)}%)`;
  document.getElementById('inventoryContent').innerText = "Inventory:\n" + inventory.join("\n");
}
