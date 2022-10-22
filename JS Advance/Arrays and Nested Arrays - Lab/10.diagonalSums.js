function diagonalSum(matrix) {
	let firstDiagonalSum = 0;
	let secondDiagonalSum = 0;

	for (let [i, j] = [0, matrix.length - 1]; i < matrix.length; i++, j--) {
		firstDiagonalSum += matrix[i][i];
		secondDiagonalSum += matrix[i][j];
	}
	console.log(firstDiagonalSum, secondDiagonalSum);
}
diagonalSum([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);
