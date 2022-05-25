function fishingBoat(input) {
    const priceInSpring = 3000;
    const priceInSummer = 4200;
    const priceInAutumn = 4200;
    const priceInWinter = 2600;
    const budget = Number(input[0]);
    const seasons = input[1];
    const numOfFishman = Number(input[2]);

    let price = 0;

    switch (seasons) {
        case "Spring": if (numOfFishman <= 6) {
            price = priceInSpring * 0.90;
        } else if (numOfFishman <= 11) {
            price = priceInSpring * 0.85;
        } else {
            price = priceInSpring * 0.75;
        } break;
        case "Summer": if (numOfFishman <= 6) {
            price = priceInSummer * 0.90;
        } else if (numOfFishman <= 11) {
            price = priceInSummer * 0.85;
        } else {
            price = priceInSummer * 0.75;
        } break;
        case "Autumn": if (numOfFishman <= 6) {
            price = priceInAutumn * 0.90;
        } else if (numOfFishman <= 11) {
            price = priceInAutumn * 0.85;
        } else {
            price = priceInAutumn * 0.75;
        } break;
        case "Winter": if (numOfFishman <= 6) {
            price = priceInWinter * 0.90;
        } else if (numOfFishman <= 11) {
            price = priceInWinter * 0.85;
        } else {
            price = priceInWinter * 0.75;
        } break;
    }

    if (numOfFishman % 2 == 0 && seasons !== "Autumn") {
        price *= 0.95;
    }
    let diferents = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diferents.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diferents.toFixed(2)} leva.`)
    }


}
fishingBoat(["3000",
    "Summer",
    "11"])

