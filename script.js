let apples = 0;
let gold = 0;
let maxGold = 20;

function stealApples() {
  if (apples < 10) {
    const stolen = Math.floor(Math.random() * 3) + 1;
    apples += stolen;
    updateInventory();
    document.getElementById('result').innerText = `You successfully stole ${stolen} apples.`;
  } else {
    document.getElementById('result').innerText = "Your inventory is full. Sell some apples to make space.";
  }
}

function sellApples() {
  if (apples > 0) {
    const sold = Math.floor(Math.random() * apples) + 1;
    const earnedGold = sold * 2; // Adjust gold earning logic as needed
    gold += earnedGold;
    apples -= sold;
    updateInventory();
    document.getElementById('result').innerText = `You sold ${sold} apples and earned ${earnedGold} gold.`;
  } else {
    document.getElementById('result').innerText = "You don't have any apples to sell. Steal some first!";
  }
}

function updateInventory() {
  document.getElementById('apple-count').innerText = apples;
  document.getElementById('gold-count').innerText = gold;

  // Check if the player has reached the maximum gold limit
  if (gold >= maxGold) {
    document.getElementById('result').innerText = "You've reached the maximum gold limit!";
    // Optionally, you may want to disable certain actions when the limit is reached
    // For example, disable the "Steal Apples" and "Sell Apples" buttons
    // document.getElementById('steal-btn').disabled = true;
    // document.getElementById('sell-btn').disabled = true;
  }
}
document.addEventListener('dblclick', function(event) {
  event.preventDefault(); // Forhindrer uønsket zooming ved dobbeltklikk
});
