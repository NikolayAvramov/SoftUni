function replaceRepeatedChar(input) {
  let arr = input.split("");
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      continue;
    } else {
      resArr.push(arr[i]);
    }
  }
  console.log(resArr.join(""));
}
replaceRepeatedChar("qqqwerqwecccwd");
