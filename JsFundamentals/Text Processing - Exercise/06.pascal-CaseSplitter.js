function texSpliter(text) {
  let arr = text.split("");
  let resArr = [];
  let currWord = "";

  for (let i = 0; i < arr.length; i++) {
    let testChar = arr[i].toUpperCase();
    if (testChar == arr[i]) {
      resArr.push(currWord);
      currWord = "";
      currWord += arr[i];
    } else {
      currWord += arr[i];
    }
    if (i == arr.length - 1) {
      resArr.push(currWord);
    }
  }
  resArr.shift();
  console.log(resArr.join(", "));
}
texSpliter("SplitMeIfYouCanHaHaYouCantOrYouCan");
