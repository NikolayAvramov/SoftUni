function pianist(input) {
  let res = {};
  let pieceNum = input.shift();
  for (let i = 0; i < pieceNum; i++) {
    let line = input.shift();
    let [piece, composer, key] = line.split("|");
    if (!res.hasOwnProperty(piece)) {
      res[piece] = [];
      res[piece].push(composer, key);
    }
  }
  let piece = "";
  let composer = "";
  let key = "";
  let index = 0;
  let line = input[index];
  while (line != "Stop") {
    let token = line.split("|");
    let comand = token[0];
    switch (comand) {
      case "Add":
        newPiece = token[1];
        newComposer = token[2];
        newKey = token[3];

        if (!res.hasOwnProperty(newPiece)) {
          res[newPiece] = [];
          res[newPiece].push(newComposer, newKey);
          console.log(
            `${newPiece} by ${newComposer} in ${newKey} added to the collection!`
          );
        } else {
          console.log(`${newPiece} is already in the collection!`);
        }
        break;
      case "Remove":
        newPiece = token[1];
        if (res.hasOwnProperty(newPiece)) {
          delete res[newPiece];
          console.log(`Successfully removed ${newPiece}!`);
        } else {
          console.log(
            `Invalid operation! ${newPiece} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        newPiece = token[1];
        newKey = token[2];
        if (res.hasOwnProperty(newPiece)) {
          res[newPiece].pop(key);
          res[newPiece].push(newKey);
          console.log(`Changed the key of ${newPiece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${newPiece} does not exist in the collection.`
          );
        }

        break;
    }
    index++;
    line = input[index];
  }

  for (let el in res) {
    console.log(`${el} -> Composer: ${res[el][0]}, Key: ${res[el][1]}`);
  }
}
pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
