function train(arr) {
  let vagons = arr.shift().split(" ").map(Number);
  let maxCapcity = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    if (comand[0] == "Add") {
      vagons.push(Number(comand[1]));
    } else {
      for (let b = 0; b < vagons.length; b++) {
        if (vagons[b] + Number(comand[0]) <= maxCapcity) {
          vagons[b] = vagons[b] + Number(comand[0]);
          break;
        }
      }
    }
  }
  console.log(vagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
