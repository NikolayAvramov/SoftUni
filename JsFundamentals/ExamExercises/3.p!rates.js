function pirates(input) {
  let res = {};
  let line = input.shift();
  while (line !== 'Sail') {
    let [city, population, gold] = line.split('||');

    if (!res.hasOwnProperty(city)) {
      res[city] = {};
      (res[city].population = population), (res[city].gold = gold);
    } else {
      let oldPopulation = Number(res[city].population);
      let oldGold = Number(res[city].gold);
      let newPopolation = Number(population) + oldPopulation;
      let newGold = Number(gold) + oldGold;
      res[city].population = newPopolation;
      res[city].gold = newGold;
    }
    line = input.shift();
  }
  line = input.shift();
  while (line !== 'End') {
    let [comand, town, paramOne, paramTwo] = line.split('=>');
    switch (comand) {
      case 'Plunder':
        let people = paramOne;
        let gold = paramTwo;
        let newPopulation = Number(res[town].population) - Number(people);
        res[town].population = newPopulation;
        let newGold = Number(res[town].gold) - Number(gold);
        res[town].gold = newGold;

        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        if (res[town].population == 0 || res[town].gold == 0) {
          console.log(`${town} has been wiped off the map!`);
          delete res[town];
        }
        break;
      case 'Prosper':
        let addingGold = Number(paramOne);
        if (addingGold < 0) {
          console.log(`Gold added cannot be a negative number!`);
        } else {
          //is possibe to  check is res has town

          res[town].gold = Number(res[town].gold) + addingGold;
          console.log(
            `${addingGold} gold added to the city treasury. ${town} now has ${res[town].gold} gold.`
          );
        }
        break;
    }

    line = input.shift();
  }
  let townCount = Array.from(Object.entries(res));
  if (townCount.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${townCount.length} wealthy settlements to go to:`
    );
    for (let key in res) {
      console.log(
        `${key} -> Population: ${res[key].population} citizens, Gold: ${res[key].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);

console.log(`-------------------`);

pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
