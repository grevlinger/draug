let population = 0;
let resources = 0;
let buildingLevel = 1;

const populationElement = document.getElementById('population');

const addResidentButton = document.getElementById('add-resident');
const collectResourcesButton = document.getElementById('collect-resources');
const upgradeBuildingButton = document.getElementById('upgrade-building');

addResidentButton.addEventListener('click', addResident);
collectResourcesButton.addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);

function addResident() {
    population++;
    updatePopulation();
}

function collectResources() {
    resources += population * buildingLevel;
    updateResources();
}

function upgradeBuilding() {
    if (resources >= buildingLevel * 10) {
        resources -= buildingLevel * 10;
        buildingLevel++;
        updateResources();
    } else {
        alert("Not enough resources to upgrade the building.");
    }
}

function updatePopulation() {
    populationElement.textContent = `Befolkning: ${population}`;
}

function updateResources() {
    // Update resources on the UI
    // You can implement this based on your UI design
}
