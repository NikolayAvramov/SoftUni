function equalSumsEvenOddPosition(input) {
    let startNum = input[0];
    let endNum = input[1];

    let printLine = "";
    for (let index = startNum; index <= endNum; index++) {
        let curNum = "" + index
        let odd = 0;
        let even = 0;

        for (let i = 0;i < curNum.length; i++) {
            let digits = Number(curNum[i])
            if (i % 2 == 0) {
                even += digits
            } else {
                odd += digits
            }
        }
        if (even === odd) {
            printLine += `${index} `

        }
    }
    console.log(printLine)
}
equalSumsEvenOddPosition(["100000",
    "100050"])
