function arrayManipulation(arr) {
  let resultArr = arr.shift().split(" ").map(Number);
  for (let el of arr) {
    let comand = el.split(" ");
    let action = comand.shift();
    switch (action) {
      case "Add":
        let numToAdd = Number(comand.shift());
        resultArr.push(numToAdd);
        break;
      case "Remove":
        let numToRemove = Number(comand.shift());
        for (let i = 0; i < resultArr.length; i++) {
          if (resultArr[i] == numToRemove) {
            resultArr.splice(i, 1);
          }
        }
        break;
      case "RemoveAt":
        let indexToRemove = Number(comand.shift());
        resultArr.splice(indexToRemove, 1);
        break;
      case "Insert":
        let NumToInsert = Number(comand.shift());
        let indexToInsert = Number(comand.shift());
        resultArr.splice(indexToInsert, 0, NumToInsert);
        break;
    }
  }
  console.log(resultArr.join(" "));
}
arrayManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
