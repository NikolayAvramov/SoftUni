function luckyNumbers(input) {
  let num = Number(input[0]);
  let printLine = "";


  for (let a = 1; a < num; a++) {
    for (let b = 1; b < num; b++) {
      for (let c = 1; c < num; c++) {
        for (let d = 1; d < num; d++) {
          if (a + b == c + d && a + b == num) {
            printLine += "" + a + b + c + d + " ";
        }
        }
      }
    }
  }
console.log(`${printLine}`);
}
luckyNumbers([7])
