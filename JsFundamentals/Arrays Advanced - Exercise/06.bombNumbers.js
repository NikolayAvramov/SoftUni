function bombNumber(sequenceArr, bombNumAndCertain) {
  let bombNum = bombNumAndCertain[0];
  let certain = bombNumAndCertain[1];
  while (sequenceArr.includes(bombNum)) {
    let index = sequenceArr.indexOf(bombNum);
    let startedIndex = index - certain;
    if (startedIndex < 0) {
      startedIndex = 0;
    }
    let detonation = sequenceArr.splice(startedIndex, certain * 2 + 1);
  }

  let result = 0;
  for (let el of sequenceArr) {
    result += el;
  }
  console.log(result);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 6]);
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
