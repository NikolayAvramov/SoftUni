function dayOfWeek(day) {
	let daysArr = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	if (daysArr.includes(day)) {
		return daysArr.indexOf(day) + 1;
	} else {
		return `error`;
	}
}

console.log(dayOfWeek("Monday"));
console.log(dayOfWeek("Friday"));
console.log(dayOfWeek("Invalid"));
