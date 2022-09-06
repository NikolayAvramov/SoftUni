function spiceMustFlow(startedYield) {
	let day = 0;
	let spiceForADay = 0;
	let totalSpice = 0;

	for (let i = startedYield; i >= 100; i -= 10) {
		spiceForADay = i;
		totalSpice += i - 26;
		day++;
	}
	if (spiceForADay - 10 < 100) {
		totalSpice -= 26;
	}
	if (totalSpice - 26 < 0) {
		totalSpice = spiceForADay;
	}

	console.log(day);
	console.log(totalSpice);
}
spiceMustFlow(111);
