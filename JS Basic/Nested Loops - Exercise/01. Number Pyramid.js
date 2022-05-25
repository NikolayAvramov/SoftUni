function numberPyramid(input) {
    let n = Number(input[0]);
    let printLine = "";
    let curNum = 0
    for (let rows = 1; rows <= n; rows++) {
        printLine = ""
        for (let cols = 1; cols <= rows; cols++) {
            curNum++
            printLine += curNum + " "
            if (curNum == n) {
                break;
            }
        }
        console.log(printLine)

        if (curNum == n) {
            break
        }
    }
}
numberPyramid(["23"])