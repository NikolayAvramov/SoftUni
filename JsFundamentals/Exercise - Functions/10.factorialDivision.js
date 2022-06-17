function factoialDivision(numOne, numTwo) {
  let resultOne = numOne;
  let resultTwo = numTwo;
  for (let i = 1; i < numOne; i++) {
    resultOne *= numOne - i;
  }

  for (let i = 1; i < numTwo; i++) {
    resultTwo *= numTwo - i;
  }

  resultOne /= resultTwo;
  return resultOne.toFixed(2);
}
console.log(factoialDivision(5, 2));
