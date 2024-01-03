let co2 = 0;
let clickValue = 1;
let waterCount = 0;
let totalOxygen = 0;
let level = 1;
let hasStartedPassiveAbsorption = false;

function updateDisplay() {
    document.getElementById('co2').textContent = co2.toFixed(5);
    document.getElementById('totalOxygen').textContent = totalOxygen.toFixed(5);
    document.getElementById('level').textContent = level;
}

function showMessage(text) {
    document.getElementById('message').textContent = text;
}

function waterPlant() {
    waterCount++;
    clickValue += waterCount;

    // Start passive absorption after the first watering
    if (waterCount === 1) {
        co2 = 0.00001;
        hasStartedPassiveAbsorption = true;
        showMessage("It seems that my plant is absorbing CO2");
    } else if (hasStartedPassiveAbsorption) {
        // Increase CO2 absorption by 1% with each watering
        co2 += co2 * 0.01;
    }

    // Calculate total oxygen produced
    totalOxygen += clickValue;

    // Level up every 100 total oxygen produced
    if (totalOxygen % 100 === 0) {
        level++;
        showMessage("Level up! You reached level " + level);
    }

    updateDisplay();
}

// Automated CO2 absorption every second
setInterval(function () {
    if (hasStartedPassiveAbsorption) {
        // Passive CO2 absorption after the first watering
        co2 -= waterCount * 0.00001;
    }

    updateDisplay();
}, 1000);
