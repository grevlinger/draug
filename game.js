let score = 0;

function incrementScore() {
    score++;
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}
