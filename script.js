let gold = 0;

function makeChoice(choice) {
  // Handle different choices and update skills accordingly
  switch (choice) {
    case 'earnGold':
      // Show the gold button and additional text box, and hide the story box
      document.getElementById('storyBox').style.display = 'none';
      document.getElementById('goldButton').style.display = 'block';
      document.getElementById('additionalText').innerText = "You reach a nearby village. You only have the clothes you stand in, and a small wallet in your pocket. You are forced to beg for money.";
      break;
    // Add more cases for other choices
    case 'gainStrength':
      document.getElementById('storyBox').style.display = 'none';
      document.getElementById('goldButton').style.display = 'block';
      document.getElementById('additionalText').innerText = "You come from a long lineage of warriors and fighters. Rigorous physical training is something you knew from a very young age. (40% bonus to physical traits)";
      break;
    case 'enhanceIntelligence':
      document.getElementById('storyBox').style.display = 'none';
      document.getElementById('goldButton').style.display = 'block';
      document.getElementById('additionalText').innerText = "Your mother made the floor wash themselves, and your father could make objects float in the air. (40% bonus to magical traits)";
      break;
    case 'increaseSpeed':
      document.getElementById('storyBox').style.display = 'none';
      document.getElementById('goldButton').style.display = 'block';
      document.getElementById('additionalText').innerText = "Your mother and father had nothing, and you had to steal to not starve. Sneaking into other people's houses and stealing their properties was a necessary evil. (40% bonus to dexterity)";
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
