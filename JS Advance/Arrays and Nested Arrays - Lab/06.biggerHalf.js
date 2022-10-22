function bigestHalf(arr) {
	let k = Math.ceil(-arr.length / 2);
	let result = arr.sort((a, b) => a - b).slice(Math.floor(-arr.length / 2));
	return result;
}
bigestHalf([4, 7, 2, 5]);
bigestHalf([3, 19, 14, 7, 2, 19, 6]);
