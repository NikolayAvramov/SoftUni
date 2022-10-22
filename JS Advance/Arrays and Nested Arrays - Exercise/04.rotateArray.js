function rotationArr(arr, rotation) {
	for (let i = 0; i < rotation; i++) {
		let lastEl = arr.pop();
		arr.unshift(lastEl);
	}
	return arr.join(" ");
}
rotationArr(["1", "2", "3", "4"], 2);
console.log(rotationArr(["Banana", "Orange", "Coconut", "Apple"], 15));
