let score = 0;

// Hent lagret poengsum ved oppstart
if (localStorage.getItem('score')) {
    score = parseInt(localStorage.getItem('score'), 10);
    updateScore();
}

function incrementScore() {
    score++;
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
