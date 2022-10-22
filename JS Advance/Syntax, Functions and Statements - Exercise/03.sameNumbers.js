function sameNum(num) {
	let numAsString = num.toString();
	let checker = numAsString[0];
	let sum = 0;
	let isSame = true;
	for (let i = 0; i < numAsString.length; i++) {
		sum += Number(numAsString[i]);
		if (checker !== numAsString[i]) {
			isSame = false;
		}
	}
	console.log(isSame);
	console.log(sum);
}
sameNum(2222222);
sameNum(1234);
