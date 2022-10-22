function smallestTwoNum(arr) {
	let result = arr.sort((a, b) => a - b).slice(0, 2);
	console.log(result.join(" "));
}
smallestTwoNum([30, 15, 50, 5]);
