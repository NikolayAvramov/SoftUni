const {expect} = require("chai");
const {createCalculator} = require("./07.addOrSubtract");

describe("createCalculator", () => {
	let calc;
	it("01 test get value from 0", () => {
		calc = createCalculator();
		let value = calc.get();
		expect(value).to.be.equal(0);
	});
	it("02 adding two times", () => {
		calc = createCalculator();
		calc.add(4);
		calc.add(3);
		let value = calc.get();
		expect(value).to.be.equal(7);
	});
	it("should return NanN for subtarct(string)", () => {
		calc = createCalculator();
		calc.subtract("hello");
		let value = calc.get();
		expect(value).to.be.NaN;
	});
	it("should return 3 after add(10); subtract('7')", () => {
		calc = createCalculator();
		calc.add(10);
		calc.subtract("7");
		let value = calc.get();
		expect(value).to.be.equal(3);
	});
	it("should return 3 after add('10'); subtract('7')", () => {
		calc = createCalculator();
		calc.add("10");
		calc.subtract("7");
		let value = calc.get();
		expect(value).to.be.equal(3);
	});
	it("should return -5 after subtract('5')", () => {
		calc = createCalculator();
		calc.subtract("5");
		let value = calc.get();
		expect(value).to.be.equal(-5);
	});
	it("should return NanN for add(string)", () => {
		calc = createCalculator();
		calc.add("hello");
		let value = calc.get();
		expect(value).to.be.NaN;
	});
	it("should return 4.2 after add(5.3); subtract(1.1);", () => {
		calc = createCalculator();
		calc.add(5.3);
		calc.subtract(1.1);
		let value = calc.get();
		expect(value).to.be.equal(5.3 - 1.1);
	});
});
