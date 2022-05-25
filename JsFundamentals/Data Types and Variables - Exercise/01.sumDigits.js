function sumOfDigits(num) {
  let sum = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  console.log(sum);
}
sumOfDigits(543);
