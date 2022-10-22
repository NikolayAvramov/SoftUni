function largestNum(a, b, c) {
	let numArr = [a, b, c];
	numArr.sort((a, b) => a - b);
	let number = numArr.pop();
	console.log(`The largest number is ${number}.`);
}
largestNum(5, -3, 16);
