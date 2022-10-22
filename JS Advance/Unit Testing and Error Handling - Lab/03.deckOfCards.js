function deckOfCard(arr) {
	let result = [];
	for (let card of arr) {
		let convertArr = card.split("");
		let suit = convertArr.pop();
		let face = convertArr.join("");

		function createCard(face, suit) {
			let validSuit = ["S", "D", "H", "C"];
			let validFaces = [
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"J",
				"Q",
				"K",
				"A",
			];
			if (!validFaces.includes(face) || !validSuit.includes(suit)) {
				console.log(`Invalid card: ${face}${suit}`);
			} else {
				switch (suit) {
					case "S":
						suit = "\u2660";
						break;
					case "H":
						suit = "\u2665";
						break;
					case "D":
						suit = "\u2666";
						break;
					case "C":
						suit = "\u2663";
						break;
				}
				return `${face}${suit}`;
			}
		}

		result.push(createCard(face, suit));
	}
	console.log(result.join(" "));
}
deckOfCard(["5S", "3D", "QD", "2e"]);
