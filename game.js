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
    console.log('Score reset to 0');
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

function saveScore() {
    localStorage.setItem('score', score.toString());
}

updateScore();

// Legg til en konsollutskrift for å bekrefte at siden lastes inn
console.log('Siden lastes inn');
