function printNthEl(arr, step) {
	let result = [];
	arr.forEach((num, index) => {
		if (index % step == 0) {
			result.push(num);
		}
	});
	return result;
}
console.log(printNthEl(["5", "20", "31", "4", "20"], 2));
