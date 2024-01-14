// script.js

var inventory = []; // Array to store items in the inventory
var gold = 20; // Initial gold amount

function changeContent(destination) {
    hideAll();
    
    var contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';

    switch (destination) {
        case 'store':
            showStore();
            break;
        case 'tavern':
            contentDiv.innerHTML = '<h2>You are in the tavern!</h2>';
            break;
        case 'cityHall':
            contentDiv.innerHTML = '<h2>You are in the city hall!</h2>';
            break;
        default:
            break;
    }
}

function showStore() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h2>Welcome to the store!</h2>' +
                           '<p>Gold: ' + gold + '</p>' +
                           '<button onclick="buyItem(\'Sword\', 10)">Buy Sword (10 gold)</button>' +
                           '<button onclick="buyItem(\'Shield\', 5)">Buy Shield (5 gold)</button>';
}

function buyItem(itemName, cost) {
    if (gold >= cost) {
        // Deduct the cost from gold
        gold -= cost;

        // Add the item to the inventory
        inventory.push(itemName);

        // Show a message indicating the purchase
        alert('You bought a ' + itemName + '!');

        // Update the store view
        showStore();
    } else {
        alert('Not enough gold to buy ' + itemName + '!');
    }
}

function showInventory() {
    hideAll();
    var inventoryDiv = document.getElementById('inventory');
    inventoryDiv.style.display = 'block';

    // Display the items in the inventory
    var itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    for (var i = 0; i < inventory.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = inventory[i];
        itemList.appendChild(listItem);
    }
}

function goBack() {
    hideAll();
    document.getElementById('mainView').style.display = 'block';
}

function hideAll() {
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('inventory').style.display = 'none';
}
