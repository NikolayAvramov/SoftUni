function secretChats(input) {
  let mesage = input.shift();
  let line = input.shift();
  while (line !== 'Reveal') {
    let [comand, paramOne, paramTwo] = line.split(':|:');
    switch (comand) {
      case 'InsertSpace':
        let index = Number(paramOne);
        let partOne = mesage.slice(0, index);
        let partTwo = mesage.slice(index);
        mesage = `${partOne} ${partTwo}`;
        console.log(mesage);
        break;
      case 'Reverse':
        let subs = paramOne;
        if (mesage.includes(subs)) {
          mesage = mesage.replace(subs, '');
          subs = subs.split('').reverse().join('');
          mesage = mesage + subs;
          console.log(mesage);
        } else {
          console.log('error');
        }
        break;
      case 'ChangeAll':
        let searchetChar = paramOne;
        let newChar = paramTwo;
        mesage = mesage.split(searchetChar).join(newChar);
        console.log(mesage);
        break;
    }
    line = input.shift();
  }
  console.log(`You have a new text message: ${mesage}`);
}
secretChats([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal',
]);
