function cleverLilly(input) {
    let index = 0;
    let age = Number(input[index]);
    index++
    let washingMachiePrice = Number(input[index]);
    index++
    let oneToyPrice = Number(input[index]);
    index++
    let startMoney = 10;
    let toys = 0;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += i * startMoney / 2;
            money -= 1
        } else {
            toys++
        }
    }

    money += toys * oneToyPrice;
    let diff = Math.abs(money - washingMachiePrice)
    if (money >= washingMachiePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
cleverLilly(["10", "170.00", "6"])
