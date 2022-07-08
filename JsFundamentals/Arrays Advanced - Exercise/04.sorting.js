function sorting(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  let resultArr = [];
  while (sortedArr.length > 0) {
    resultArr.push(sortedArr.shift());
    resultArr.push(sortedArr.pop());
  }
  console.log(resultArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
