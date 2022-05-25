function solve(num) {
  let printLine = "";
  for (let i = 1; i <= num; i++) {
    for (let r = 1; r <= i; r++) {
      if (r <= i) {
        printLine += i + " ";
      }
    }
    console.log(printLine);
    printLine = "";
  }
}
solve(5);
