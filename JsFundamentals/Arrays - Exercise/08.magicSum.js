function magicNum(arr, magicNum) {
  let magicNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let validPair = "";
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == magicNum) {
        validPair = `${arr[i]} ${arr[j]}`;
        //magicNumArr.push(validPair);
        console.log(validPair);
      }
    }
  }
  //console.log(magicNumArr.join("\n"));
}
magicNum([1, 7, 6, 2, 19, 23], 8);
