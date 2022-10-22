function daysInMonth(month, year) {
	let stardDay = 1;
	let days = 0;
	let date = new Date(year, month - 1);
	for (let i = stardDay; date.getMonth() <= month - 1; i++) {
		date.setDate(i);
		days++;
	}
	return days - 1;
}
daysInMonth(2, 2021);
