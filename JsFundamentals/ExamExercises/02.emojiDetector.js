function emojiDetector(input) {
  let emodjiPattern = /([:]{2}|[*]{2})[A-Z]([a-z]+){2,}\1/g;
  let digitsPattern = /\d/gm;
  let coolThreshold = 1;
  let match = emodjiPattern.exec(input);
  let res = new Map();
  let emojiWithExtensionArr = [];

  while (match !== null) {
    let emojiWithExtension = match[0];
    emojiWithExtensionArr.push(emojiWithExtension);
    match = emodjiPattern.exec(input);
  }

  let digitsMatch = digitsPattern.exec(input);
  while (digitsMatch !== null) {
    let digits = Number(digitsMatch[0]);
    coolThreshold *= digits;
    digitsMatch = digitsPattern.exec(input);
  }
  for (let el of emojiWithExtensionArr) {
    let currEmodjiCoolnes = 0;
    for (let i = 2; i < el.length - 2; i++) {
      let addingCoolnes = Number(el[i].charCodeAt());
      currEmodjiCoolnes += addingCoolnes;
    }
    res.set(el, currEmodjiCoolnes);
  }
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(
    `${emojiWithExtensionArr.length} emojis found in the text. The cool ones are:`
  );
  for (let element of res) {
    let emodji = element[0];
    let havingCoolnes = Number(element[1]);
    if (havingCoolnes >= coolThreshold) {
      console.log(emodji);
    }
  }
}
emojiDetector([
  'In the Sofia Zoo there are  animals in total! ::Smiley:: This includes  ,  ::Elephant:, 0 **Monkys**, a **Gorilla::,  ::fox:es: and  different types of :Snak::Es::. ::Mooning:: ::Mooning:: **Shy**',
]);
