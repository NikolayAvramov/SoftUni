function addressBook(input) {
  let obj = {};
  for (let el of input) {
    let [name, address] = el.split(":");
    obj[name] = address;
  }
  let unsortedKey = Object.keys(obj);

  let sortedKeys = unsortedKey.sort();

  for (let key of sortedKeys) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
