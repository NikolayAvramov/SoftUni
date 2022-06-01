function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let nums = Number(arr[i]);
    if (nums % 2 == 0) {
      sum += nums;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
