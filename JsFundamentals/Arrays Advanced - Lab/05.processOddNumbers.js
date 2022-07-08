function processOddNum(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArray = [];
    if (i % 2 == 1) {
      currentArray.push(arr[i]);
      resultArr.unshift(currentArray.map((x) => x * 2));
    }
  }
  console.log(resultArr.join(" "));
}
processOddNum([3, 0, 10, 4, 7, 3]);
