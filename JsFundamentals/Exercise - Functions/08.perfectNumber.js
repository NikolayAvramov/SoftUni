function perfectNumber(number) {
  let result = 0;
  let answear = `It's not so perfect.`;
  for (let i = 0; i < number; ++i) {
    if (number % i == 0) {
      result += i;
    }
  }
  if (result === number) {
    answear = `We have a perfect number!`;
  }
  return answear;
}
console.log(perfectNumber(6));
console.log(perfectNumber(1236498));
