let oxygen = 0.0001;
let co2 = 0.0001;
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

    // Increase oxygen production and CO2 absorption by 1% with each watering
    oxygen *= 1.01;
    co2 *= 1.01;

    updateDisplay();
}

// Automated oxygen and CO2 production every second
setInterval(function () {
    oxygen += plantLevel;

    // Passive CO2 absorption
    co2 -= waterCount * 0.0001;
    oxygen += waterCount * 0.00005;

    updateDisplay();
}, 1000);