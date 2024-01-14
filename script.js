let apples = 0;

function stealApples() {
  if (apples < 10) {
    const stolen = Math.floor(Math.random() * 3) + 1;
    apples += stolen;
    document.getElementById('apple-count').innerText = apples;
    document.getElementById('result').innerText = `You successfully stole ${stolen} apples.`;
  } else {
    document.getElementById('result').innerText = "Your inventory is full. Sell some apples to make space.";
  }
}

function sellApples() {
  if (apples > 0) {
    const sold = Math.floor(Math.random() * apples) + 1;
    apples -= sold;
    document.getElementById('apple-count').innerText = apples;
    document.getElementById('result').innerText = `You sold ${sold} apples and earned some gold.`;
  } else {
    document.getElementById('result').innerText = "You don't have any apples to sell. Steal some first!";
  }
}
