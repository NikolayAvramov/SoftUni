function sumOfTwoNumbers(input) {
    let index = 0;
    let startNum = Number(input[index]);
    index++
    let endNum = Number(input[index]);
    index++
    let magicNum = Number(input[index]);
    let res = 0;
    let counter = 0;
    let isFound = false
    for (let x = startNum; x <= endNum; x++) {
        for (let y = startNum; y <= endNum; y++) {
            res = x + y;
            counter++
            if (res === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${res})`)
                isFound = true;
                break;
            }

        }
        if (isFound)
            break;
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(["23",
    "24",
    "20"])
