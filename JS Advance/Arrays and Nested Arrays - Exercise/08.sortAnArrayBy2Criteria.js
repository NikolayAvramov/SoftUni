function sortingByTwoCriteria(arr) {
	let sorted = arr
		.sort((a, b) => a.length - b.length || a.localeCompare(b))
		.forEach((element) => {
			console.log(element);
		});
}
sortingByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
