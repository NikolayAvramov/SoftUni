function hashTags(input) {
  let textArr = input.split(" ");
  let resArr = [];
  for (let word of textArr) {
    if (word.startsWith("#") && word.length > 1) {
      resArr.push(word);
    }
  }
  for (let hashTag of resArr) {
    let res = "";
    let testWords = hashTag.toLowerCase();
    for (let i = 1; i < hashTag.length; i++) {
      if (testWords.charCodeAt(i) > 96 && testWords.charCodeAt(i) < 123) {
        res += hashTag[i];
      }
    }
    if (hashTag.length - 1 == res.length) {
      console.log(res);
    }
  }
}
hashTags("Nowadays everyone uses # to tag a #special word in #socialMedia");
