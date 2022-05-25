function flowerShop(input) {
    let index = 0;
    let magnoliiNum = Number(input[index]);
    index++
    let ziumbiulNum = Number(input[index]);
    index++
    let roziNum = Number(input[index]);
    index++
    let cactusNum = Number(input[index]);
    index++
    let giftPrice = Number(input[index]);
    index++

    let magnoliqPrice = 3.25;
    let ziumbiulPrice = 4;
    let rozaPrice = 3.50;
    let cactusPrice = 8;

    let MagnoliqSum = magnoliqPrice * magnoliiNum;
    let ziumbiulSum = ziumbiulPrice * ziumbiulNum;
    let roziSum = rozaPrice * roziNum;
    let cactusSum = cactusPrice * cactusNum;
    let totalSum = MagnoliqSum + ziumbiulSum + roziSum + cactusSum;
    totalSum *= 0.95;
    let diff = Math.abs(totalSum - giftPrice);
    if (totalSum >= giftPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }

}
flowerShop(["15","7","5","10","100"])