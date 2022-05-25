function pin(input){
  let maxFirstNum = Number(input[0]);
    let maxSecondNum = Number(input[1]);
    let maxThirdNum = Number(input[2]);
    for(let a = 1;a <= maxFirstNum; a++){
        for(let b = 2; b <= maxSecondNum;b++){
            for(let c = 1;c <= maxThirdNum;c++){
                if(a % 2 === 0 && c % 2 === 0 && b < 7 && b != 4 && b != 6){
                    console.log(`${a} ${b} ${c}`)
                }
            }
        }
    }
}
pin([3 , 5 , 5])
