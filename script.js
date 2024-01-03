let oxygen = 0;
let co2 = 0;
let clickValue = 1;
let plantLevel = 1;
let waterCount = 0;

function updateDisplay() {
    document.getElementById('oxygen').textContent = oxygen.toFixed(5);
    document.getElementById('co2').textContent = co2.toFixed(5);
}

function waterPlant() {
    waterCount++;
    clickValue += waterCount;

    // Start passive production and absorption after the first watering
    if (waterCount === 1) {
        oxygen = 0.00001;
        co2 = 0.00001;
    } else {
        // Increase oxygen production and CO2 absorption by 1% with each watering
        oxygen *= 1.01;
        co2 *= 0.99; // Absorption increased, so subtracting a percentage
    }

    updateDisplay();
}

// Automated oxygen and CO2 production every second
setInterval(function () {
    oxygen += plantLevel;

    // Passive CO2 absorption
    co2 -= waterCount * 0.00001;
    oxygen += waterCount * 0.000005;

    updateDisplay();
}, 1000);