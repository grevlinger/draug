// Funksjoner for å håndtere spillet

let username = prompt("Skriv inn brukernavn:");

if (!username) {
  username = "spiller";
}

let sausageCount = 0;
let sausageUpgradeCost = 10;

function updateUI() {
  document.getElementById("username").innerText = username;
  document.getElementById("sausage-count").innerText = sausageCount;
}

function buySausage() {
  sausageCount++;
  updateUI();
}

function upgradeSausage() {
  if (sausageCount >= sausageUpgradeCost) {
    sausageCount -= sausageUpgradeCost;
    sausageUpgradeCost *= 2; // Enkel oppgraderingslogikk
    updateUI();
    alert("Pølsa er oppgradert!");
  } else {
    alert("Du har ikke nok pølser for å oppgradere.");
  }
}

// Lagre brukernavn lokalt
localStorage.setItem("username", username);

// Initialiser UI
updateUI();
