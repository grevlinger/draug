let counter = 0;
let gold = 0;

function increaseCounter() {
  if (counter < 20) {
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
  updateInventory('smallWalletItem', 'Medium Wallet');
  document.getElementById('buyMediumWallet').style.display = 'none';
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
