function addAndSubtract(numOne, numTwo, numThree) {
  let sum = (numOne, numTwo) => numOne + numTwo;
  let subtract = (sumFirstandSecond, numThree) => sumFirstandSecond - numThree;

  let sumFirstandSecond = sum(numOne, numTwo);
  let finalResult = subtract(sumFirstandSecond, numThree);
  console.log(finalResult);
}
addAndSubtract(23, 6, 10);
