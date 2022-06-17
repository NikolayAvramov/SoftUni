function charInRange(startedChar, endingChar) {
  let startedNumChar = startedChar.charCodeAt([0]);
  let endedNumChar = endingChar.charCodeAt([0]);
  if (startedNumChar > endedNumChar) {
    startedNumChar = endingChar.charCodeAt([0]);
    endedNumChar = startedChar.charCodeAt([0]);
  }
  let rangeArray = [];
  for (
    let currNumFromChar = startedNumChar + 1;
    currNumFromChar < endedNumChar;
    currNumFromChar++
  ) {
    let result = String.fromCharCode(currNumFromChar);
    rangeArray.push(result);
  }
  console.log(rangeArray.join(" "));
}
charInRange("a", "d");
charInRange("#", ":");
charInRange("C", "#");
