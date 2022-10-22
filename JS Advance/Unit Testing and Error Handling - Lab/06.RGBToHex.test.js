const {expect} = require("chai");
const {rgbToHexColor} = require("./06.RGBToHex");

describe("rgbToHexColor", () => {
	it("should return undefined if arg'red' is string", () => {
		expect(rgbToHexColor("122", 122, 213)).to.be.undefined;
	});
	it("should return undefined if arg'green' is string", () => {
		expect(rgbToHexColor(122, "122", 211)).to.be.undefined;
	});
	it("should return undefined if arg'blue' is string", () => {
		expect(rgbToHexColor(134, 142, "122")).to.be.undefined;
	});
	it("should return undefined if arg'red' is out of range", () => {
		expect(rgbToHexColor(321, 48, 124)).to.be.undefined;
	});
	it("should return undefined if arg'green' is out of range", () => {
		expect(rgbToHexColor(34, 654, 124)).to.be.undefined;
	});
	it("should return undefined if arg'green' is < 0", () => {
		expect(rgbToHexColor(122, -22, 21)).to.be.undefined;
	});
	it("should return undefined if arg'blue' is out of range", () => {
		expect(rgbToHexColor(122, 245, 256)).to.be.undefined;
	});
	it("should return undefined if arg'red' is not integer", () => {
		expect(rgbToHexColor(12.5, 211, 244)).to.be.undefined;
	});
	it("should return undefined if arg'green' is not integer", () => {
		expect(rgbToHexColor(122, 122.3, 213)).to.be.undefined;
	});
	it("should return undefined if arg'blue' is not integer", () => {
		expect(rgbToHexColor(122, 122, 232.2)).to.be.undefined;
	});
	it("should return white to hex", () => {
		expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
	});
	it("should return black to hex", () => {
		expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
	});
});
