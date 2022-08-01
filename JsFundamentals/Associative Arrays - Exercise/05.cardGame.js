function cardGame(input) {
  let result = {};
  let type = { ["S"]: 4, ["H"]: 3, ["D"]: 2, ["C"]: 1 };
  let cardValue = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  for (let line of input) {
    let cardInHand = [];

    let [name, cards] = line.split(": ");
    cards = cards.split(", ");

    if (!result.hasOwnProperty(name)) {
      for (let el of cards) {
        if (!cardInHand.includes(el)) {
          cardInHand.push(el);
        }
      }
      result[name] = cardInHand;
    } else {
      let newCards = result[name];
      for (let el of cards) {
        if (!newCards.includes(el)) {
          newCards.push(el);
        }
      }
      result[name] = newCards;
    }
  }
  let players = Object.entries(result);
  for (let [name, cards] of players) {
    let sum = 0;
    for (let card of cards) {
      card = card.split("");
      let cardType = card.pop();
      let cardName = card.join("");
      sum += cardValue[cardName] * type[cardType];
    }
    result[name] = sum;
    console.log(`${name}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
