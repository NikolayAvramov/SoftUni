function nonDecreasingSubset(arr) {
  let currBigest = 0;
  let printArr = [];
  for (let el of arr) {
    if (currBigest <= el) {
      currBigest = el;
      printArr.push(currBigest);
    }
  }
  console.log(printArr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
