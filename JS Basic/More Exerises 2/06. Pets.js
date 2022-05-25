function pets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++
    let foodInKg = Number(input[index]);
    index++
    let dogFoodPerDayInKg = Number(input[index]);
    index++
    let catFoodPerDayInKg = Number(input[index]);
    index++
    let thurtleFoodPerDayInGram = Number(input[index]);

    let foodForDay = dogFoodPerDayInKg + catFoodPerDayInKg + (thurtleFoodPerDayInGram / 1000);
    let foodNeed = days * foodForDay;
   
    if (foodNeed <= foodInKg) {
        let diff = foodInKg - foodNeed;
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        let diff = foodNeed - foodInKg;
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }

}
pets(["2", "10", "1", "1", "1200"])