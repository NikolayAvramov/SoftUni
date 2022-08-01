function stringSubstring(searchedWord, text) {
  let arr = text.split(" ");
  let notInclde = true;
  for (let el of arr) {
    let testWord = el.toLowerCase();
    if (testWord == searchedWord) {
      notInclde = false;
      return searchedWord;
    }
  }
  if (notInclde) {
    return `${searchedWord} not found!`;
  }
}
console.log(
  stringSubstring("python", "JavaScript is the best programming language")
);
