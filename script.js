let metalPlates = 0;
let screwCount = 0;
let factories = 0;
let screwDuplicators = 0;

function updateResources() {
  document.getElementById('metalPlatesCount').innerText = metalPlates + ' per second';
  document.getElementById('screwCount').innerText = screwCount + ' per second';
  document.getElementById('screwDuplicatorButton').disabled = metalPlates < 100;
}

function produceMetalPlate() {
  metalPlates += 1;
  updateResources();
}

function buyFactory() {
  if (metalPlates >= 10) {
    metalPlates -= 10;
    factories += 1;
    updateResources();
  }
}

function buyScrewDuplicator() {
  if (metalPlates >= 100) {
    metalPlates -= 100;
    screwDuplicators += 1;
    updateResources();
    setInterval(function () {
      screwCount += 10;
      updateResources();
    }, 20000); // Hvert tyvende sekund
  }
}

setInterval(function () {
  metalPlates += factories;
  updateResources();
}, 1000); // Hvert sekund