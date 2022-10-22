function sortNum(arr) {
	let sortedArr = [];
	arr.forEach((num) => {
		if (num < 0) {
			sortedArr.unshift(num);
		} else {
			sortedArr.push(num);
		}
	});
	console.log(sortedArr.join("\n"));
}
sortNum([7, -2, 8, 9]);
