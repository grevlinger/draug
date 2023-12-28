let score = parseInt(localStorage.getItem('score')) || 0;

function incrementScore() {
    score++;
    updateScore();
    saveScore();
}

function resetScore() {
    score = 0;
    updateScore();
    saveScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

function saveScore() {
    // Lagre poengsummen i lokal lagring
    localStorage.setItem('score', score.toString());
}

// Kall updateScore() ved oppstart for å vise eksisterende poengsum
updateScore();
