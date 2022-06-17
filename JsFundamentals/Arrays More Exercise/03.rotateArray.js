function rotationArr(arr) {
  let rotation = Number(arr.pop());
  for (let i = 0; i < rotation; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}
rotationArr(["1", "2", "3", "4", "2"]);
rotationArr(["Banana", "Orange", "Coconut", "Apple", "15"]);
