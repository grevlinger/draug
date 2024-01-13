let counter = 0;

function increaseCounter() {
  if (counter < 20) {
    counter++;
    document.getElementById('counterButton').innerHTML = counter + '/20';
  }
}

document.getElementById('counterButton').addEventListener('click', increaseCounter);
