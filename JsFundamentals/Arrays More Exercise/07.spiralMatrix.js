function solve(row, col) {
  let result = [];
  let counter = 1;
  let isDone = false;
  let currRow = 0;
  let lastRow = row - 1;
  let currColon = 0;
  let lastColon = col - 1;

  for (let i = 0; i < row; i++) {
    result.push([]);
  }
  while (!isDone) {
    for (let a = currColon; a <= lastColon; a++) {
      result[currRow][a] = counter;
      counter++;
    }
    if (counter > row * col) {
      break;
    }
    currRow++;
    for (let b = currRow; b <= lastRow; b++) {
      result[b][lastColon] = counter;
      counter++;
    }
    lastColon--;
    for (let c = lastColon; c >= currColon; c--) {
      result[lastRow][c] = counter;
      counter++;
    }
    lastRow--;
    for (let d = lastRow; d >= currRow; d--) {
      result[d][currColon] = counter;
      counter++;
    }
    currColon++;
  }
  for (let el of result) {
    console.log(el.join(' '));
  }
}

solve(5, 5);
