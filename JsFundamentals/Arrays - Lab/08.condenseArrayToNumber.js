function condenseArrayToNumber(nums) {
  let result = 0;
  let condensed = [];
  let counter = nums.length;
  if (nums.length > 1) {
    while (counter != 0) {
      for (let i = 0; i < counter - 1; i++) {
        result = Number(nums[i]) + Number(nums[i + 1]);
        condensed.push(result);
      }
      nums = condensed;
      condensed = [];
      counter--;
    }
  } else {
    result = nums[0];
  }

  console.log(result);
}
condenseArrayToNumber([5, 5, 5]);
