function sumOfDigits(num) {
  sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = i;
    if (i > 9) {
      i = i.toString();
      sum = Number(i[0]) + Number(i[1]);
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
sumOfDigits(15);
sumOfDigits(20);
