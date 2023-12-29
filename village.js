let population = parseInt(localStorage.getItem('population')) || 0;
let resources = parseInt(localStorage.getItem('resources')) || 0;
let buildingLevel = parseInt(localStorage.getItem('buildingLevel')) || 1;
let residentCounter = 0;
let houseCounter = 0;

const populationElement = document.getElementById('population');
const residentCountElement = document.getElementById('resident-count');
const houseCountElement = document.getElementById('house-count');
const addResidentButton = document.getElementById('add-resident');
const collectResourcesButton = document.getElementById('collect-resources');
const upgradeBuildingButton = document.getElementById('upgrade-building');
const restartGameButton = document.getElementById('restart-game');
const residentIconsContainer = document.getElementById('resident-icons');

addResidentButton.addEventListener('click', addResident);
collectResourcesButton.addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);
restartGameButton.addEventListener('click', restartGame);

updatePopulation();
updateResidentCount();
updateHouseCount();
updateResources();
createResidentIcons();

// Add resident event handler
function addResident() {
    population++;
    residentCounter++;
    updatePopulation();
    updateResidentCount();
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

// Restart game event handler
function restartGame() {
    // Reset all game data
    population = 0;
    resources = 0;
    buildingLevel = 1;
    residentCounter = 0;
    houseCounter = 0;
    // Clear resident icons
    residentIconsContainer.innerHTML = '';
    // Update UI
    updatePopulation();
    updateResidentCount();
    updateHouseCount();
    updateResources();
}

// Update population on the UI
function updatePopulation() {
    populationElement.textContent = `Befolkning: ${population}`;
    // Save data to local storage
    localStorage.setItem('population', population);
}

// Update resident count on the UI
function updateResidentCount() {
    residentCountElement.textContent = `Landsbybeboere: ${residentCounter}`;
}

// Update house count on the UI
function updateHouseCount() {
    houseCountElement.textContent = `Bolighus: ${houseCounter}`;
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
    if (residentCounter >= 10) {
        // Transform the last 10 residents into a house
        for (let i = 0; i < 10; i++) {
            const residentIcon = residentIconsContainer.lastChild;
            residentIconsContainer.removeChild(residentIcon);
        }
        createHouseIcon();
        residentCounter = 0;
    }
}

// Create a house icon
function createHouseIcon() {
    const houseIcon = document.createElement('div');
    houseIcon.className = 'house-icon';
    houseIcon.innerHTML = '🏠'; // Emoji icon for house
    residentIconsContainer.appendChild(houseIcon);
    houseCounter++;
    updateHouseCount();
}
