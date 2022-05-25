function solve(startNum, endNum) {
  let printLine = "";
  let result = 0;
  for (let i = startNum; i <= endNum; i++) {
    printLine += i + " ";
    result += i;
  }
  console.log(printLine);
  console.log(`Sum: ${result}`);
}
solve(5, 10);
