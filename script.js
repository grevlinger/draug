var storyIndex = 0;

function startGame() {
  showStory();
}

function showStory() {
  var storyText = document.getElementById('story-text');
  var choicesContainer = document.getElementById('choices-container');
  var resultContainer = document.getElementById('result');

  var currentScene = story[storyIndex];

  storyText.innerHTML = currentScene.text;

  choicesContainer.innerHTML = "";
  currentScene.choices.forEach(function (choice, index) {
    var button = document.createElement('button');
    button.innerHTML = choice.text;
    button.className = 'choice-button';
    button.onclick = function () {
      makeChoice(index);
    };
    choicesContainer.appendChild(button);
  });

  if (currentScene.result) {
    resultContainer.innerHTML = `<p>${currentScene.result}</p>`;
  } else {
    resultContainer.innerHTML = "";
  }
}

function makeChoice(choiceIndex) {
  var currentScene = story[storyIndex];
  var nextSceneIndex = currentScene.choices[choiceIndex].nextScene;
  storyIndex = nextSceneIndex;
  showStory();
}

var story = [
  {
    text: "Welcome to the Adventure Quest! Choose your character class.",
    choices: [
      { text: "Warrior", nextScene: 1 },
      { text: "Mage", nextScene: 2 },
      { text: "Rogue", nextScene: 3 },
    ],
  },
  {
    text: "You chose the Warrior class. Armed with a mighty sword, you set out on a journey to vanquish evil.",
    result: "Your journey begins...",
  },
  {
    text: "You chose the Mage class. Harnessing the power of arcane magic, you embark on a quest to unravel ancient mysteries.",
    result: "Your magical adventure begins...",
  },
  {
    text: "You chose the Rogue class. Master of stealth and agility, you traverse the shadows to achieve your objectives.",
    result: "Your stealthy journey begins...",
  },
];

startGame();
