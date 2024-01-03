let oxygen = 0;
let co2 = 0;
let clickValue = 1;
let plantLevel = 1;
let waterCount = 0;

function updateDisplay() {
    document.getElementById('oxygen').textContent = oxygen;
    document.getElementById('co2').textContent = co2;
}

function waterPlant() {
    waterCount++;
    clickValue += waterCount;
    co2 -= waterCount;
    oxygen += Math.ceil(waterCount / 2);
    updateDisplay();
}

// Automated oxygen and CO2 production every second
setInterval(function () {
    oxygen += plantLevel;

    // Passive CO2 consumption
    if (waterCount > 0) {
        co2 -= waterCount;
        oxygen += Math.ceil(waterCount / 2);
    }

    updateDisplay();
}, 1000);