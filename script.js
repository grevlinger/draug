let income = 0;

function generateIncome() {
    income += 1; // Increment income on each click. You can adjust this based on your game balance.
    updateIncomeDisplay();
}

function updateIncomeDisplay() {
    document.getElementById('income-display').innerText = '$' + income;
}

// Additional JavaScript logic for inventory, shop, upgrades, etc. can be added here.
// Remember to adjust the HTML and CSS accordingly.
