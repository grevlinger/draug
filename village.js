let population = parseInt(localStorage.getItem('population')) || 0;
let resources = parseInt(localStorage.getItem('resources')) || 0;
let buildingLevel = parseInt(localStorage.getItem('buildingLevel')) || 1;

const populationElement = document.getElementById('population');
const addResidentButton = document.getElementById('add-resident');
const collectResourcesButton = document.getElementById('collect-resources');
const upgradeBuildingButton = document.getElementById('upgrade-building');
const residentIconsContainer = document.getElementById('resident-icons');

addResidentButton.addEventListener('click', addResident);
collectResourcesButton.addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);

updatePopulation();
updateResources();
createResidentIcons();

// Add resident event handler
function addResident() {
    population++;
    updatePopulation();
    createResidentIcon();
    checkForHouseTransformation();
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
        checkForHouseTransformation();
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
    residentIcon.innerHTML = '👨'; // Emoji icon for man
    residentIconsContainer.appendChild(residentIcon);
}

// Create resident icons based on current population
function createResidentIcons() {
    for (let i = 0; i < population; i++) {
        createResidentIcon();
        checkForHouseTransformation();
    }
}

// Check for house transformation
function checkForHouseTransformation() {
    const residentIcons = document.querySelectorAll('.resident-icon');
    if (residentIcons.length >= 10) {
        // Transform the last 10 residents into a house
        for (let i = 0; i < 10; i++) {
            const residentIcon = residentIcons[i];
            residentIcon.innerHTML = '🏠'; // Emoji icon for house
        }
    }
}
