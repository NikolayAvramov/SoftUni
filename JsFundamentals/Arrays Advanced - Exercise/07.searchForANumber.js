function numSearching(nums, operations) {
  let numsToTake = operations.shift();
  let elementsToDelete = operations.shift();
  let searchedElement = operations.shift();
  let takedFromArr = nums.slice(0, numsToTake);
  let deletedEl = takedFromArr.splice(0, elementsToDelete);
  //console.log(takedFromArr);
  let count = 0;
  for (let i of takedFromArr) {
    if (i == searchedElement) {
      count++;
    }
  }
  console.log(`Number ${searchedElement} occurs ${count} times.`);
}
numSearching([5, 2, 3, 4, 1, 6], [5, 2, 3]);
