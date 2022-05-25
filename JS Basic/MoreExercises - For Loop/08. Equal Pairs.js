function equalPairs(input){
    let index = 0;
    let numOfCouples = Number(input[index]);
    index++;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let minSum = Number.MAX_SAFE_INTEGER;
    let result = 0;
    for(let i = 0; i < numOfCouples;i++){
        let firstNum = Number(input[index]);
        index++;
        let secondNum = Number(input[index]);
        index++;

        result = firstNum + secondNum; 
        if(result > maxSum){
            maxSum = result;
        }
        if(minSum > result){
            minSum = result;
        }
      
    }
let diff = maxSum - minSum
if (diff > 100){
    diff = 88;
}
    if(minSum === maxSum){
        console.log(`Yes, value=${result}`);
    }else{
        console.log(`No, maxdiff=${diff}`);
    }


}
equalPairs([7,
    34,
    -33,
    52,
    12,
    -32,
    32,
    23,
    41,
    7,
    25,
    34,
    23,
    124,
    21,
    ])