function houseParty(arr) {
  let newList = [];
  for (let i = 0; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    let name = comand.shift();
    if (!Array.from(comand).includes("not")) {
      if (!Array.from(newList).includes(name)) {
        newList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (!Array.from(newList).includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = newList.indexOf(name);
        newList.splice(index, 1);
      }
    }
  }
  console.log(newList.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
