let oxygen = 0;
let co2 = 0;
let clickValue = 1;
let plantLevel = 1;
let upgradeCost = 10;

function updateDisplay() {
    document.getElementById('oxygen').textContent = oxygen;
    document.getElementById('co2').textContent = co2;
}

function clickPlant() {
    oxygen += clickValue;
    updateDisplay();
}

function upgradePlant() {
    if (oxygen >= upgradeCost) {
        oxygen -= upgradeCost;
        clickValue += plantLevel;
        plantLevel++;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        updateDisplay();
    }
}

// Automated oxygen and CO2 production every second
setInterval(function () {
    oxygen += plantLevel;
    co2 += Math.ceil(plantLevel / 2);
    updateDisplay();
}, 1000);