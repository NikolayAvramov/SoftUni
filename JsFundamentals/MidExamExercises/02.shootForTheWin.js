function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let index = 0;
  let line = input[index];
  let count = 0;
  while (line != "End") {
    let shotinIndex = Number(line);
    let currShot = targets[shotinIndex];
    if (shotinIndex >= 0 && shotinIndex < targets.length) {
      count++;
      targets[shotinIndex] = -1;
      for (let i = 0; i < targets.length; i++) {
        if (targets[i] != -1) {
          if (targets[i] > currShot) {
            targets[i] -= currShot;
          } else {
            targets[i] += currShot;
          }
        }
      }
    } else {
      index++;
      line = input[index];
      continue;
    }
    index++;
    line = input[index];
  }
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
