let oxygen = 0;
let co2 = 0;
let clickValue = 1;
let plantLevel = 1;
let upgradeCost = 10;
let waterCount = 0;

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

function waterPlant() {
    waterCount++;
    clickValue += waterCount;
    updateDisplay();
}

// Automated oxygen and CO2 production every second
setInterval(function () {
    oxygen += plantLevel;
    co2 += Math.ceil(plantLevel / 2);

    // Passive CO2 consumption and O2 production
    if (waterCount > 0) {
        co2 -= waterCount;
        oxygen += Math.ceil(waterCount / 2);
    }

    updateDisplay();
}, 1000);