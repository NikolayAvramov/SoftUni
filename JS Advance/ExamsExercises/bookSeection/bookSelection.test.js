const {expect} = require("chai");
const bookSelection = require("./bookSelection");

describe("bookSelection", () => {
	describe("isGenreSuitable", () => {
		it("happy path", () => {
			expect(bookSelection.isGenreSuitable("Thriller", 20)).to.be.equal(
				`Those books are suitable`
			);
			expect(bookSelection.isGenreSuitable("Horror", 20)).to.be.equal(
				`Those books are suitable`
			);
			expect(bookSelection.isGenreSuitable("asa", 20)).to.be.equal(
				`Those books are suitable`
			);
			expect(bookSelection.isGenreSuitable("Tsd", 10)).to.be.equal(
				`Those books are suitable`
			);
		});
		it("not enough age for the genre", () => {
			expect(bookSelection.isGenreSuitable("Thriller", 10)).to.be.equal(
				`Books with Thriller genre are not suitable for kids at 10 age`
			);
			expect(bookSelection.isGenreSuitable("Horror", 10)).to.be.equal(
				`Books with Horror genre are not suitable for kids at 10 age`
			);
		});
		it("edge case", () => {
			expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.equal(
				`Books with Horror genre are not suitable for kids at 12 age`
			);
			expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(
				`Books with Thriller genre are not suitable for kids at 12 age`
			);
		});
	});
	describe("isItAffordable", () => {
		it("happy path", () => {
			expect(bookSelection.isItAffordable(1, 2)).to.be.equal(
				"Book bought. You have 1$ left"
			);
			expect(bookSelection.isItAffordable(1, 1)).to.be.equal(
				"Book bought. You have 0$ left"
			);
		});
		it("not ehought money", () => {
			expect(bookSelection.isItAffordable(2, 1)).to.be.equal(
				"You don't have enough money"
			);
		});
		it("invalid input", () => {
			expect(() => bookSelection.isItAffordable("5", 6)).to.throw();
			expect(() => bookSelection.isItAffordable("5", "6")).to.throw();
			expect(() => bookSelection.isItAffordable(7, "6")).to.throw();
		});
	});
	describe("suitableTitles", () => {
		it("happy path", () => {
			expect(
				bookSelection.suitableTitles(
					[
						{title: "aa", genre: "a"},
						{title: "bb", genre: "a"},
						{title: "cc", genre: "b"},
					],
					"a"
				)
			).to.deep.equal(["aa", "bb"]);
		});
		it("no match", () => {
			expect(
				bookSelection.suitableTitles(
					[
						{title: "aa", genre: "a"},
						{title: "bb", genre: "a"},
						{title: "cc", genre: "b"},
					],
					"c"
				)
			).to.deep.equal([]);
		});
		it("Invalid input", () => {
			expect(() => bookSelection.suitableTitles("dfg", "gf")).to.throw();
			expect(() =>
				bookSelection.suitableTitles(
					[
						{title: "aa", genre: "a"},
						{title: "bb", genre: "a"},
						{title: "cc", genre: "b"},
					],
					5
				)
			).to.throw();
		});
	});
});
