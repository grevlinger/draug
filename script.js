let oxygenProduction = 0.0000000001;

function waterPlant() {
    oxygenProduction *= 1.05;
    updateOxygenOutput();
    logEvent("You watered the plant.");
}

function updateOxygenOutput() {
    const oxygenOutputElement = document.getElementById("oxygenOutput");
    oxygenOutputElement.textContent = `Oxygen produced: ${oxygenProduction.toFixed(10)} molecules per second`;
}

function logEvent(eventText) {
    const eventLogElement = document.getElementById("eventLog");
    eventLogElement.value += eventText + "\n";
}