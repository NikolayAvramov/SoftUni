const {expect} = require("chai");
const {sum} = require("./04.sumOfNumbers.js");
describe("sum", () => {
	it("should return correct result with array of numbers", () => {
		//Arrage
		let array = [1, 2, 3, 4];

		// Act
		let result = sum(array);

		// Assert
		expect(result).to.be.equal(10);
	});
	it("should return NaN if input in not an array", () => {
		//Arrage
		let invalidInput = "1,2,3,4";

		// Act
		let result = sum(invalidInput);

		//Assert
		expect(result).to.be.NaN;
	});
	it("should return correct result with mixed array", () => {
		//Arrage
		let array = ["1", 2, 3, "4"];

		//Act

		let result = sum(array);

		//Assert
		expect(result).to.be.equal(10);
	});
});
