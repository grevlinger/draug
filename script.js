let gold = 0;

function generateGold() {
    if (gold < 20) {
        gold += 1;
        updateGoldText();
    }

function updateGoldText() {
    document.getElementById("gold").textContent = gold;
}

// Additional functionality can be added as needed.
