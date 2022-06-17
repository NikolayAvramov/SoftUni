function printNthElement(arr) {
  let nthStep = Number(arr.pop());
  let newArr = [];
  for (let i = 0; i < arr.length; i += nthStep) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}
printNthElement(["dsa", "asd", "test", "test", "2"]);
