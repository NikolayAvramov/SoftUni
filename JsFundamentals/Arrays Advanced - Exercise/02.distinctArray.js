function distinctArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i].toString();
    if (!newArr.includes(currNum)) {
      newArr.push(currNum);
    }
  }
  console.log(newArr.join(" "));
}
distinctArr([1, 2, 3, 4]);
