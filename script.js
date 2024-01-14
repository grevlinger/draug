
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
