class CarDealership {
	constructor(name) {
		(this.name = name),
			(this.availableCars = []),
			(this.soldCars = []),
			(this.totalIncome = 0);
	}

	addCar(model, horsepower, price, mileage) {
		if (
			model.trim() !== "" &&
			horsepower >= 0 &&
			Math.trunc(horsepower) == horsepower &&
			price >= 0 &&
			mileage >= 0
		) {
			this.availableCars.push({model, horsepower, price, mileage});
			return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
				2
			)} km - ${price.toFixed(2)}$`;
		} else {
			throw new Error("Invalid input!");
		}
	}
	sellCar(model, desiredMileage) {
		let itHaveIt = false;
		for (let i = 0; i < this.availableCars.length; i++) {
			let car = this.availableCars[i];
			if (car.model == model) {
				itHaveIt = true;
				let diff = Number(car.mileage) - Number(desiredMileage);
				if (diff > 0 && diff <= 40000) {
					car.price *= 0.95;
				} else if (diff > 40000) {
					car.price *= 0.9;
				}
				this.soldCars.push({
					model,
					horsepower: car.horsepower,
					soldPrice: car.price,
				});
				this.availableCars.splice(i, 1);
				this.totalIncome += car.price;

				return `${model} was sold for ${car.price.toFixed(2)}$`;
			}
		}
		if (!itHaveIt) {
			throw new Error(`${model} was not found!`);
		}
	}
	currentCar() {
		let buff = `-Available cars:`;
		for (let car of this.availableCars) {
			buff += `\n---${car.model} - ${
				car.horsepower
			} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
		}
		if (buff == `-Available cars:`) {
			return "There are no available cars";
		} else {
			return buff;
		}
	}
	salesReport(criteria) {
		if (criteria != "horsepower" && criteria != "model") {
			throw new Error("Invalid criteria!");
		}
		if (criteria == "horsepower") {
			this.soldCars = this.soldCars.sort((a, b) => {
				return b.horsepower - a.horsepower;
			});
		} else if (criteria == "model") {
			this.soldCars = this.soldCars.sort((a, b) => {
				return a.model.localeCompare(b.model);
			});
		}
		let result = `-${
			this.name
		} has a total income of ${this.totalIncome.toFixed(2)}$`;
		result += `\n-${this.soldCars.length} cars sold:`;
		for (let car of this.soldCars) {
			result += `\n---${car.model} - ${
				car.horsepower
			} HP - ${car.soldPrice.toFixed(2)}$`;
		}
		return result;
	}
}
//Testing saleReport

let dealership = new CarDealership("SoftAuto");

dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);

dealership.salesReport("horsepower");
// `-SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$`);
