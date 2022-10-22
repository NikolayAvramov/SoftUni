function tickets(array, criteria) {
	let result = [];
	class Destnation {
		constructor(destination, price, status) {
			(this.destination = destination),
				(this.price = price),
				(this.status = status);
		}
	}
	for (let dest of array) {
		let [destination, price, status] = dest.split("|");
		let Ticket = new Destnation(destination, Number(price), status);
		result.push(Ticket);
	}
	let sortedArr;
	switch (criteria) {
		case "destination":
			sortedArr = result.sort((a, b) => {
				let first = a.destination;
				let next = b.destination;
				return first.localeCompare(next);
			});
			break;
		case "price":
			sortedArr = result.sort((a, b) => {
				let first = a.price;
				let next = b.price;
				return first - next;
			});
			break;
		case "status":
			sortedArr = result.sort((a, b) => {
				let first = a.status;
				let next = b.status;
				return first.localeCompare(next);
			});
			break;
	}
	return sortedArr;
}
console.table(
	tickets(
		[
			"Philadelphia|94.20|available",
			"New York City|95.99|available",
			"New York City|95.99|sold",
			"Boston|126.20|departed",
		],
		"destination"
	)
);
