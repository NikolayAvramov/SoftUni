function stringLenth(stringA, stringB, stringC) {
	const result = stringA.length + stringB.length + stringC.length;
	const avg = Math.floor(result / 3);
	console.log(result);
	console.log(avg);
}
stringLenth("chocolate", "ice cream", "cake");
stringLenth("pasta", "5", "22.3");
