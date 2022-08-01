function revealWords(words, text) {
  let wordsArr = words.split(", ");
  let textArr = text.split(" ");
  for (let searchedWord of wordsArr) {
    for (let word of textArr) {
      if (word.includes("*") && searchedWord.length === word.length) {
        text = text.replace(word, searchedWord);
      }
    }
  }
  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
