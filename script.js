let gold = 0;
let clickMultiplier = 1;
let passiveIncome = 0;
let passiveIncomeInterval;

function updateDisplay() {
    document.getElementById('output').innerHTML = `
        <p>You have ${gold} gold</p>
        <p>Click Multiplier: ${clickMultiplier}</p>
        <p>Passive Income: ${passiveIncome} gold per second</p>
    `;
}

function clickGold() {
    gold += clickMultiplier;
    updateDisplay();
}

function buyUpgrade(upgradeType) {
    switch (upgradeType) {
        case 'clickUpgrade':
            if (gold >= 10) {
                gold -= 10;
                clickMultiplier++;
                updateDisplay();
            }
            break;
        case 'passiveUpgrade':
            if (gold >= 20) {
                gold -= 20;
                passiveIncome++;
                updateDisplay();
                startPassiveIncome();
            }
            break;
        default:
            break;
    }
}

function startPassiveIncome() {
    if (!passiveIncomeInterval) {
        passiveIncomeInterval = setInterval(function() {
            gold += passiveIncome;
            updateDisplay();
        }, 1000);
    }
}

function resetGame() {
    gold = 0;
    clickMultiplier = 1;
    passiveIncome = 0;
    clearInterval(passiveIncomeInterval);
    passiveIncomeInterval = null;
    updateDisplay();
}

