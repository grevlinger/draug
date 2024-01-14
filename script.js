let coins = 0;
let purse = 0;
let apples = 0;

document.getElementById('apple-btn').addEventListener('click', generateApples);
document.getElementById('sell-btn').addEventListener('click', sellApples);

function generateApples() {
  apples += 1;
  updateInventory();
}

function sellApples() {
  if (apples > 0) {
    coins += apples;
    purse += apples;
    apples = 0;
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
  document.getElementById('apple-btn').innerText = `Generate Apples (${apples})`;
}
