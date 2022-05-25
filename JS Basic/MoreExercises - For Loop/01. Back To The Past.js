function backToThePast(input) {
    let index = 0;
    let money = Number(input[index]);
    index++
    let year = Number(input[index]);
    index++
    let neededMoney = 0;
    let startedYear = 1800;
    let ivanchoYears = 18;
    let diff = 0;
    for (let i = startedYear; i <= year; i++) {
        if (startedYear % 2 === 0) {
            neededMoney += 12000;

        } else  {
            neededMoney += 12000 + 50 * ivanchoYears;
        }
        startedYear++
        ivanchoYears++
    }
    diff = Math.abs(money - neededMoney)
    if (neededMoney <= money) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }
}
backToThePast(["100000.15","1808"])