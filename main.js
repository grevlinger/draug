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
function resetGame() {
  if (confirm("Are you sure you want to reset the game?")) {
    // Reset game data
    gameData = {
      gold: 0,
      goldPerClick: 1,
      goldPerClickCost: 10
    };

    // Update display
    document.getElementById("goldMined").innerHTML = "0 Gold Mined";
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level 1) Cost: 10 Gold";

    // Save the reset game data to localStorage
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData));
  }
}
