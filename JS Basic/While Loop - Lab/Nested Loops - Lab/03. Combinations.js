function combination(input) {
    let n = Number(input[0])
    let res = 0
    let counter = 0
    for (let a = 0; a <= 25; a++) {
        for (let b = 0; b <= 25; b++) {
            for (let c = 0; c <= 25; c++) {
                res = a + b + c;
                if (res === n) {
                    counter++
                }

            }
        }
    }
    console.log(counter);

}
combination(["25"])