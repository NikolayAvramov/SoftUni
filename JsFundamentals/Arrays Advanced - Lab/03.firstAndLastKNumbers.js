function firstAndLastKNumber(arr) {
  let numOfK = arr.shift();

  let firstNums = arr.slice(0, Number(numOfK));
  let lastNums = arr.slice(-Number(numOfK));
  console.log(firstNums.join(" "));
  console.log(lastNums.join(" "));
}
firstAndLastKNumber([3, 6, 7, 8, 9]);
