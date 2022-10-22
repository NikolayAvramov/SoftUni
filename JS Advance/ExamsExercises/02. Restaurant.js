class Restaurant {
	constructor(budgetMoney) {
		(this.budgetMoney = budgetMoney),
			(this.menu = {}),
			(this.stockProducts = {}),
			(this.history = []);
	}
	loadProducts(products) {
		for (let product of products) {
			let [name, quantity, price] = product.split(" ");
			if (this.budgetMoney >= price) {
				this.budgetMoney -= price;
				if (!this.stockProducts.hasOwnProperty(name)) {
					this.stockProducts[name] = {name, quantity};
				} else {
					let old;
				}
			}
		}
	}
}
