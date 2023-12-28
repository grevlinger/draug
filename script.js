// Funksjoner for å håndtere spillet

// ... (tidligere kode)

// Enkel brukerdatabase
function saveUser(username, score) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Oppdater eller legg til brukeren med ny score
  let existingUserIndex = users.findIndex(user => user.username === username);
  if (existingUserIndex !== -1) {
    users[existingUserIndex].score = score;
  } else {
    users.push({ username, score });
  }

  localStorage.setItem("users", JSON.stringify(users));
}

// Hent og vis brukernavn og poengscore
function displayUserScores() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Sorter brukerne etter poengscore i synkende rekkefølge
  users.sort((a, b) => b.score - a.score);

  // Oppdater listen i HTML
  let userListElement = document.getElementById("user-list");
  userListElement.innerHTML = "";
  users.forEach(user => {
    let listItem = document.createElement("li");
    listItem.textContent = `${user.username}: ${user.score} poeng`;
    userListElement.appendChild(listItem);
  });
}

// ...

// Oppdater poengscoren og vis oppdatert liste
function updateScoreAndDisplay() {
  saveUser(username, sausageCount);
  displayUserScores();
}

// ...

// Initialiser UI
updateUI();
displayUserScores();
