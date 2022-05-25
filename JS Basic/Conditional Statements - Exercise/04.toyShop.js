function toyShop(input) {
    const puzzle = 2.60;
    const talkingDoll = 3;
    const teddyBear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let vacPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalPrice = puzzle * puzzleCount +
        talkingDoll * talkingDollCount +
        teddyBear * teddyBearCount +
        minion * minionCount +
        truck * truckCount;
    let toyCount = puzzleCount +
        talkingDollCount +
        teddyBearCount +
        minionCount +
        truckCount;

    if (toyCount >= 50) {
        totalPrice *= 0.75
    }
    totalPrice *= 0.90;

    let leftMoney = Math.abs(totalPrice - vacPrice);
    if (totalPrice >= vacPrice) {
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);

    }
}
toyShop(["320", "8", "2", "5", "5", "1"])