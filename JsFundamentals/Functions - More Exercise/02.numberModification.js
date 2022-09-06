function numberrModificaion(num) {
    let stringOfNum = num.toString().split("")
    let currSum = 0
    while (currSum / stringOfNum.length < 5) {
        currSum = 0
        for (let digit of stringOfNum) {
            currSum += +digit
        }
        if (currSum / stringOfNum.length <= 5) {
            stringOfNum.push("9")
        }

    }
    console.log(stringOfNum.join(""));
}
numberrModificaion(101)