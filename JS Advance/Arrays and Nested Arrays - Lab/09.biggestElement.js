function bigestEl(arr) {
	let buffer = [];
	for (let nums of arr) {
		buffer.push(Math.max(...nums));
	}
	return Math.max(...buffer);
}
console.log(
	bigestEl([
		[20, 50, 10],
		[8, 33, 145],
	])
);
