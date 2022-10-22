function cityTaxes(name, population, treasury) {
	const result = {
		name,
		population,
		treasury,
		taxRate: 10,
		collectTaxes() {
			this.treasury += Math.floor(this.population * this.taxRate);
		},

		applyGrowth(percent) {
			this.population += Math.floor((this.population * percent) / 100);
		},

		applyRecession(percent) {
			this.treasury -= Math.floor((this.treasury * percent) / 100);
		},
	};

	return result;
}
const city = result("Sofia", 2000000, 1000000);

//testing the functions
expect(typeof city.collectTaxes).to.equals(
	"function",
	"Method 'collectTaxes' not found"
);
expect(typeof city.applyGrowth).to.equals(
	"function",
	"Method 'collectTaxes' not found"
);
expect(typeof city.applyRecession).to.equals(
	"function",
	"Method 'collectTaxes' not found"
);
