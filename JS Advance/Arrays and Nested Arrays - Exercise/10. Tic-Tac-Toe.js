function ticTacToe(arr) {
	let board = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	let player = "X";
	for (let el of arr) {
		let [a, b] = el.split(" ");
		a = Number(a);
		b = Number(b);
		if (board[a][b] == false) {
			board[a][b] = player;
			if (player == "X") {
				player = "O";
			} else {
				player = "X";
			}
		}
	}
}
ticTacToe([
	"0 1",
	"0 0",
	"0 2",
	"2 0",
	"1 0",
	"1 1",
	"1 2",
	"2 2",
	"2 1",
	"0 0",
]);
