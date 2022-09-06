function hodwarts(input) {
  let text = input.shift();
  let isDone = false;
  for (let line of input) {
    let [command, paramOne, paramTwo] = line.split(' ');
    if (command == 'Abracadabra') {
      break;
    }
    switch (command) {
      case 'Abracadabra':
        isDone = true;
        break;
      case 'Abjuration':
        text = text.toUpperCase();
        console.log(text);
        break;
      case 'Necromancy':
        text = text.toLowerCase();
        console.log(text);
        break;
      case 'Illusion':
        let index = Number(paramOne);
        let letter = paramTwo;
        if (index < text.length && index >= 0) {
          let firstPart = text.slice(0, index);
          let secPart = text.slice(index + 1);
          text = firstPart + letter + secPart;
          console.log(`Done!`);
        } else {
          console.log(`The spell was too weak.`);
        }
        break;
      case 'Divination':
        let firstString = paramOne;
        let secondString = paramTwo;
        if (text.includes(firstString)) {
          text = text.split(firstString).join(secondString);
          console.log(text);
        }
        break;
      case 'Alteration':
        let substring = paramOne;
        if (text.includes(substring)) {
          text = text.replace(substring, '');
          console.log(text);
        }
        break;
      default:
        console.log(`The spell did not work!`);
    }
    if (isDone) {
      break;
    }
  }
}

hodwarts([
  'SwordMaster',
  'Target Target Target',
  'Abjuration',
  'Necromancy',
  'Alteration master',
  'Abracadabra',
]);
