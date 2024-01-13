let gold = 0;
let maxGold = 20;

function generateGold() {
    if (gold < maxGold) {
        gold += 1;
        updateGoldText();
    } else {
        alert("You have reached the maximum gold limit (" + maxGold + ").");
    }
}

function upgradeMaxGold() {
    // Implementer logikken for å kjøpe en oppgradering som øker maksimalt gull
    // For eksempel, du kan legge til en kostnad og sjekke om spilleren har nok penger.
    // Etter oppgraderingen, oppdater maxGold variabelen.
    const upgradeCost = 10; // Eksempelkostnad for oppgradering
    if (gold >= upgradeCost) {
        gold -= upgradeCost;
        maxGold += 10; // Eksempel: Øker maksimalt gull med 10 etter oppgradering
        updateGoldText();
        alert("Upgrade successful! Max Gold is now " + maxGold + ".");
    } else {
        alert("Not enough gold to purchase the upgrade.");
    }
}

function updateGoldText() {
    document.getElementById("gold").textContent = gold;
    document.getElementById("maxGold").textContent = maxGold;
}

// Du kan oppdatere eller legge til ekstra funksjonalitet etter behov.
