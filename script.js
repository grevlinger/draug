document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const waterButton = document.getElementById("water-button");
    const evolutionOptions = document.getElementById("evolution-options");
    const happinessText = document.getElementById("happiness-text");
    const passiveIncomeDiv = document.getElementById("passive-income");
    const evolutionText = document.getElementById("evolution-text");
    const evolutionImage = document.getElementById("evolution-image");
    const manaCounter = document.getElementById("mana-counter");

    let happinessPercentage = 0;
    let passiveIncome = 0.00001;

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
            happinessText.textContent = "My plant does not look happy. I think it needs water.";
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
    }

    // Event listener for Evolution 1 button
    document.getElementById("evolution1").addEventListener("click", function () {
        evolveToManaPlant();
    });

    function evolveToManaPlant() {
        evolutionOptions.classList.add("hidden");
        passiveIncomeDiv.classList.remove("hidden");

        evolutionText.textContent = "My house plant evolved into a Mana Plant. It seems it produces mana...";
        evolutionImage.src = "IMG_0447.webp"; // Replace with the actual file path of the new image

        // Start passive income for Mana Plant
        setInterval(function () {
            passiveIncome += 0.00001;
            updateManaCounter();
        }, 1000);
    }

    function updateManaCounter() {
        manaCounter.textContent = passiveIncome.toFixed(5);
    }
});