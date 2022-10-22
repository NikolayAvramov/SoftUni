function extracting(arr) {
	let result = [];
	let currentBig = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= currentBig) {
			currentBig = arr[i];
			result.push(currentBig);
		} else {
			continue;
		}
	}
	return result;
}
extracting([1, 3, 8, 4, 10, 12, 3, 2, 24]);
