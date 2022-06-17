function addAndSubstract(arr) {
  let newArr = [];
  let oldArrSum = 0;
  let newArrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    oldArrSum += arr[i];
    if (arr[i] % 2 == 0) {
      newArrSum += arr[i] + i;
      newArr.push(arr[i] + i);
    } else {
      newArrSum += arr[i] - i;
      newArr.push(arr[i] - i);
    }
  }
  console.log(newArr);
  console.log(oldArrSum);
  console.log(newArrSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
