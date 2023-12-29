let population = parseInt(localStorage.getItem('population')) || 0;
let resources = parseInt(localStorage.getItem('resources')) || 0;
let buildingLevel = parseInt(localStorage.getItem('buildingLevel')) || 1;
let houseCounter = parseInt(localStorage.getItem('houseCounter')) || 0;
let gold = parseInt(localStorage.getItem('gold')) || 0;
let upgradeCost = 10; // Initial cost to upgrade house income
let upgradeMultiplier = 2; // Multiplier for increasing upgrade cost

const populationElement = document.getElementById('population');
const houseCountElement = document.getElementById('house-count');
const goldCountElement = document.getElementById('gold-count');
const upgradeBuildingButton = document.getElementById('upgrade-building');

document.getElementById('add-resident').addEventListener('click', addResident);
document.getElementById('collect-resources').addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);
document.getElementById('restart-game').addEventListener('click', restartGame);

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
    if (resources >= upgradeCost) {
        resources -= upgradeCost;
        upgradeHouse();
        updateResources();
    } else {
        alert("Ikke nok ressurser for å oppgradere husleieinntektene.");
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
    upgradeCost = 10;
    // Clear resident icons
    document.getElementById('resident-icons').innerHTML = '';
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
    document.getElementById('resident-icons').appendChild(residentIcon);
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
            const residentIcon = document.querySelector('.resident-icon');
            residentIcon.parentNode.removeChild(residentIcon);
        }
        createHouseIcon();
    }
}

// Create a house icon
function createHouseIcon() {
    const houseIcon = document.createElement('div');
    houseIcon.className = 'house-icon';
    houseIcon.innerHTML = '🏠'; // Emoji icon for house
    document.getElementById('resident-icons').appendChild(houseIcon);
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

// Upgrade house income
function upgradeHouse() {
    houseCounter++; // Add a new house
    upgradeCost = Math.round(upgradeCost * upgradeMultiplier); // Increase the upgrade cost
    updateHouseCount();
    updateGold();
    updateResources();
    updateUpgradeButton();
}

// Update upgrade button text
function updateUpgradeButton() {
    upgradeBuildingButton.textContent = `Oppgrader Bygning (${upgradeCost} ressurser)`;
}
