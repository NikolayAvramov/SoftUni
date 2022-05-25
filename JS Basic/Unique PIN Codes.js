function pinCode(input){
    
    let maxFirstNum = Number(input[0]);
    let maxSecondNum = Number(input[1]);
    let maxThirdNum = Number(input[2])
    let secNumStart = 2
    for(let a = 1;a <= maxFirstNum;a++){
        for(let b = secNumStart;b <= maxSecondNum; b++){
            for(let c = 1;c <= maxThirdNum; c++){
                if(a % 2 === 0 && c % 2 === 0 && b % 4 !== 0 && b % 6 !== 0 && b <= 7){
                    console.log(`${a} ${b} ${c}`)
                }

            }
        }
    }
}
pinCode(["3",
"5",
"5"])
