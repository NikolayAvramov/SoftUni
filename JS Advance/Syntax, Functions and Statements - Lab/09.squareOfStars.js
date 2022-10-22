function squareOfStars(n) {
	let repeatedArr = [];
	if (n !== undefined) {
		repeatedArr.length = n;
		repeatedArr.fill("*");
		for (let i = 0; i < n; i++) {
			console.log(repeatedArr.join(" "));
		}
	} else {
		repeatedArr.length = 5;
		repeatedArr.fill("*");
		for (let i = 0; i < n; i++) {
			console.log(repeatedArr.join(" "));
		}
	}
}
squareOfStars(4);
