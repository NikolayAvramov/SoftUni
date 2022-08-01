function arrModifycator(input) {
  let array = input.shift().split(" ");
  let index = 0;
  let token = input[index].split(" ");
  while (token[0] != "end") {
    let comand = token.shift();
    switch (comand) {
      case "swap":
        let firstIndex = Number(token.shift());
        let secondIndex = Number(token.shift());
        let firstIndexNum = array[firstIndex];
        let secondIndexNum = array[secondIndex];
        let swapingNum = 0;
        swapingNum = firstIndexNum;
        firstIndexNum = secondIndexNum;
        secondIndexNum = swapingNum;
        array[firstIndex] = firstIndexNum;
        array[secondIndex] = secondIndexNum;
        break;
      case "multiply":
        let firstIndexMultiply = Number(token.shift());
        let secondIndexMultiply = Number(token.shift());
        let result = array[firstIndexMultiply] * array[secondIndexMultiply];
        array[firstIndexMultiply] = result;
        break;
      case "decrease":
        array = array.map((x) => x - 1);
        break;
    }
    index++;
    token = input[index].split(" ");
  }
  console.log(array.join(", "));
}
arrModifycator([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
