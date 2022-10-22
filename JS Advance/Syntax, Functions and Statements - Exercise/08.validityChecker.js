function isValid(x1, y1, x2, y2) {
	let disOne = Math.sqrt(x1 * x1 + y1 * y1);
	let disTwo = Math.sqrt(x2 * x2 + y2 * y2);
	let disThree = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	console.log(
		Number.isInteger(disOne)
			? `{${x1}, ${y1}} to {0, 0} is valid`
			: `{${x1}, ${y1}} to {0, 0} is invalid`
	);
	console.log(
		Number.isInteger(disTwo)
			? `{${x2}, ${y2}} to {0, 0} is valid`
			: `{${x2}, ${y2}} to {0, 0} is invalid`
	);
	console.log(
		Number.isInteger(disThree)
			? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
			: `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
	);
}
isValid(2, 1, 1, 1);
