function solve(input) {
    let index = 0;
    let nums = Number(input[index]);
    index++;
    let oddSum = 0;
    let oddMin = 9999999990;
    let oddMax = -9999999990;
    let evenSum = 0;
    let evenMin = 999999990;
    let evenMax = -999999990;

    for (let i = 1; i <= nums; i++) {
        let num = Number(input[index]);
        index++;

        if (i % 2 !== 0) {
            oddSum += num;
            if (oddMin > num) {
                oddMin = num;
            } 
            if (oddMax < num) {
                oddMax = num;
            }
        } else {
            evenSum += num;
            if (evenMin > num) {
                evenMin = num;
            } 
            if (evenMax < num) {
                evenMax = num;
            }
        }
    }
    if(oddSum !== 0 && evenSum !== 0) {
      console.log(`OddSum=${oddSum.toFixed(2)},`);
      console.log(`OddMin=${oddMin.toFixed(2)},`);
      console.log(`OddMax=${oddMax.toFixed(2)},`)  
      console.log(`EvenSum=${evenSum.toFixed(2)},`)  
      console.log(`EvenMin=${evenMin.toFixed(2)},`)  
      console.log(`EvenMax=${evenMax.toFixed(2)}`)  
    }
    if(nums == 1){
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`)  
        console.log(`EvenSum=${evenSum.toFixed(2)},`)  
        console.log(`EvenMin=No,`)  
        console.log(`EvenMax=No`)  
    }
    if(nums == 0){
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`)  
        console.log(`EvenSum=${evenSum.toFixed(2)},`)  
        console.log(`EvenMin=No,`)  
        console.log(`EvenMax=No`)  
    }
}
solve([1,1
])