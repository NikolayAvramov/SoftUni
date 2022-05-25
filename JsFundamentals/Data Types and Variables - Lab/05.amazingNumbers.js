function amaizingNum(num) {
  let numAsString = String(num);
  let sum = 0;
  let isAmaizing = false;
  for (let index = 0; index < numAsString.length; index++) {
    sum += Number(numAsString[index]);
  }
  let sumAsString = String(sum);
  for (let i = 0; i < sumAsString.length; i++) {
    if (sumAsString[i] == "9") {
      isAmaizing = true;
    }
  }
  console.log(isAmaizing ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amaizingNum(1233);
