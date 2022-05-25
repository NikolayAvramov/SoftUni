function distanceBetweenPoints(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  let result = Math.sqrt(a * a + b * b);
  console.log(result);
}
distanceBetweenPoints(2, 4, 5, 0);
