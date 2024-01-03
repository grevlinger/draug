let oxygenProductionPerClick = 0.0000000001;
let totalOxygenProduced = 0;

function waterPlant() {
    totalOxygenProduced += oxygenProductionPerClick;
    updateOxygenOutput();
    logEvent("You watered the plant.");
}

function updateOxygenOutput() {
    const oxygenOutputElement = document.getElementById("oxygenOutput");
    oxygenOutputElement.textContent = `Total oxygen produced: ${totalOxygenProduced.toExponential(10)} molecules`;
}

function logEvent(eventText) {
    const eventLogElement = document.getElementById("eventLog");
    eventLogElement.value += eventText + "\n";
}