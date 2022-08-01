function cutAndReverse(input) {
  let reversedText = input.split("").reverse();
  let firstHalf = "";
  let secondHalf = "";

  for (let i = 0; i < reversedText.length; i++) {
    if (i < reversedText.length / 2) {
      firstHalf += reversedText[i];
    } else {
      secondHalf += reversedText[i];
    }
  }

  console.log(secondHalf);
  console.log(firstHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
