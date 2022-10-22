function fruit(fruit, weigth, price) {
	let weigthInKg = weigth / 1000;
	let totalPrice = weigthInKg * price;
	console.log(
		`I need $${totalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(
			2
		)} kilograms ${fruit}.`
	);
}
fruit("orange", 2500, 1.8);
