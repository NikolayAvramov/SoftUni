const {expect} = require("chai");
const companyAdministration = require("./companyAdministration");

describe("Tests", () => {
	describe("hiringEmployee", () => {
		it("happy path and edge case", () => {
			expect(
				companyAdministration.hiringEmployee("Niki", "Programmer", 4)
			).to.equal(
				`Niki was successfully hired for the position Programmer.`
			);
			expect(
				companyAdministration.hiringEmployee("Niki", "Programmer", 3)
			).to.equal(
				`Niki was successfully hired for the position Programmer.`
			);
		});
		it("need more Experience", () => {
			expect(
				companyAdministration.hiringEmployee("Niki", "Programmer", 1)
			).to.equal(`Niki is not approved for this position.`);
		});
		it("wrong position", () => {
			expect(() => {
				companyAdministration.hiringEmployee("Niki", "Writer", 3);
			}).to.throw();
			expect(() => {
				companyAdministration.hiringEmployee("Niki", "Writer", 1);
			}).to.throw();
		});
	});
	describe("calculateSalary", () => {
		it("without bonus", () => {
			expect(companyAdministration.calculateSalary(160)).to.equal(2400);
			expect(companyAdministration.calculateSalary(100)).to.equal(1500);
		});
		it("with bonus", () => {
			expect(companyAdministration.calculateSalary(161)).to.equal(3415);
		});
		it("Invalid input", () => {
			expect(() => {
				companyAdministration.calculateSalary("234");
			}).to.throw();
			expect(() => {
				companyAdministration.calculateSalary(-12);
			}).to.throw();
		});
	});
	describe("firedEmployee", () => {
		it("fiered employee", () => {
			expect(
				companyAdministration.firedEmployee(
					["Petar", "Ivan", "George"],
					0
				)
			).to.equal("Ivan, George");
			expect(
				companyAdministration.firedEmployee(
					["Petar", "Ivan", "George"],
					1
				)
			).to.equal("Petar, George");
		});
		it("Invalid input", () => {
			expect(() => {
				companyAdministration.firedEmployee(
					["Petar", "Ivan", "George"],
					-1
				);
			}).to.throw();
			expect(() => {
				companyAdministration.firedEmployee(
					["Petar", "Ivan", "George"],
					3
				);
			}).to.throw();
			expect(() => {
				companyAdministration.firedEmployee(
					["Petar", "Ivan", "George"],
					"1"
				);
			}).to.throw();
			expect(() => {
				companyAdministration.firedEmployee("1", 1);
			}).to.throw();
			expect(() => {
				companyAdministration.firedEmployee(1, 1);
			}).to.throw();
			expect(() => {
				companyAdministration.firedEmployee("2", "1");
			}).to.throw();
		});
	});
});
