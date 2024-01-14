let points = 0;

function incrementPoints() {
  points++;
  updatePointsDisplay();
}

function buyUpgrade(cost, increase) {
  if (points >= cost) {
    points -= cost;
    incrementPointsByValue(increase);
    updatePointsDisplay();
  } else {
    alert("Not enough points to buy this upgrade!");
  }
}

function incrementPointsByValue(value) {
  points += value;
}

function updatePointsDisplay() {
  document.getElementById('points').innerText = points;
}
