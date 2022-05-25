function thePiramidOfDjoser(size, increment) {
  let stones = 0;
  let marbles = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let height = 1;

  for (size; size > 2; size -= 2) {
    if (height % 5 == 0) {
      lapisLazuli += (size * 4 - 4) * increment;
    } else {
      marbles += (size * 4 - 4) * increment;
    }
    stones += Math.pow(size - 2, 2) * increment;
    height++;
  }
  if (size <= 2) {
    gold += size * size * increment;
  }

  console.log(`Stone required: ${Math.ceil(stones)}`);
  console.log(`Marble required: ${Math.ceil(marbles)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
thePiramidOfDjoser(11, 1);
thePiramidOfDjoser(11, 0.75);
