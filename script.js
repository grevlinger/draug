function goToStore() {
    hideAll();
    document.getElementById('store').style.display = 'block';
}

function goToTavern() {
    hideAll();
    document.getElementById('tavern').style.display = 'block';
}

function goToCityHall() {
    hideAll();
    document.getElementById('cityHall').style.display = 'block';
}

function goBack() {
    hideAll();
    document.getElementById('mainView').style.display = 'block';
}

function hideAll() {
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('store').style.display = 'none';
    document.getElementById('tavern').style.display = 'none';
    document.getElementById('cityHall').style.display = 'none';
