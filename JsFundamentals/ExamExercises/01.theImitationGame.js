function decripting(arr) {
  let mesageForDecode = arr.shift().split("");
  let index = 0;
  let lineOfInput = arr[index];
  while (lineOfInput != "Decode") {
    let arrLineOfInput = lineOfInput.split("|");
    let comand = arrLineOfInput.shift();
    switch (comand) {
      case "Move":
        let haveToMove = Number(arrLineOfInput.shift());

        for (let i = 0; i < haveToMove; i++) {
          mesageForDecode.push(mesageForDecode.shift());
        }
        break;
      case "Insert":
        let indexToAdd = Number(arrLineOfInput[0]);
        mesageForDecode = mesageForDecode.join("");
        let firstPart = mesageForDecode.substring(0, indexToAdd);
        let secondPart = mesageForDecode.substring(indexToAdd);
        let value = arrLineOfInput[1];

        mesageForDecode = firstPart + value + secondPart;
        mesageForDecode = mesageForDecode.split("");

        break;
      case "ChangeAll":
        let letterToChange = arrLineOfInput.shift();
        if (mesageForDecode.includes(letterToChange)) {
          let newLetter = arrLineOfInput.shift();
          for (let j = 0; j < mesageForDecode.length; j++) {
            if (mesageForDecode[j] == letterToChange) {
              mesageForDecode[j] = newLetter;
            }
          }
        } else {
          index++;
          lineOfInput = arr[index];
          continue;
        }
        break;
    }
    index++;
    lineOfInput = arr[index];
  }
  if (lineOfInput == "Decode" && mesageForDecode[0] != undefined) {
    console.log(`The decrypted message is: ${mesageForDecode.join("")}`);
  }
}
decripting(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
