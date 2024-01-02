function selectCharacter(characterClass) {
  const homebase = document.getElementById('homebase');
  const characterSelection = document.getElementById('character-selection');
  const selectedCharacter = document.getElementById('selected-character');

  // Display home base
  homebase.style.display = 'block';
  characterSelection.style.display = 'none';

  // Display selected character
  selectedCharacter.innerHTML = `You selected the ${characterClass} <img src="${characterClass}-emoji.png" alt="${characterClass} Emoji" width="30">.`;
}