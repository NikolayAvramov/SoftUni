function stringCounting(text, searchedWords) {
  let arrFromText = text.split(" ");
  let counter = 0;
  for (let word of arrFromText) {
    if (word === searchedWords) {
      counter++;
    }
  }
  console.log(counter);
}
stringCounting("This is a word and it also is a sentence", "is");
