function negativeOrPositiveNum(arr) {
  let resultArr = [];
  for (let el of arr) {
    if (el < 0) {
      resultArr.unshift(el);
    } else {
      resultArr.push(el);
    }
  }
  console.log(resultArr.join("\n"));
}
negativeOrPositiveNum(["7", "-2", "8", "9"]);
