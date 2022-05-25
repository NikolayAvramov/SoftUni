function specialNumbers(input) {
    let num = Number(input[0]);
    let printLine = ""
    let start = "1111";
    let end = "9999"
    for (let a = start[0]; a <= end[0]; a++) {
        for (let b = start[1]; b <= end[1]; b++) {
            for (let c = start[2]; c <= end[2]; c++) {
                for (let d = start[3]; d <= end[3]; d++) {
                    if(num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0) {
                         printLine += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }
console.log(printLine)
}
specialNumbers(["11"])
