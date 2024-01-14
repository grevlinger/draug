let coins = 0;
let purse = 0;
let inventory = [];
const maxInventoryCapacity = 10;

document.getElementById('apple-btn').addEventListener('click', generateApples);
document.getElementById('sell-btn').addEventListener('click', sellApples);

function generateApples() {
  if (inventory.length < maxInventoryCapacity) {
    inventory.push('apple');
    updateInventory();
  }
}

function sellApples() {
  if (inventory.length > 0) {
    coins += inventory.length;
    purse += inventory.length;
    inventory = [];
    updateCoins();
    updatePurse();
    updateInventory();
  }
}

function updateCoins() {
  document.getElementById('coins').innerText = coins;
}

function updatePurse() {
  document.getElementById('purse').innerText = purse;
}

function updateInventory() {
  const inventoryContainer = document.getElementById('inventory');
  inventoryContainer.innerHTML = '<h2>Inventory</h2>';
  
  for (let i = 0; i < maxInventoryCapacity; i++) {
    const item = inventory[i] ? inventory[i] : '-';
    const itemDiv = document.createElement('div');
    itemDiv.innerText = item;
    inventoryContainer.appendChild(itemDiv);
  }

  document.getElementById('apple-btn').innerText = `Generate Apples (${inventory.length}/${maxInventoryCapacity})`;
}
