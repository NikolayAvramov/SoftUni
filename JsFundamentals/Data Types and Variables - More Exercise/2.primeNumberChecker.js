function primeNumber(num) {
  let isPrime;

  if (num != 2 && num % 2 == 0) {
    isPrime = false;
  } else if (num != 3 && num % 3 == 0) {
    isPrime = false;
  } else {
    isPrime = true;
  }

  console.log(isPrime);
}

primeNumber(2);
primeNumber(3);
primeNumber(9);
