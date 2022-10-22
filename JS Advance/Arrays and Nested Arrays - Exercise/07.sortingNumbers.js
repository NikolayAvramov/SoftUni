function sortingNum(arr) {
	let sorted = arr.sort((a, b) => a - b);
	let result = [];
	let length = arr.length / 2;
	for (let i = 0; i < length; i++) {
		let first = sorted.shift();
		let second = sorted.pop();
		result.push(first);
		result.push(second);
	}
	return result;
}
sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
