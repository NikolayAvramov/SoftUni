function sumOfOddNum(num) {
  let result = 0;
  let n = 1;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      if (n <= num) {
        console.log(i);
        result += i;
        n++;
      }
    }
  }
  console.log(`Sum: ${result}`);
}
sumOfOddNum(5);
