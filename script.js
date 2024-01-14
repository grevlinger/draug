function changeContent(destination) {
    hideAll();
    
    var contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';

    // Dynamically set the content based on the destination
    switch (destination) {
        case 'store':
            contentDiv.innerHTML = '<h2>You are in the store!</h2>';
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

function goBack() {
    hideAll();
    document.getElementById('mainView').style.display = 'block';
}

function hideAll() {
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}
