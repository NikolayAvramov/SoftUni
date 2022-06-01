function chessBoard(num) {
  let printLine = '<div class="chessboard"> \n';
  let color = "black";
  for (let i = 0; i < num; i++) {
    printLine += "  <div> \n";
    if (i % 2 != 0) {
      color = "white";
    } else {
      color = "black";
    }
    for (let j = 0; j < num; j++) {
      printLine += `    <span class="${color}"></span> \n`;

      if (color == "white") {
        color = "black";
      } else {
        color = "white";
      }
    }

    printLine += "  </div> \n";
  }

  printLine += "</div>";
  console.log(printLine);
}
chessBoard(3);
