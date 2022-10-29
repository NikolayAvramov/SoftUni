const {expect} = require("chai");
const chooseYourCar = require("./chooseYourCar");

describe("Test", () => {
	describe("choosigType", () => {
		it("happy path and edge case", () => {
			expect(chooseYourCar.choosingType("Sedan", "red", "2010")).to.equal(
				"This red Sedan meets the requirements, that you have."
			);
			expect(chooseYourCar.choosingType("Sedan", "red", "2015")).to.equal(
				"This red Sedan meets the requirements, that you have."
			);
		});
		it("ïf it's old", () => {
			expect(chooseYourCar.choosingType("Sedan", "red", "2009")).to.equal(
				"This Sedan is too old for you, especially with that red color."
			);
		});
		it("wrong type", () => {
			expect(() => {
				chooseYourCar.choosingType("Combi", "red", "2009");
			}).to.throw();
			expect(() => {
				chooseYourCar.choosingType("Combi", "red", "2011");
			}).to.throw();
		});
		it("Invalid Year", () => {
			expect(() => {
				chooseYourCar.choosingType("Sedan", "red", "2023");
			}).to.throw();
			expect(() => {
				chooseYourCar.choosingType("Sedan", "red", "1899");
			}).to.throw();
		});
	});
	describe("brandName", () => {
		it("happy path", () => {
			expect(
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)
			).to.equal("BMW, Toyota");
			expect(
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)
			).to.equal("BMW, Peugeot");
		});
		it("Invalid input", () => {
			expect(() => {
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3);
			}).to.throw();
			expect(() => {
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "4");
			}).to.throw();
			expect(() => {
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1);
			}).to.throw();
			expect(() => {
				chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -3);
			}).to.throw();
			expect(() => {
				chooseYourCar.brandName("435f", 1);
			}).to.throw();
		});
	});
	describe("CarFuelConsumption", () => {
		it("happy path and edge case", () => {
			expect(chooseYourCar.carFuelConsumption(15, 0.9)).to.equal(
				"The car is efficient enough, it burns 6.00 liters/100 km."
			);
			expect(chooseYourCar.carFuelConsumption(15, 1.05)).to.equal(
				"The car is efficient enough, it burns 7.00 liters/100 km."
			);
		});
		it("To much fuel", () => {
			expect(chooseYourCar.carFuelConsumption(15, 1.2)).to.equal(
				"The car burns too much fuel - 8.00 liters!"
			);
		});
		it("Invalid information", () => {
			expect(() => {
				chooseYourCar.carFuelConsumption("4", 4);
			}).to.throw();
			expect(() => {
				chooseYourCar.carFuelConsumption("4", "4");
			}).to.throw();
			expect(() => {
				chooseYourCar.carFuelConsumption(5, "4");
			}).to.throw();
			expect(() => {
				chooseYourCar.carFuelConsumption(-1, 4);
			}).to.throw();
			expect(() => {
				chooseYourCar.carFuelConsumption(5, -1);
			}).to.throw();
		});
	});
});
