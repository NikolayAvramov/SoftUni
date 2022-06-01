function equalArr(arr1, arr2) {
  let sum = 0;
  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isEqual = false;
      break;
    }
    sum += Number(arr1[i]);
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArr(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
