function braceletStand(input) {
    let days = 5;
    let dayliMoney = Number(input[0]);
    let dayliSavedMoneyFromSales = Number(input[1]);
    let dayliSpendedMoney = Number(input[2])
    let giftPrice = Number(input[3]);
    let savedDailiMoney = dayliMoney * days;
    let savedMoneyFromSales = dayliSavedMoneyFromSales * days;
    let totalSavedMoney = savedDailiMoney + savedMoneyFromSales;
    totalSavedMoney -= dayliSpendedMoney ;
    if (totalSavedMoney >= giftPrice) {
        console.log(`Profit: ${totalSavedMoney.toFixed(2)} BGN, the gift has been purchased.`);

    } else {
        let diff = giftPrice - totalSavedMoney
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`)
    }


}
braceletStand(["2.10",
"17.50",
"20.20",
"18.50"])
