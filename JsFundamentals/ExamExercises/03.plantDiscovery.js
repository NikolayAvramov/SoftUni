function plantDiscovery(input) {
  let plantNum = input.shift();
  let res = {};

  for (let i = 0; i < plantNum; i++) {
    let [plant, rarity] = input.shift().split('<->');
    rarity = Number(rarity);
    res[plant] = {};
    (res[plant].Rarity = rarity),
      (res[plant].Rating = 0),
      (res[plant].count = 0);
  }
  let line = input.shift();
  while (line != 'Exhibition') {
    line = line.split(': ');
    let action = line.shift();
    let comand = line[0].split(' - ');
    let plantName = comand[0];
    let parameter = Number(comand[1]);

    if (action == 'Rate') {
      if (res.hasOwnProperty(plantName)) {
        parameter = Number(parameter);
        res[plantName].Rating += parameter;
        res[plantName].count += 1;
      } else {
        console.log('error');
      }
    } else if (action == 'Update') {
      if (res.hasOwnProperty(plantName)) {
        res[plantName].Rarity = parameter;
      } else {
        console.log('error');
      }
    } else if (action == 'Reset') {
      if (res.hasOwnProperty(plantName)) {
        res[plantName].Rating = 0;
        res[plantName].count = 0;
      } else {
        console.log('error');
      }
    }
    line = input.shift();
  }
  console.log(`Plants for the exhibition:`);
  for (let key in res) {
    let avgRate = 0;
    if (res[key].Rating == 0) {
      avgRate = 0;
    } else {
      avgRate = res[key].Rating / res[key].count;
    }
    console.log(
      `- ${[key]}; Rarity: ${res[key].Rarity}; Rating: ${avgRate.toFixed(2)}`
    );
  }
}

plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);
