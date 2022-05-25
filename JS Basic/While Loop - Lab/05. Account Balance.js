function accountBalance(input) {
    let index = 0;
    let increase = input[index++];
    let balance = 0;

    while(increase !== "NoMoreMoney") {
        
        if (increase < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        balance += Number(increase)
        console.log(`Increase: ${Number(increase).toFixed(2)}`)
        increase = input[index++]
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
