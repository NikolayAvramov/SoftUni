volCalc(
	area,
	vol,
	`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`
);
function volCalc(areaFunc, volFunc, input) {
	input = JSON.parse(input);
	let resArr = [];
	for (let el of input) {
		let currObj = {
			area: areaFunc.call(el),
			volume: volFunc.call(el),
		};
		resArr.push(currObj);
	}
	return resArr;
}
function area() {
	return Math.abs(this.x * this.y);
}
function vol() {
	return Math.abs(this.x * this.y * this.z);
}
