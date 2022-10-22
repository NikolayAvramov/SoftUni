function aggregateElements(arr) {
	arr = arr.map(Number);
	let firstCalc = 0;
	let secondCalc = 0;
	let thirdCalc = "";
	let arrL = arr.length;
	for (let i = 0; i < arrL; i++) {
		firstCalc += arr[i];
		secondCalc += 1 / arr[i];
		thirdCalc += arr[i];
	}
	console.log(firstCalc);
	console.log(secondCalc);
	console.log(thirdCalc);
}
aggregateElements([1, 2, 3]);
