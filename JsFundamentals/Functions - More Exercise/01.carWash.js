function carWash(input) {
    let sum = 0
    for (let comand of input) {
        switch (comand) {
            case "soap":
                sum += 10;
                break;
            case "water":
                sum += sum * 0.20;
                break;
            case "vacuum cleaner":
                sum += sum * 0.25;
                break;
            case "mud":
                sum -= sum * 0.10
        }
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}



carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
