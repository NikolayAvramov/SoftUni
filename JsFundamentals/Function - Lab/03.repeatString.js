function repeatString(str, num) {
  let printLine = "";
  for (let i = 0; i < num; i++) {
    printLine += str;
  }
  console.log(printLine);
}
repeatString("abc", 3);
repeatString("String", 2);
