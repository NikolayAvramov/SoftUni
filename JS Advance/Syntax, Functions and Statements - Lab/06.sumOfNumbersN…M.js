function sumOfNumbers(numA, numB) {
	let sum = 0;
	let a = Number(numA);
	let b = Number(numB);
	for (let i = a; i <= b; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumOfNumbers("-8", "20"));
