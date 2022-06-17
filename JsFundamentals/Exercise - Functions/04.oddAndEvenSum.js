function oddAndEvenSum(num) {
  let numAsString = num.toString();
  let evenSum = 0;
  let oddSum = 0;
  for (let el of numAsString) {
    if (Number(el) % 2 == 0) {
      evenSum += Number(el);
    } else {
      oddSum += Number(el);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
