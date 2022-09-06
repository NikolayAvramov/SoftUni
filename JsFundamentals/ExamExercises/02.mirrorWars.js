function mirrorWars(input) {
  let text = input[0];
  let arr = [];
  let regEx = /([#@])(?<word>[A-z]{3,})\1{2}(?<word1>[A-z]{3,})\1/gm;
  let test = regEx.test(text);

  if (test) {
    let match = text.match(regEx);
    console.log(`${match.length} word pairs found!`);

    for (let pair of match) {
      let pushedStringInArr = '';
      let partOne = pair.slice(0, pair.length / 2);
      let partTwo = pair.slice(pair.length / 2);
      let testSecWord = partTwo.split('').reverse().join('');
      if (partOne == testSecWord) {
        let wordA = partOne.split('');
        wordA.shift();
        wordA.pop();
        wordA = wordA.join('');
        let wordB = partTwo.split('');
        wordB.shift();
        wordB.pop();
        wordB = wordB.join('');

        pushedStringInArr = `${wordA} <=> ${wordB}`;
        arr.push(pushedStringInArr);
      }
    }
  } else {
    console.log(`No word pairs found!`);
  }
  if (arr.length > 0) {
    console.log(`The mirror words are:`);
    console.log(arr.join(', '));
  } else {
    console.log(`No mirror words!`);
  }
}
mirrorWars([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
