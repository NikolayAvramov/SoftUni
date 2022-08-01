function wordTracker(input) {
  let map = new Map();
  let searchedWords = input.shift().split(' ');
  for (let word of searchedWords) {
    map.set(word, 0);
    for (let currentWord of input) {
      if (word === currentWord) {
        let lastValue = map.get(word);
        map.set(word, lastValue + 1);
      }
    }
  }
  let sorted = Array.from(map).sort(([wordA, valueA], [wordB, valueB]) => {
    return valueB - valueA;
  });
  for (let [word, value] of sorted) {
    console.log(`${word} - ${value}`);
  }
}

wordTracker([
  'is the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'the',
  'And',
  'finally',
  'the',
  'the',
  'sentence',
]);
