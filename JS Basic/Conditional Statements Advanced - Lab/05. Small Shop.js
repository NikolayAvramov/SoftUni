function smallShop(input) {
    const product = input[0];
    const town = input[1];
    const count = Number(input[2]);
    let price = 0;

    if (town === "Sofia") {
        switch (product) {
            case "coffee": price = count * 0.50; break;
            case "water": price = count * 0.80; break;
            case "beer": price = count * 1.20; break;
            case "sweets": price = count * 1.45; break;
            case "peanuts": price = count * 1.60; break;

        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = count * 0.40; break;
            case "water": price = count * 0.70; break;
            case "beer": price = count * 1.15; break;
            case "sweets": price = count * 1.30; break;
            case "peanuts": price = count * 1.50; break;

        }
    } else if (town === "Varna") {
        switch (product) {
            case "coffee": price = count * 0.45; break;
            case "water": price = count * 0.70; break;
            case "beer": price = count * 1.10; break;
            case "sweets": price = count * 1.35; break;
            case "peanuts": price = count * 1.55; break;

        }
    }
    console.log(price)
}
smallShop(["beer", "Varna", "2"])