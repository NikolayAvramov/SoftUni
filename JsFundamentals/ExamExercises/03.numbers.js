function numbers(string) {
  let numsArray = string.split(" ").map(Number);

  let sum = 0;
  for (let el of numsArray) {
    sum += el;
  }
  let average = sum / numsArray.length;
  let filtered = numsArray
    .filter((x) => x > average)
    .sort((a, b) => b - a)
    .slice(0, 5);
  if (filtered.length > 0) {
    console.log(filtered.join(" "));
  } else {
    console.log(`No`);
  }
}
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
