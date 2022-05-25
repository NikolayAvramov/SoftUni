function reverseString(text) {
  let splitString = text.split("");
  let reverseArr = splitString.reverse();
  let joinArr = reverseArr.join("");
  console.log(joinArr);
}
reverseString("hello");
