function lastKNumberSequence(n, k) {
	let res = [1];

	while (res.length < n) {
		let calc = res.slice(-k).reduce((acc, num) => acc + num);
		res.push(calc);
	}
	return res;
}
lastKNumberSequence(6, 3);
