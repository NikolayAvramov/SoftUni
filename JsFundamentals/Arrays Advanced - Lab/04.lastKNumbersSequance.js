function lastKNumberSequence(n, k) {
  let theKElementArr = [1];

  for (let i = 0; i < n - 1; i++) {
    let currentSequence = theKElementArr.slice(-k);
    let res = 0;
    for (let j = 0; j < currentSequence.length; j++) {
      res += currentSequence[j];
    }
    theKElementArr.push(res);
  }
  console.log(theKElementArr.join(" "));
}
lastKNumberSequence(8, 2);
