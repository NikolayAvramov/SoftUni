function maxSequenseOfEqualSum(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currMaxSequence = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        currMaxSequence.push(arr[i]);
      } else {
        break;
      }
    }
    if (result.length < currMaxSequence.length) {
      result = currMaxSequence;
    }
  }
  console.log(result.join(" "));
}
maxSequenseOfEqualSum([0, 1, 1, 5, 2, 2, 6, 3, 3]);
