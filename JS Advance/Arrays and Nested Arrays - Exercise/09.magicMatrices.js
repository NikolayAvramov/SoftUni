function magicMatrix(arr) {
	let isEqual = true;

	for (let i = 0; i < arr.length; i++) {
		let currColonSum = 0;
		let testArrSum = arr[0].reduce((acc, num) => {
			return acc + num;
		});
		for (let j = 0; j < arr.length; j++) {
			currColonSum += arr[j][i];
			let currArrSum = arr[i].reduce((acc, num) => {
				return acc + num;
			});
			if (currArrSum !== testArrSum) {
				isEqual = false;
			}
		}
		if (testArrSum !== currColonSum) {
			isEqual = false;
		}
	}
	console.log(isEqual);
}
magicMatrix([
	[5, 5, 6],
	[5, 6, 5],
	[6, 5, 5],
]);
