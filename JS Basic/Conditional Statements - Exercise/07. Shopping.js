function pcStuff(input) {
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let procesorCount = Number(input[2]);
    let ramCount = Number(input[3]);
    const oneVideoCardPrice = 250;
    const oneProcesorPrice = (oneVideoCardPrice * videoCardCount) * 0.35;
    const oneRamPrice = (oneVideoCardPrice * videoCardCount) * 0.10;
    let moneyForAll = videoCardCount * oneVideoCardPrice +
        procesorCount * oneProcesorPrice +
        ramCount * oneRamPrice;

    if (videoCardCount > procesorCount) {
        moneyForAll *= 0.85;
    }
    let diferens = Math.abs(budget - moneyForAll)

    if (moneyForAll <= budget) {
        console.log(`You have ${diferens.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diferens.toFixed(2)} leva more!`)
    }
}
pcStuff(["920.45", "3", "1", "1"])

