function maxNum(arr) {
  let topArr = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let b = arr[j];
      if (a <= b) {
        isTop = false;
      }
    }
    if (isTop) {
      topArr.push(a);
    }
  }

  console.log(topArr.join(" "));
}
// maxNum([27, 19, 42, 2, 13, 45, 48]);
// maxNum([1, 4, 3, 2]);
// maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
