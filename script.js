document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const waterButton = document.getElementById("water-button");
    const evolutionOptions = document.getElementById("evolution-options");
    const happinessText = document.getElementById("happiness-text");

    let happinessPercentage = 0;

    waterButton.addEventListener("click", function () {
        if (happinessPercentage < 100) {
            happinessPercentage += 1;
            updateProgressBar();
            updateHappinessText();
        }

        if (happinessPercentage === 100) {
            showEvolutionOptions();
        }
    });

    function updateProgressBar() {
        progressBar.style.width = happinessPercentage + "%";
    }

    function updateHappinessText() {
        if (happinessPercentage === 0) {
            happinessText.textContent = "My plant does not look happy. I think it needs water";
        } else if (happinessPercentage >= 1 && happinessPercentage <= 20) {
            happinessText.textContent = "The plant is starting to feel better.";
        } else if (happinessPercentage > 20 && happinessPercentage <= 40) {
            happinessText.textContent = "The plant is getting happier!";
        } else if (happinessPercentage > 40 && happinessPercentage <= 60) {
            happinessText.textContent = "Your plant is quite content now.";
        } else if (happinessPercentage > 60 && happinessPercentage <= 80) {
            happinessText.textContent = "The plant is really happy!";
        } else if (happinessPercentage > 80 && happinessPercentage < 100) {
            happinessText.textContent = "Your plant is thriving!";
        }
    }

    function showEvolutionOptions() {
        evolutionOptions.classList.remove("hidden");
        happinessText.textContent = "Omg, the plant is about to evolve! What should I choose?";
    }

    // Initially hide the evolution options
    evolutionOptions.classList.add("hidden");

    // Set initial happiness text
    updateHappinessText();
});