let gold = 0;

function makeChoice(choice) {
  // Handle different choices and update skills accordingly
  switch (choice) {
    case 'earnGold':
      // Show the gold button and hide the story box
      document.getElementById('storyBox').style.display = 'none';
      document.getElementById('goldButton').style.display = 'block';
      break;
    case 'gainStrength':
      // Handle gainStrength choice
      // Implement logic for gaining strength
      break;
    case 'enhanceIntelligence':
      // Handle enhanceIntelligence choice
      // Implement logic for enhancing intelligence
      break;
    case 'increaseSpeed':
      // Handle increaseSpeed choice
      // Implement logic for increasing speed
      break;
  }
}

function earnGold() {
  if (gold < 50) {
    gold += 2; // You can adjust the gold earning rate as needed
    updateGoldCounter();
  } else {
    alert("You have reached the maximum gold limit!");
  }
}

function updateGoldCounter() {
  document.getElementById('goldCounter').innerText = `${gold}/50`;
}
