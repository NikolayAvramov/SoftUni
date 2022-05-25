function reverseString(num, arr) {
  let printLine = "";
  for (let i = num - 1; i >= 0; i--) {
    printLine += arr[i] + " ";
  }
  console.log(printLine);
}
reverseString(3, [10, 20, 30, 40, 50]);
