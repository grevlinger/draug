let gold = 0;

function generateGold() {
    if (gold < 20) {
        gold += 1;
        updateGoldText();
    } else {
        alert("You have reached the maximum gold limit (20).");
    }
}

function updateGoldText() {
    document.getElementById("gold").textContent = gold;
}

// Additional functionality can be added as needed.
