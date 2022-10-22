function previousDay(year, month, day) {
	let date = new Date(year, month - 1, day);
	date.getDate(date.setDate(day - 1));
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
previousDay(2016, 10, 1);
