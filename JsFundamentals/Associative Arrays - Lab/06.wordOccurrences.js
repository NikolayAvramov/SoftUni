function wordOccurrences(input) {
  let result = new Map();
  for (let element of input) {
    if (!result.has(element)) {
      result.set(element, 1);
    } else {
      let oldCount = result.get(element);
      result.set(element, oldCount + 1);
    }
  }
  let sorted = Array.from(result).sort(([wordA, countA], [wordB, countB]) => {
    return countB - countA;
  });
  for (let [word, count] of sorted) {
    console.log(`${word} -> ${count} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
