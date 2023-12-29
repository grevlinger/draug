let population = 0;
let resources = 0;
let buildingLevel = 1;

const populationElement = document.getElementById('population');
const addResidentButton = document.getElementById('add-resident');
const collectResourcesButton = document.getElementById('collect-resources');
const upgradeBuildingButton = document.getElementById('upgrade-building');
const residentIconsContainer = document.getElementById('resident-icons');

addResidentButton.addEventListener('click', addResident);
collectResourcesButton.addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);

// Load data from local storage
population = parseInt(localStorage.getItem('population')) || 0;
resources = parseInt(localStorage.getItem('resources')) || 0;
buildingLevel = parseInt(localStorage.getItem('buildingLevel')) || 1;

updatePopulation();
updateResources();

// Add resident event handler
function addResident() {
    population++;
    updatePopulation();
    createResidentIcon();
}

// Collect resources event handler
function collectResources() {
    resources += population * buildingLevel;
    updateResources();
}

// Upgrade building event handler
function upgradeBuilding() {
    if (resources >= buildingLevel * 10) {
        resources -= buildingLevel * 10;
        buildingLevel++;
        updateResources();
    } else {
        alert("Ikke nok ressurser for å oppgradere bygningen.");
    }
}

// Update population on the UI
function updatePopulation() {
    populationElement.textContent = `Befolkning: ${population}`;
    // Save data to local storage
    localStorage.setItem('population', population);
}

// Update resources on the UI
function updateResources() {
    // Implement UI update based on your design
    // Save data to local storage
    localStorage.setItem('resources', resources);
    localStorage.setItem('buildingLevel', buildingLevel);
}

// Create a resident icon
function createResidentIcon() {
    const residentIcon = document.createElement('div');
    residentIcon.className = 'resident-icon';
    residentIconsContainer.appendChild(residentIcon);
}
