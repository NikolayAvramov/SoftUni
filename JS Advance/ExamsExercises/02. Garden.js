class Garden {
	constructor(spaceAvailable) {
		(this.spaceAvailable = spaceAvailable),
			(this.plants = []),
			(this.storage = []);
	}
	addPlant(plantName, spaceRequired) {
		let leftSpace = Number(this.spaceAvailable) - Number(spaceRequired);
		if (leftSpace < 0) {
			throw new Error("Not enough space in the garden.");
		} else {
			this.spaceAvailable = leftSpace;
			this.plants.push({
				plantName,
				spaceRequired,
				ripe: false,
				quantity: 0,
			});
			return `The ${plantName} has been successfully planted in the garden.`;
		}
	}
	ripenPlant(plantName, quantity) {
		let isHaveIt = false;
		for (let obj of this.plants) {
			if (obj.plantName == plantName) {
				isHaveIt = true;
			}
		}
		if (!isHaveIt) {
			throw new Error(`There is no ${plantName} in the garden.`);
		}

		for (let obj of this.plants) {
			if (obj.plantName == plantName) {
				if (obj.ripe) {
					obj.ripe = true;
					throw new Error(`The ${plantName} is already ripe.`);
				}
				if (quantity <= 0) {
					throw new Error(`The quantity cannot be zero or negative.`);
				} else if (quantity == 1) {
					obj.ripe = true;
					obj.quantity += quantity;
					return `${quantity} ${plantName} has successfully ripened.`;
				} else {
					obj.ripe = true;
					obj.quantity += quantity;
					return `${quantity} ${plantName}s have successfully ripened.`;
				}
			}
		}
	}
	harvestPlant(plantName) {
		let isFound = false;
		for (let plant of this.plants) {
			if (plant.plantName == plantName) {
				isFound = true;
			}
		}
		if (!isFound) {
			throw new Error(`There is no ${plantName} in the garden.`);
		} else {
			for (let i = 0; i < this.plants.length; i++) {
				let plant = this.plants[i];
				if (plant.plantName == plantName) {
					if (!plant.ripe) {
						throw new Error(
							`The ${plantName} cannot be harvested before it is ripe.`
						);
					} else {
						this.storage.push({
							plantName,
							quantity: plant.quantity,
						});
						this.spaceAvailable += plant.spaceRequired;
						this.plants.splice(i, 1);
						return `The ${plantName} has been successfully harvested.`;
					}
				}
			}
		}
	}
	generateReport() {
		let buff = `The garden has ${this.spaceAvailable} free space left.`;
		let sortedPlants = this.plants.sort((a, b) => {
			return a.plantName.localeCompare(b.plantName);
		});
		let plantInGardenArr = [];
		for (let plant of sortedPlants) {
			plantInGardenArr.push(plant.plantName);
		}
		buff += `\nPlants in the garden: ${plantInGardenArr.join(", ")}`;
		if (this.storage.length == 0) {
			buff += `\nPlants in storage: The storage is empty."`;
		} else {
			let storageArr = [];
			for (let plant of this.storage) {
				let string = "";
				string += `${plant.plantName} (${plant.quantity})`;
				storageArr.push(string);
			}
			buff += `\nPlants in storage: ${storageArr.join(", ")}`;
		}
		return buff;
	}
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
