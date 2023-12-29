// Game variables
let score = 0;
let clickValue = 1;
let idleRate = 1;

// DOM elements
const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const idleButton = document.getElementById('idle-button');

// Event listeners
clickButton.addEventListener('click', click);
idleButton.addEventListener('click', startIdle);

// Click event handler
function click() {
    score += clickValue;
    updateScore();
}

// Idle event handler
function startIdle() {
    setInterval(idle, 1000); // 1000 milliseconds = 1 second
}

// Idle logic
function idle() {
    score += idleRate;
    updateScore();
}

// Update score on the UI
function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}
