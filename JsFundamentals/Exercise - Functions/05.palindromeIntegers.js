function palindromIntegers(arr) {
  let isPalindrome = false;
  for (let element of arr) {
    let numAsString = element.toString();
    let reversedNum = numAsString.split("").reverse().join("");
    if (numAsString == reversedNum) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
    console.log(isPalindrome);
  }
}
palindromIntegers([123, 323, 421, 121]);
palindromIntegers([32, 2, 232, 1010]);
