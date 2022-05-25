function newHouse(input) {
    const rose = 5;
    const dalia = 3.8;
    const tulip = 2.8;
    const narcis = 3;
    const gladiol = 2.5;
    const type = input[0];
    const count = Number(input[1]);
    const budget = Number(input[2]);
    let price = 0;

    switch (type) {
        case "Roses": price = rose * count;
            if (count > 80) {
                price *= 0.90;
            } break;
        case "Dahlias": price = dalia * count;
            if (count > 90) {
                price *= 0.85;
            } break;
        case "Tulips": price = tulip * count;
            if (count > 80) {
                price *= 0.85;
            } break;
        case "Narcissus": price = narcis * count;
            if (count < 120) {
                price *= 1.15;
            } break;
        case "Gladiolus": price = gladiol * count;
            if (count < 80) {
                price *= 1.20;
            } break
    }
    let neededMoney = price - budget;
    let left = budget - price;

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${left.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
    }

}
newHouse(["Gladiolus", "40", "120"])


