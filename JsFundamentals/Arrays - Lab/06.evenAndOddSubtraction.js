function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let nums = Number(arr[i]);
    if (nums % 2 == 0) {
      evenSum += nums;
    } else {
      oddSum += nums;
    }
  }
  console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
