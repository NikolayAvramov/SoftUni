function joruney(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let neededMoney = 0;
    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);
        switch (season) {
            case "winter": neededMoney = budget * 0.70;
                console.log(`Hotel - ${neededMoney.toFixed(2)}`); break;
            case "summer": neededMoney = budget * 0.30;
                console.log(`Camp - ${neededMoney.toFixed(2)}`); break;
        }
    } else if (budget <= 1000) {
        console.log(`Somewhere in Balkans`);
        switch (season) {
            case "summer": neededMoney = budget *= 0.40;
                console.log(`Camp - ${neededMoney.toFixed(2)}`); break;
            case "winter": neededMoney = budget *= 0.80;
                console.log(`Hotel - ${neededMoney.toFixed(2)}`); break;
        }
    } else if (budget > 1000) {
        neededMoney = budget *= 0.90;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${neededMoney.toFixed(2)}`)
    }
}
joruney(["678.53", "winter"])