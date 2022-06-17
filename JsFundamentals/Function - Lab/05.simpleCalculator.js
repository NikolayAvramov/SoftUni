function calc(x, y, operator) {
  let res = 0;
  switch (operator) {
    case "multiply":
      res = x * y;
      break;
    case "divide":
      res = x / y;
      break;
    case "add":
      res = x + y;
      break;
    case "subtract":
      res = x - y;
      break;
  }
  console.log(res);
}
calc(5, 5, "multiply");
