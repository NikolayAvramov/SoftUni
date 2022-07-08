function magicMatrix(arr) {
  let isMagic = false;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].map((x) => {
      return (sum += x);
    });
    if (sum == arr(i[0])) {
      console.log("sdf");
    }
  }
}
magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
