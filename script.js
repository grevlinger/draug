function chooseClass(characterClass) {
  var resultContainer = document.getElementById('result');
  var story;

  switch (characterClass) {
    case 'warrior':
      story = "You chose the Warrior class. Armed with a mighty sword, you set out on a journey to vanquish evil.";
      break;
    case 'mage':
      story = "You chose the Mage class. Harnessing the power of arcane magic, you embark on a quest to unravel ancient mysteries.";
      break;
    case 'rogue':
      story = "You chose the Rogue class. Master of stealth and agility, you traverse the shadows to achieve your objectives.";
      break;
    default:
      story = "Invalid choice. Please try again.";
      break;
  }

  resultContainer.innerHTML = `<p>${story}</p>`;
}
