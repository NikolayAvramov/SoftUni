const {expect} = require("chai");

const flowerShop = require("./flowerShop");

describe("Tests", () => {
	describe("calcPriceOfFlowers", () => {
		it("happy path", () => {
			expect(flowerShop.calcPriceOfFlowers("rose", 3, 2)).to.equal(
				"You need $6.00 to buy rose!"
			);
		});
		it("Inalid input", () => {
			expect(() => {
				flowerShop.calcPriceOfFlowers("df", "5", "3");
			}).to.throw();
			expect(() => {
				flowerShop.calcPriceOfFlowers("df", 5, "3");
			}).to.throw();
			expect(() => {
				flowerShop.calcPriceOfFlowers("df", "5", 3);
			}).to.throw();
			expect(() => {
				flowerShop.calcPriceOfFlowers(5, 5, 3);
			}).to.throw();
			expect(() => {
				flowerShop.calcPriceOfFlowers(5, "5", "3");
			}).to.throw();
		});
	});
	describe("checkFlowersAvailable", () => {
		it("happy path", () => {
			expect(
				flowerShop.checkFlowersAvailable("Rose", [
					"Rose",
					"Lily",
					"Orchid",
				])
			).to.equal(`The Rose are available!`);
		});
		it("flowers is sold", () => {
			expect(
				flowerShop.checkFlowersAvailable("Grass", [
					"Rose",
					"Lily",
					"Orchid",
				])
			).to.equal(`The Grass are sold! You need to purchase more!`);
		});
	});
	describe("sellFlowers", () => {
		it("happy path", () => {
			expect(
				flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)
			).to.equal("Rose / Orchid");
		});
	});
});
