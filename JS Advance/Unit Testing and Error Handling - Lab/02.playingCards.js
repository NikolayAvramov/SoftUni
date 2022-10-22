function facroryFunc(face, suit) {
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
	if (!validFaces.includes(face)) {
		throw new Error("Error");
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
		return {
			face,
			suit,
			toString: function () {
				return `${face}${suit}`;
			},
		};
	}
}
console.log(facroryFunc("A", "S"));
