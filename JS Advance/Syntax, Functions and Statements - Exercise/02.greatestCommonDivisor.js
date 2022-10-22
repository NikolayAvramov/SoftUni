function greatestCommonDivisor(a, b) {
	let divisor = 1;
	for (let i = divisor; i < a; i++) {
		if (a % i == 0 && b % i == 0) {
			divisor = i;
		}
	}
	console.log(divisor);
}
greatestCommonDivisor(2154, 458);
