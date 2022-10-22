function piceOfPie(arr, startPie, endPie) {
	let startedIndex = arr.indexOf(startPie);
	let endIndex = arr.indexOf(endPie);
	let result = arr.slice(startedIndex, endIndex + 1);
	return result;
}
console.log(
	piceOfPie(
		[
			"Pumpkin Pie",
			"Key Lime Pie",
			"Cherry Pie",
			"Lemon Meringue Pie",
			"Sugar Cream Pie",
		],
		"Key Lime Pie",
		"Lemon Meringue Pie"
	)
);
