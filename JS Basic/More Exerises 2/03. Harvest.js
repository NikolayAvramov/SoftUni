function harvest(input) {
    let index = 0;
    let squareMeterGrapes = Number(input[index]);
    index++
    let gpralesFromOneSqare = Number(input[index]);
    index++
    let neededLitersWine = Number(input[index]);
    index++
    let numOfWrkers = Number(input[index]);
    index++

    let grapeFromAllField = squareMeterGrapes * gpralesFromOneSqare;
    let wine = grapeFromAllField * 40 / 100;
    wine /= 2.5;
    let diff = 0;
    if (wine >= neededLitersWine) {
        diff = wine - neededLitersWine
        let wineForOneWorker = diff / numOfWrkers
        console.log(`Good harvest this year! Total wine: ${wine} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForOneWorker)} liters per person.`)
    } else {
        diff = neededLitersWine - wine
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    }


}
harvest(["1020", "1.5", "425", "4"])
