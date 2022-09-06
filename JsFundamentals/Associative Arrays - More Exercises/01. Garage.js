function garage(input) {
  let garage = {};

  for (let line of input) {
    let [garageNum, carInfo] = line.split(' - ');
    let nameOfGarage = `Garage № ${garageNum}`;

    if (!garage.hasOwnProperty(nameOfGarage)) {
      garage[nameOfGarage] = [];
    }
    carInfo = carInfo.split(':').join(' -');
    garage[nameOfGarage].push(carInfo);
  }

  for (let key in garage) {
    console.log(key);
    let garageArr = garage[key];
    garageArr.forEach(element => {
      console.log(`--- ${element}`);
    });
  }
}
garage([
  '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
