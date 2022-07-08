function dictionary(array) {
  let objectArr = [];
  for (let el of array) {
    objectArr.push(JSON.parse(el));
  }

  let sortedKey = [];
  for (let keys of objectArr) {
    let key = Object.keys(keys);
    sortedKey.push(key[0]);
  }
  sortedKey.sort((a, b) => a.localeCompare(b));

  let resObj = {};
  for (let keyWord of sortedKey) {
    for (let el of objectArr) {
      let key = Object.keys(el);
      let value = Object.values(el);
      if (keyWord == key) {
        resObj[keyWord] = value[0];
      }
    }
  }

  for (let key in resObj) {
    console.log(`Term: ${key} => Definition: ${resObj[key]}`);
  }
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Coffee":"ink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
