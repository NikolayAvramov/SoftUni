function catDiet(input){
    let fat = Number(input[0]);
    let protein = Number(input[1]);
    let carbohydrates = Number(input[2]);
    let totalCalori = Number(input[3]);
    let waterInFood = Number(input[4]);
    let fatInGr = (fat / 100 * totalCalori) / 9;
    let proteinInGr = (protein / 100 * totalCalori) / 4;
    let carbohydratesInGr = (carbohydrates / 100 * totalCalori) / 4;
    let foodWeight = fatInGr + proteinInGr + carbohydratesInGr
    let caloriInTotal = totalCalori / foodWeight
    let percentFoodWithoutWater = 100 - waterInFood;
    let calori = caloriInTotal * percentFoodWithoutWater / 100
    console.log(calori.toFixed(4))
}
catDiet(["40",
"40",
"20",
"3000",
"40"])
