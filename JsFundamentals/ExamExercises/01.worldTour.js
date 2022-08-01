function worldTour(input) {
  let stops = input.shift();
  let line = input.shift();
  while (line !== 'Travel') {
    let [comand, paramOne, paramTwo] = line.split(':');
    switch (comand) {
      case 'Add Stop':
        let index = Number(paramOne);
        if (index >= 0 && index <= stops.length) {
          let string = paramTwo;
          let firstPart = stops.slice(0, index);
          let secondPart = stops.slice(index);
          stops = firstPart + string + secondPart;
        }
        console.log(stops);
        break;
      case 'Remove Stop':
        let startIndex = Number(paramOne);
        let endIndex = Number(paramTwo);
        if (!stops[startIndex] || !stops[endIndex]) {
          console.log(stops);
          break;
        } else {
          let deletePart = stops.substring(startIndex, endIndex + 1);
          stops = stops.replace(deletePart, '');
          console.log(stops);
        }

        break;
      case 'Switch':
        let oldString = paramOne;
        let newString = paramTwo;
        if (stops.includes(oldString)) {
          stops = stops.split(oldString).join(newString);
        }
        console.log(stops);
        break;
    }
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Hawai',
  'Travel',
]);
console.log(`______________`);
worldTour([
  'Albania:Bulgaria:Cyprus:Deuchland',
  'Add Stop:3:Nigeria',
  'Remove Stop:4:8',
  'Switch:Albania: Azərbaycan',
  'Travel',
]);
