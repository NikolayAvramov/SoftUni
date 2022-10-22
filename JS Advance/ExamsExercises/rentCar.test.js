const {expect} = require("chai");
const rentCar = require("./rentCar");
describe("Tests", () => {
	describe("searchCar", () => {
		it("happy path", () => {
			expect(
				rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")
			).to.equal(`There is 1 car of model Audi in the catalog!`);
		});
		it("no match", () => {
			expect(() => {
				rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Mercedes");
			}).to.throw();
		});
		it("Invalid input", () => {
			expect(() => {
				rentCar.searchCar("dfgfd", "rdgre");
			}).to.throw();
			expect(() => {
				rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5);
			}).to.throw();
			expect(() => {
				rentCar.searchCar(5, 5);
			}).to.throw();
		});
	});
	describe("calcuatePriceOfCar", () => {
		it("happy path", () => {
			expect(rentCar.calculatePriceOfCar("BMW", 3)).to.equal(
				`You choose BMW and it will cost $135!`
			);
		});
		it("No such model in catalog", () => {
			expect(() => {
				rentCar.calculatePriceOfCar("Skoda", 3);
			}).to.throw();
		});
		it("Invalid input", () => {
			expect(() => {
				rentCar.calculatePriceOfCar(4, 4);
			}).to.throw();
			expect(() => {
				rentCar.calculatePriceOfCar(4, "4");
			}).to.throw();
			expect(() => {
				rentCar.calculatePriceOfCar("BMW", "4");
			}).to.throw();
		});
	});
	describe("checkBudget", () => {
		it("happy path and edge case", () => {
			expect(rentCar.checkBudget(1, 1, 1)).to.equal(`You rent a car!`);
			expect(rentCar.checkBudget(1, 1, 2)).to.equal(`You rent a car!`);
		});
		it("not enought money", () => {
			expect(rentCar.checkBudget(2, 1, 1)).to.equal(
				`You need a bigger budget!`
			);
		});
		it("Invalid input", () => {
			expect(() => {
				rentCar.checkBudget("10", 1, 2);
			}).to.throw();
			expect(() => {
				rentCar.checkBudget(1, "2", 2);
			}).to.throw();
			expect(() => {
				rentCar.checkBudget(1, 2, "10");
			}).to.throw();
			expect(() => {
				rentCar.checkBudget("10", "1", "2");
			}).to.throw();
		});
	});
});
