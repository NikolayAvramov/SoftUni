function counterStrike(input) {
  let energy = input.shift();
  let index = 0;
  let distance = input[index];
  let wonGame = 0;
  while (energy - distance >= 0 && distance != "End of battle") {
    energy -= distance;
    wonGame++;
    if (wonGame % 3 == 0) {
      energy += wonGame;
    }
    index++;
    distance = input[index];
  }
  if (distance == "End of battle") {
    console.log(`Won battles: ${wonGame}. Energy left: ${energy}`);
  } else {
    console.log(
      `Not enough energy! Game ends with ${wonGame} won battles and ${energy} energy`
    );
  }
}
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
