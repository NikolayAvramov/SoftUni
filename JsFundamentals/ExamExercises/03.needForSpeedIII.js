function needForSpeed(data) {
  let obj = {};
  let carNum = data.shift();
  for (let i = 0; i < carNum; i++) {
    let currCar = data.shift().split('|');
    let carName = currCar[0];
    let mileage = Number(currCar[1]);
    let fuel = Number(currCar[2]);
    obj[carName] = {};
    (obj[carName].mileage = mileage), (obj[carName].fuel = fuel);
  }

  let line = data.shift();
  while (line != 'Stop') {
    line = line.split(' : ');
    let comand = line.shift();
    let car = line[0];
    switch (comand) {
      case 'Drive':
        let distance = Number(line[1]);
        let neededFuel = Number(line[2]);
        if (obj[car].fuel - neededFuel >= 0) {
          obj[car].fuel -= neededFuel;
          obj[car].mileage += distance;
          console.log(
            `${car} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
          );
          if (obj[car].mileage > 100000) {
            delete obj[car];
            console.log(`Time to sell the ${car}!`);
          }
        } else {
          console.log(`Not enough fuel to make that ride`);
        }
        break;
      case 'Refuel':
        let fuelToRefil = line[1];
        let refiledFuel = Math.min(75 - obj[car].fuel, fuelToRefil);
        obj[car].fuel += refiledFuel;
        console.log(`${car} refueled with ${refiledFuel} liters`);
        break;
      case 'Revert':
        let revertKm = line[1];
        if (obj[car].mileage - revertKm < 10000) {
          obj[car].mileage = 10000;
        } else {
          console.log(`${car} mileage decreased by ${revertKm} kilometers`);
          obj[car].mileage -= revertKm;
        }
    }

    line = data.shift();
  }
  for (let key in obj) {
    console.log(
      `${key} -> Mileage: ${obj[key].mileage} kms, Fuel in the tank: ${obj[key].fuel} lt.`
    );
  }
}
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop',
]);
