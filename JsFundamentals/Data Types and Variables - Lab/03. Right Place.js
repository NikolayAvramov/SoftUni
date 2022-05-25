function replace(word, char, match) {
  let tempTry = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "_") {
      tempTry += char;
    } else {
      tempTry += word[i];
    }
  }

  console.log(tempTry === match ? "Matched" : "Not Matched");
}
replace("Str_ng", "i", "String");
replace("Str_ng", "I", "String");
