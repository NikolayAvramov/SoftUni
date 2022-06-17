function addAndRemove(arr) {
  let newArr = [];
  let increase = 1;
  for (let i = 0; i < arr.length; i++) {
    let comand = arr[i];
    if (comand === "add") {
      newArr.push(increase);
      increase++;
    } else if (comand === "remove") {
      newArr.pop(increase);
      increase++;
    }
  }
  if (newArr.length <= 0) {
    console.log(`Empty`);
  } else {
    console.log(newArr.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove([7]);
