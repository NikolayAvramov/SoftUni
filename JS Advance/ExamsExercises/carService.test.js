const {assert} = require("chai");
const carService = require("./03. Car Service_Resources");

describe("carServic", () => {
	it("should return mesage if issue = Engine or Transmision", () => {
		let issue = "Engine";
		assert.equal(
			carService.isItExpensive(issue),
			`The issue with the car is more severe and it will cost more money`
		);
	});
	it("should return mesage if issue = Engine or Transmission", () => {
		let issue = "Transmission";
		assert.equal(
			carService.isItExpensive(issue),
			`The issue with the car is more severe and it will cost more money`
		);
	});
	it("should return other mesage if issue != Engine or Transmission", () => {
		let issue = "Lights";
		assert.equal(
			carService.isItExpensive(issue),
			`The overall price will be a bit cheaper`
		);
	});

	it("should return correct message eader if issue == number", () => {
		assert.equal(
			carService.isItExpensive(5),
			`The overall price will be a bit cheaper`
		);
	});
	it("should return Invalid input", () => {
		assert.throws(
			function () {
				carService.discount("dgf", 5);
			},
			Error,
			"Invalid input"
		);
	});
	it("should return Invalid input", () => {
		assert.throws(
			function () {
				carService.discount(5, "dgf");
			},
			Error,
			"Invalid input"
		);
	});
	it("should return correct answear with 5,5", () => {
		assert.equal(
			carService.discount(5, 5),
			"Discount applied! You saved 0.75$"
		);
	});
	it("should return correct answear with 9,5", () => {
		assert.equal(
			carService.discount(9, 5),
			"Discount applied! You saved 1.5$"
		);
	});
	it("should return You cannot apply a discoun twith 1,5", () => {
		assert.equal(carService.discount(1, 5), "You cannot apply a discount");
	});
	it("should return Invalid input", () => {
		assert.throws(
			function () {
				carService.partsToBuy("dgf", ["blowoff valve", "injectors"]);
			},
			Error,
			"Invalid input"
		);
	});
	it("should return Invalid input", () => {
		assert.throws(
			function () {
				carService.partsToBuy(["blowoff valve", "injectors"], "dgf");
			},
			Error,
			"Invalid input"
		);
	});
	it("should return 0 if partsCatalog is empty", () => {
		assert.equal(carService.partsToBuy([], [{}, {}]), 0);
	});
	it("should return correct answear if input is valid", () => {
		assert.equal(
			carService.partsToBuy(
				[
					{part: "blowoff valve", price: 145},
					{part: "coil springs", price: 230},
				],
				["blowoff valve", "injectors"]
			),
			145
		);
	});
});
