function matrix(num) {
  for (let i = 0; i < num; i++) {
    let printLineArr = [];
    for (let j = 0; j < num; j++) {
      printLineArr.push(num);
    }
    console.log(printLineArr.join(" "));
  }
}
matrix(3);
