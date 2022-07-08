function smallestTwoNumber(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let smallestTwoNums = sortedArr.slice(0, 2);
  console.log(smallestTwoNums.join(" "));
}
smallestTwoNumber([3, 0, 10, 4, 7, 3]);
