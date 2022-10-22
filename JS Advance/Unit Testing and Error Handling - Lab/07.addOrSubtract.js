function createCalculator() {
	let value = 0;
	return {
		add: function (num) {
			value += Number(num);
		},
		subtract: function (num) {
			value -= Number(num);
		},
		get: function () {
			return value;
		},
	};
}
let calc = createCalculator();
calc.add(10);
calc.subtract("7");
let value = calc.get();
console.log(value);
module.exports = {createCalculator};
