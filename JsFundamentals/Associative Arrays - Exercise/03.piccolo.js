function piccolo(input) {
  let parking = new Map();
  for (let line of input) {
    let [comand, carNum] = line.split(', ');

    switch (comand) {
      case 'IN':
        parking.set(carNum);
        break;
      case 'OUT':
        parking.delete(carNum);
        break;
    }
  }
  let sorted = Array.from(parking).sort();
  if (sorted.length > 0) {
    for (let car of sorted) {
      console.log(car[0]);
    }
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
piccolo([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);
console.log(`---------------`);
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
