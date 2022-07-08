function memoryGame(array) {
  let board = array.shift().split(" ");
  let index = 0;
  let guessIndex = array[index];
  let movesCount = 0;
  let isWon = false;

  while (guessIndex != "end") {
    movesCount++;
    let [firstIndex, secondIndex] = guessIndex.split(" ").map(Number);
    if (
      firstIndex < 0 ||
      firstIndex > board.length - 1 ||
      firstIndex === secondIndex ||
      secondIndex < 0 ||
      secondIndex > board.length - 1
    ) {
      let elementToAdd = `-${movesCount}a`;
      board.splice(board.length / 2, 0, elementToAdd, elementToAdd);
      console.log(`Invalid input! Adding additional elements to the board`);
    } else {
      if (board[firstIndex] == board[secondIndex]) {
        console.log(
          `Congrats! You have found matching elements - ${board[firstIndex]}!`
        );
        board.splice(firstIndex, 1);
        if (secondIndex < firstIndex) {
          board.splice(secondIndex, 1);
        } else {
          board.splice(secondIndex - 1, 1);
        }
      } else {
        console.log(`Try again!`);
      }
    }
    if (board.length == 0) {
      isWon = true;
      break;
    }
    index++;
    guessIndex = array[index];
  }
  if (isWon) {
    console.log(`You have won in ${movesCount} turns!`);
  } else {
    console.log(`Sorry you lose :( \n${board.join(" ")}`);
  }
}
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
