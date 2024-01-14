var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}
// ... (previous code)

function resetGame() {
  if (confirm("Are you sure you want to reset the game?")) {
    // Clear intervals
    clearInterval(mainGameLoop);
    clearInterval(saveGameLoop);

    // Reset game data
    gameData = {
      gold: 0,
      goldPerClick: 1,
      goldPerClickCost: 10,
      goldPerSecond: 0,
      goldPerSecondCost: 50,
      doubleGoldCost: 100
    };

    // Clear local storage
    localStorage.removeItem("goldMinerSave");

    // Update UI
    document.getElementById("goldMined").innerHTML = "0 Gold Mined";
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Level 1) Cost: 10 Gold";
    document.getElementById("perSecondUpgrade").innerHTML = "Upgrade Mining Rig (Level 1) Cost: 50 Gold";
    document.getElementById("doubleGoldUpgrade").innerHTML = "Double Gold Output Cost: 100 Gold";

    // Restart main game loop and save game loop
    mainGameLoop = window.setInterval(function () {
      mineGold();
    }, 1000);

    saveGameLoop = window.setInterval(function () {
      localStorage.setItem("goldMinerSave", JSON.stringify(gameData));
    }, 15000);
  }
}

// ... (rest of the code)
