function transportPrice(input) {
    let index = 0;
    let kilometers = Number(input[index])
    index++
    let timeOfDay = input[index];
    index++
    let price = 0;
    let taxiStartPrice = 0.70;
    let taxiDayPrice = 0.79;
    let taxiNightPrice = 0.90;
    let busPrice = 0.09;
    let trainPrice = 0.06

    if (kilometers < 20) {
        if (timeOfDay === "day") {
            price = taxiStartPrice + kilometers * taxiDayPrice;
        } else {
            price = taxiStartPrice + kilometers * taxiNightPrice;
        }
    } else if (kilometers < 100) {
        price = busPrice * kilometers;
    } else {
        price = trainPrice * kilometers
    }
    console.log(price.toFixed(2))
}
transportPrice(["25","day"])