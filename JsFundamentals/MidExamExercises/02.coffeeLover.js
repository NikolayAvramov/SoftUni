function coffeeLover(input) {
  let coffeeListArr = input.shift().split(" ");
  let comandNums = input.shift();
  for (let i = 0; i < comandNums; i++) {
    let lineOfComand = input.shift().split(" ");
    let comand = lineOfComand.shift();

    switch (comand) {
      case "Include":
        let coffee = lineOfComand.shift();

        coffeeListArr.push(coffee);

        break;
      case "Remove":
        let firstOrLastComand = lineOfComand.shift();
        let indexToRemove = Number(lineOfComand.shift());
        if (indexToRemove < coffeeListArr.length) {
          switch (firstOrLastComand) {
            case "first":
              coffeeListArr.splice(0, indexToRemove);
              break;
            case "last":
              coffeeListArr.splice(-indexToRemove);
              break;
          }
        } else {
          continue;
        }
        break;
      case "Prefer":
        let indexOne = Number(lineOfComand.shift());
        let indexTwo = Number(lineOfComand.shift());
        if (
          //posibly indexOne && indexTwo have to be different
          indexOne < 0 ||
          indexOne > coffeeListArr.length - 1 ||
          indexTwo < 0 ||
          indexTwo > coffeeListArr.length - 1
        ) {
          continue;
        } else {
          let swap = coffeeListArr[indexOne];
          coffeeListArr[indexOne] = coffeeListArr[indexTwo];
          coffeeListArr[indexTwo] = swap;
        }
        break;
      case "Reverse":
        coffeeListArr.reverse();
        break;
    }
  }
  console.log(`Coffees:
${coffeeListArr.join(" ")}`);
}
coffeeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);
