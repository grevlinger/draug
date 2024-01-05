document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const waterButton = document.getElementById("water-button");
    const evolutionOptions = document.getElementById("evolution-options");

    let happinessPercentage = 0;

    waterButton.addEventListener("click", function () {
        if (happinessPercentage < 100) {
            happinessPercentage += 1;
            updateProgressBar();
        }

        if (happinessPercentage === 100) {
            showEvolutionOptions();
        }
    });

    function updateProgressBar() {
        progressBar.style.width = happinessPercentage + "%";
    }

    function showEvolutionOptions() {
        evolutionOptions.classList.remove("hidden");
    }

    // Initially hide the evolution options
    evolutionOptions.classList.add("hidden");

    // Add event listeners for evolution buttons and navigate to corresponding pages
    document.getElementById("evolution1").addEventListener("click", function () {
        window.location.href = "evolution1-page.html";
    });

    document.getElementById("evolution2").addEventListener("click", function () {
        window.location.href = "evolution2-page.html";
    });

    document.getElementById("evolution3").addEventListener("click", function () {
        window.location.href = "evolution3-page.html";
    });

    document.getElementById("evolution4").addEventListener("click", function () {
        window.location.href = "evolution4-page.html";
    });
});