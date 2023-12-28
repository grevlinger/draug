let username = prompt("Skriv inn brukernavn:") || "spiller";
let sausageCount = 0;
let sausagesPerSec = 0;
let sausageStandCost = 10;
let sausageStandCount = 0;

function updateUI() {
  document.getElementById("username").innerText = username;
  document.getElementById("sausage-count").innerText = sausageCount;
  document.getElementById("sausage-per-sec").innerText = sausagesPerSec;
}

function buySausageStand() {
  if (sausageCount >= sausageStandCost) {
    sausageCount -= sausageStandCost;
    sausageStandCount++;
    sausageStandCost *= 2;
    sausagesPerSec += 1;
    updateUI();
    saveGameData();
    alert("Gratulerer! Du har kjøpt en pølsestand.");
    startProducingSausages();
  } else {
    alert("Du har ikke nok pølser for å kjøpe en pølsestand.");
  }
}

function startProducingSausages() {
  setInterval(function () {
    sausageCount += sausagesPerSec;
    updateUI();
    saveGameData();
  }, 1000); // Oppdater hvert sekund
}

function saveGameData() {
  let gameData = {
    username: username,
    sausageCount: sausageCount,
    sausagesPerSec: sausagesPerSec,
    sausageStandCost: sausageStandCost,
    sausageStandCount: sausageStandCount
  };

  localStorage.setItem("gameData", JSON.stringify(gameData));
}

function loadGameData() {
  let savedData = localStorage.getItem("gameData");

  if (savedData) {
    let gameData = JSON.parse(savedData);
    username = gameData.username;
    sausageCount = gameData.sausageCount;
    sausagesPerSec = gameData.sausagesPerSec;
    sausageStandCost = gameData.sausageStandCost;
    sausageStandCount = gameData.sausageStandCount;
    updateUI();
    startProducingSausages();
  } else {
    updateUI();
  }
}

// Last inn tidligere lagrede data ved lasting av siden
loadGameData();
