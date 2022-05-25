function coins(input) {
    let change1 = Number(input[0]);
    
    let change = (change1 * 100).toFixed(0);
    let coinCount = 0;
    while (change > 0) {

        if (change >= 200) {
            change -= 200
        } else if (change >= 100) {
            change -= 100
        } else if (change >= 50) {
            change -= 50
        } else if (change >= 20) {
            change -= 20
        } else if (change >= 10) {
            change -= 10
        } else if (change >= 5) {
            change -= 5
        } else if (change >= 2) {
            change -= 2
        } else {
            change -= 1
        }
         coinCount++
    }
    console.log(`${coinCount}`)
}
coins(["0.56"])