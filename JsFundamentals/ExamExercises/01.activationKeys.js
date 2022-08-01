function activationKey(input) {
  let text = input.shift();
  let line = input.shift();

  while (line !== 'Generate') {
    let [command, param1, param2, param3] = line.split('>>>');
    switch (command) {
      case 'Contains':
        let subs = param1;
        if (text.includes(subs)) {
          console.log(`${text} contains ${subs}`);
        } else {
          console.log(`Substring not found!`);
        }
        break;
      case 'Flip':
        let alphabethComand = param1;
        let startIndex = Number(param2);
        let endIndex = Number(param3);
        let oldSubs = text.substring(startIndex, endIndex);
        let newSubs =
          alphabethComand == 'Upper'
            ? oldSubs.toUpperCase()
            : oldSubs.toLowerCase();
        text = text.replace(oldSubs, newSubs);
        console.log(text);
        break;
      case 'Slice':
        let startIndexToDelete = Number(param1);
        let endIndexToDelete = Number(param2);
        let deletedPart = text.slice(startIndexToDelete, endIndexToDelete);
        text = text.replace(deletedPart, '');
        console.log(text);
        break;
    }
    line = input.shift();
  }
  if (line == 'Generate') {
    console.log(`Your activation key is: ${text}`);
  }
}

activationKey([
  'abcdefghijklmnopqrstuvwxyz',
  'Slice>>>2>>>6',
  'Flip>>>Upper>>>3>>>14',
  'Flip>>>Lower>>>5>>>7',
  'Contains>>>def',
  'Contains>>>deF',
  'Generate',
]);

console.log(`---------`);
activationKey([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate',
]);
