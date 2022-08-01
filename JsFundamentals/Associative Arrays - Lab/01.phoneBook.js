function phoneBook(data) {
  let res = {};
  for (let el of data) {
    let [name, phoneNumber] = el.split(" ");
    res[name] = phoneNumber;
  }
   for (let key in res) {
     console.log(`${key} -> ${res[key]}`);
   }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
