function censoredWords(text, word) {
  let censor = "*".repeat(word.length);
  text = text.split(`${word}`).join(`${censor}`);

  console.log(text);
}
censoredWords("Find hidden the hidden word", "hidden");
