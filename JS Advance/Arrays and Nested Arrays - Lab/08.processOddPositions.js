function processOddPosition(arr) {
	let result = [];
	arr.forEach((x, index) => {
		if (index % 2 !== 0) {
			result.push(x * 2);
		}
	});
	result.reverse();
	return result.join(" ");
}
processOddPosition([10, 15, 20, 25]);
