let population = parseInt(localStorage.getItem('population')) || 0;
let resources = parseInt(localStorage.getItem('resources')) || 0;
let buildingLevel = parseInt(localStorage.getItem('buildingLevel')) || 1;
let houseCounter = parseInt(localStorage.getItem('houseCounter')) || 0;
let gold = parseInt(localStorage.getItem('gold')) || 0;

const populationElement = document.getElementById('population');
const houseCountElement = document.getElementById('house-count');
const goldCountElement = document.getElementById('gold-count');
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
updateHouseCount();
updateGold();
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

// Restart game event handler
function restartGame() {
    // Reset all game data
    population = 0;
    resources = 0;
    buildingLevel = 1;
    houseCounter = 0;
    gold = 0;
    // Clear resident icons
    residentIconsContainer.innerHTML = '';
    // Update UI
    updatePopulation();
    updateHouseCount();
    updateGold();
    updateResources();
}

// Update population on the UI
function updatePopulation() {
    populationElement.textContent = `Befolkning: ${population}`;
    // Save data to local storage
    localStorage.setItem('population', population);
}

// Update house count on the UI
function updateHouseCount() {
    houseCountElement.textContent = `Bolighus: ${houseCounter}`;
    // Save data to local storage
    localStorage.setItem('houseCounter', houseCounter);
}

// Update gold count on the UI
function updateGold() {
    goldCountElement.textContent = `Gull: ${gold}`;
    // Save data to local storage
    localStorage.setItem('gold', gold);
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
    if (population >= 10) {
        // Transform the last 10 residents into a house
        for (let i = 0; i < 10; i++) {
            const residentIcon = residentIconsContainer.lastChild;
            residentIconsContainer.removeChild(residentIcon);
        }
        createHouseIcon();
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

    // Start generating passive income from the new house
    setInterval(generatePassiveIncome, 1000);
}

// Generate passive income from each house
function generatePassiveIncome() {
    gold += houseCounter; // Each house generates 1 gold per second
    updateGold();
}
