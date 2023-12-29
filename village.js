let population = parseInt(localStorage.getItem('population')) || 0;
let houseCount = parseInt(localStorage.getItem('houseCount')) || 0;
let villageCount = parseInt(localStorage.getItem('villageCount')) || 0;

const populationElement = document.getElementById('population');
const houseCountElement = document.getElementById('house-count');
const villageCountElement = document.getElementById('village-count');
const addResidentButton = document.getElementById('add-resident');
const collectResourcesButton = document.getElementById('collect-resources');
const upgradeBuildingButton = document.getElementById('upgrade-building');
const restartGameButton = document.getElementById('restart-game');

addResidentButton.addEventListener('click', addResident);
collectResourcesButton.addEventListener('click', collectResources);
upgradeBuildingButton.addEventListener('click', upgradeBuilding);
restartGameButton.addEventListener('click', restartGame);

updatePopulation();
updateHouseCount();
updateVillageCount();

function addResident() {
    population++;
    updatePopulation();
    if (population % 10 === 0) {
        // Every tenth resident generates a house
        houseCount++;
        updateHouseCount();
        if (houseCount % 10 === 0) {
            // Every tenth house forms a village
            villageCount++;
            updateVillageCount();
        }
    }
}

function collectResources() {
    // Implement resource collection logic based on your design
}

function upgradeBuilding() {
    // Implement building upgrade logic based on your design
}

function restartGame() {
    population = 0;
    houseCount = 0;
    villageCount = 0;
    updatePopulation();
    updateHouseCount();
    updateVillageCount();
}

function updatePopulation() {
    populationElement.textContent = `Befolkning: ${population}`;
    localStorage.setItem('population', population);
}

function updateHouseCount() {
    houseCountElement.textContent = `Bolighus: ${houseCount}`;
    localStorage.setItem('houseCount', houseCount);
}

function updateVillageCount() {
    villageCountElement.textContent = `Landsbyer: ${villageCount}`;
    localStorage.setItem('villageCount', villageCount);
}
