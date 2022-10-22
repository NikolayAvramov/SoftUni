const {expect} = require("chai");
const {isSymmetric} = require("./05.checkForSymmetry.js");
describe("isSymmetric", () => {
	it("should return true if isSymmetric", () => {
		//Arrage
		let array = [1, 2, 3, 4, 3, 2, 1];

		//Act
		let result = isSymmetric(array);

		//Assert
		expect(result).to.be.true;
	});
	it("should return NaN if input is string", () => {
		//Arrage
		let invalidInput = "1,2,3,4";

		// Act
		let result = isSymmetric(invalidInput);

		//Assert
		expect(result).to.be.false;
	});
	it("should return false if !isSymmetric", () => {
		//Arrage
		let array = [2, 3, 2, 1];

		//Act
		let result = isSymmetric(array);

		//Assert
		expect(result).to.be.false;
	});
	it("should return true if input is empty array", () => {
		//Arrage
		let input = [];

		// Act
		let result = isSymmetric(input);

		//Assert
		expect(result).to.be.true;
	});
	it("should return false if input is an single number arguments", () => {
		//Arrage
		let invalidInput = 3;

		// Act
		let result = isSymmetric(invalidInput);

		//Assert
		expect(result).to.be.false;
	});
	it("should return false if array is with mixed values", () => {
		//Arrage
		let mixedArray = ["1", 2, 3, 2, 1];

		//Act
		let result = isSymmetric(mixedArray);

		//Assert
		expect(result).to.be.false;
	});
});
