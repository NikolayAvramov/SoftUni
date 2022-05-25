function foodPrice(input) {
    let dogFoodPack = 2.50;
    let catFoodPack = 4;
    let dogFoodPackNeeded = Number(input[0]);
    let catFoodPackNeeded = Number(input[1]);
    let dogFoodPrice = dogFoodPackNeeded * dogFoodPack;
    let catFoodPrice = catFoodPackNeeded * catFoodPack;
    let total = dogFoodPrice + catFoodPrice;
    console.log(total + " lv.");
}

foodPrice(["5","4"])