function logistics(input) {
    let index = 0;
    let busPrice = 200;
    let truckPrice = 175;
    let trainPice = 120;
    let busPricePercent = 0;
    let truckPricePercent = 0;
    let trainPricePercent = 0;
    let avgPerTon = 0
    let cargoWeight = 0
    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;
    let numOfCargo = Number(input[index]);
    index++
    let cargo = Number(input[index]);
    
    for (let i = 1; i <= numOfCargo; i++) {
        cargo = Number(input[i])
        if (cargo <= 3) {
            busCounter += cargo
        } else if (cargo <= 11) {
            truckCounter += cargo
        } else if (cargo > 11) {
            trainCounter += cargo;
        }
        cargoWeight += cargo;

    }
    busPrice *= busCounter;
    truckPrice *= truckCounter;
    trainPice *= trainCounter;
    avgPerTon = (busPrice + truckPrice + trainPice) / cargoWeight;
    busPricePercent = busCounter / cargoWeight * 100;
    truckPricePercent = truckCounter / cargoWeight * 100;
    trainPricePercent = trainCounter / cargoWeight * 100;
    console.log(avgPerTon.toFixed(2));
    console.log(`${busPricePercent.toFixed(2)}%`)
    console.log(`${truckPricePercent.toFixed(2)}%`)
    console.log(`${trainPricePercent.toFixed(2)}%`)
}
logistics(["4", "1", "5", "16", "3"])