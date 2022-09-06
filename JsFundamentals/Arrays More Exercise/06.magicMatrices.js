function magicMatrix(arr) {
  let isEqual = true;

  for (let i = 0; i < arr.length; i++) {
    let currColonSum = 0;
    let testArrSum = arr[0].reduce((a, b) => {
      return a + b;
    });
    for (let j = 0; j < arr.length; j++) {
      currColonSum += arr[j][i];
      let currArrSum = arr[i].reduce((a, b) => {
        return a + b;
      });
      if (currArrSum !== testArrSum) {
        isEqual = false;
      }
    }
    if (testArrSum !== currColonSum) {
      isEqual = false;
    }
  }
  console.log(isEqual);
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [6, 4, 5],
]);
