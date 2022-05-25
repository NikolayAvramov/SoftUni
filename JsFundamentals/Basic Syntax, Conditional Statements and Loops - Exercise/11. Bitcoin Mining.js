function bitcoinMining(input) {
  let bitcoinPrice = 11949.16;
  let goldPricePerGram = 67.51;
  let day = 1;
  let index = 0;
  let curMoney = 0;

  let myBitcoin = 0;
  let dayForFirstBitcoin = 0;
  let gramsPerDay = 0;
  for (let i = 0; i < input.length; i++) {
    gramsPerDay = Number(input[index]);
    if (day % 3 == 0) {
      gramsPerDay *= 0.7;
    }

    curMoney += gramsPerDay * goldPricePerGram;
    if (curMoney >= bitcoinPrice) {
      curMoney -= bitcoinPrice;
      myBitcoin++;
    }
    if (myBitcoin == 1) {
      dayForFirstBitcoin = day;
    }
    day++;
    index++;
  }
  while (curMoney > bitcoinPrice) {
    curMoney -= bitcoinPrice;
    myBitcoin++;
  }
  console.log(`Bought bitcoins: ${myBitcoin}`);
  if (myBitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayForFirstBitcoin}`);
  }
  console.log(`Left money: ${curMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
