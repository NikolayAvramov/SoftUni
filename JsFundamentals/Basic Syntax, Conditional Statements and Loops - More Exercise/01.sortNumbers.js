function sortNumbers(numOne, numTwo, numThree) {
  let numArray = [numOne, numTwo, numThree];
  numArray = numArray.sort();
  console.log(numArray[2]);
  console.log(numArray[1]);
  console.log(numArray[0]);
}
sortNumbers(1, 2, 3);
