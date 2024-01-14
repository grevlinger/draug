let counter = 0;
let gold = 0;
let maxGold = 20; // Initial max gold value

function increaseCounter() {
  if (counter < maxGold) {
    counter++;
    updateCounterDisplay();
  }
}

function buyItem(item, cost) {
  if (gold >= cost) {
    gold -= cost;
    updateGoldDisplay();
    
    if (item === 'mediumWallet') {
      buyMediumWallet();
    } else if (item === 'smallDagger') {
      buySmallDagger();
    }
  }
}

function buyMediumWallet() {
  maxGold = 50;
  updateInventory('mediumWalletItem', 'Medium Wallet');
  document.getElementById('buyMediumWallet').style.display = 'none';
  updateCounterDisplay(); // Oppdaterer telleren etter kjøp av Medium Wallet
}

function buySmallDagger() {
  updateInventory('smallDaggerItem', 'Small Dagger');
  document.getElementById('buySmallDagger').style.display = 'none';
}

function updateCounterDisplay() {
  document.getElementById('counterButton').innerHTML = counter + '/' + maxGold;
}

function updateGoldDisplay() {
  document.getElementById('goldDisplay').innerHTML = 'Gold: ' + gold;
}

function updateInventory(itemId, itemName) {
  let inventoryList = document.getElementById('inventoryList');
  let newItem = document.createElement('li');
  newItem.textContent = itemName;
  newItem.id = itemId;
  inventoryList.appendChild(newItem);
}

document.getElementById('counterButton').addEventListener('click', increaseCounter);
