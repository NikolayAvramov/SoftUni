function evenElement(arr) {
	let res = [];
	arr.forEach((num, index) => {
		if (index % 2 == 0) {
			res.push(num);
		}
	});
	console.log(res.join(" "));
}
evenElement(["20", "30", "40", "50", "60"]);
