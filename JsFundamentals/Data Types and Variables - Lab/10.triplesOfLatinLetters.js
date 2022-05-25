function trippleLettert(num) {
  let printLine = "";
  let alphabeth = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let a = 0; a < num; a++) {
    for (let b = 0; b < num; b++) {
      for (let c = 0; c < num; c++) {
        printLine = alphabeth[a] + alphabeth[b] + alphabeth[c];
        console.log(printLine);
      }
    }
  }
}
trippleLettert(3);
trippleLettert(2);
