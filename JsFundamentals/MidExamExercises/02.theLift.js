function theLift(arr) {
  let peopleWaiting = Number(arr.shift());
  let liftArr = arr.shift().split(" ").map(Number);
  let maxCapacity = 4;

  for (let i = 0; i < liftArr.length; i++) {
    if (peopleWaiting < 0 && liftArr[liftArr.length - 1] <= maxCapacity) {
      console.log(`The lift has empty spots!\n${liftArr.join(" ")}`);
    } else {
      for (let l = liftArr[i]; l < maxCapacity; l++) {
        if (peopleWaiting < 1) {
          break;
        }
        liftArr[i]++;
        peopleWaiting--;
      }
    }
  }
  if (peopleWaiting > 0) {
    console.log(
      `There isn't enough space! ${peopleWaiting} people in a queue!`
    );
    console.log(`${liftArr.join(" ")}`);
  } else {
    if (liftArr[liftArr.length - 1] == maxCapacity && peopleWaiting == 0) {
      console.log(`${liftArr.join(" ")}`);
    } else {
      console.log(`The lift has empty spots!`);
      console.log(`${liftArr.join(" ")}`);
    }
  }
}
theLift(["16", "0 0 0 0"]);
// console.log(`-------------------`);
// theLift(["20", "0 2 0"]);
