let income = 0;
let maxGold = 20; // Set your desired maximum gold amount

document.getElementById('steal-button').addEventListener('click', function() {
    generateIncome();
});

function generateIncome() {
    income += 1; // Increment income by 1 on each click
    if (income > maxGold) {
        income = maxGold; // Cap the income to the maximum gold amount
    }
    updateIncomeDisplay();
}

function updateIncomeDisplay() {
    document.getElementById('income-display').innerText = 'Gold:' + income;
}

// Additional JavaScript logic for inventory, shop, upgrades, etc. can be added here.
// Remember to adjust the HTML and CSS accordingly.
