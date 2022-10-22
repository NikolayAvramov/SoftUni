function townPopulation(arr) {
	let result = {};
	for (let data of arr) {
		let [name, population] = data.split(" <-> ");
		if (!result.hasOwnProperty(name)) {
			result[name] = population;
		} else {
			let newPopulation = Number(result[name]) + Number(population);
			result[name] = newPopulation;
		}
	}
	for (let key in result) {
		console.log(`${key} : ${result[key]}`);
	}
}
townPopulation([
	"Istanbul <-> 100000",
	"Honk Kong <-> 2100004",
	"Jerusalem <-> 2352344",
	"Mexico City <-> 23401925",
	"Istanbul <-> 1000",
]);
