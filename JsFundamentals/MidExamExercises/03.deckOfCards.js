function deckOfCards(input) {
  let deck = input.shift().split(", ");
  let numOfComand = Number(input.shift());
  for (let i = 0; i < numOfComand; i++) {
    let lineOfComands = input.shift().split(", ");
    let comand = lineOfComands.shift();
    switch (comand) {
      case "Add":
        let card = lineOfComands.shift();
        if (deck.includes(card)) {
          console.log(`Card is already in the deck`);
        } else {
          deck.push(card);
          console.log(`Card successfully added`);
        }
        break;
      case "Remove":
        let cardToRemove = lineOfComands.shift();
        if (deck.includes(cardToRemove)) {
          for (let c = 0; c < deck.length; c++) {
            if (deck[c] === cardToRemove) {
              deck.splice(c, 1);
            }
          }
          console.log(`Card successfully removed`);
        } else {
          console.log(`Card not found`);
        }

        break;
      case "Remove At":
        let indexToRemove = lineOfComands.shift();
        if (indexToRemove < 0 || indexToRemove > deck.length - 1) {
          console.log(`Index out of range`);
        } else {
          deck.splice(indexToRemove, 1);
          console.log(`Card successfully removed`);
        }
        break;
      case "Insert":
        let indexToInsert = Number(lineOfComands.shift());
        if (indexToInsert < 0 || indexToInsert > deck.length - 1) {
          console.log(`Index out of range`);
        } else {
          let cardToInsert = lineOfComands.shift();
          if (deck.includes(cardToInsert)) {
            console.log(`Card is already added`);
          } else {
            deck.splice(indexToInsert, 0, cardToInsert);
            console.log(`Card successfully added`);
          }
        }
        break;
    }
  }
  console.log(deck.join(", "));
}
deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, -1",
]);
