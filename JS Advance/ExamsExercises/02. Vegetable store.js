class VegetableStore {
	constructor(owner, location) {
		(this.owner = owner),
			(this.location = location),
			(this.availableProducts = []);
	}
	loadingVegetables(vegetables) {
		let types = [];
		for (let product of vegetables) {
			let [type, quantity, price] = product.split(" ");
			let currentType = this.availableProducts.find(
				(x) => x.type == type
			);
			if (!currentType) {
				this.availableProducts.push({type, quantity, price});
				if (!types.includes(type)) {
					types.push(type);
				}
			} else {
				if (!types.includes(type)) {
					types.push(type);
				}
				currentType.quantity =
					Number(currentType.quantity) + Number(quantity);
				if (Number(price) > Number(currentType.price)) {
					currentType.price = price;
				}
			}
		}
		return `Successfully added ${types.join(", ")}`;
	}
	buyingVegetables(selectedProducts) {
		let totalPrice = 0;
		for (let product of selectedProducts) {
			let [type, quantity] = product.split(" ");
			quantity = Number(quantity);
			let currentType = this.availableProducts.find(
				(x) => x.type == type
			);
			if (!currentType) {
				throw new Error(
					`${type} is not available in the store, your current bill is $${totalPrice.toFixed(
						2
					)}.`
				);
			}
			let ownQuantity = currentType.quantity;
			if (quantity > ownQuantity) {
				throw new Error(
					`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
						2
					)}.`
				);
			}
			let price = Number(currentType.price);
			totalPrice += quantity * price;
			currentType.quantity = ownQuantity - quantity;
		}
		return `Great choice! You must pay the following amount $${totalPrice.toFixed(
			2
		)}.`;
	}
	rottingVegetable(type, quantity) {
		let currentType = this.availableProducts.find((x) => x.type == type);
		if (!currentType) {
			throw new Error(`${type} is not available in the store.`);
		}
		let ownQuantity = Number(currentType.quantity);
		if (quantity > ownQuantity) {
			currentType.quantity = 0;
			return `The entire quantity of the ${type} has been removed.`;
		}
		currentType.quantity = ownQuantity - quantity;

		return `Some quantity of the ${type} has been removed.`;
	}
	revision() {
		let buff = `Available vegetables:`;
		this.availableProducts
			.sort((a, b) => a.price - b.price)
			.forEach((x) => (buff += `\n${x.type}-${x.quantity}-$${x.price}`));
		buff += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
		return buff;
	}
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
	vegStore.loadingVegetables([
		"Okra 2.5 3.5",
		"Beans 10 2.8",
		"Celery 5.5 2.2",
		"Celery 0.5 2.5",
	])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okrra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
