function sumOfNumbers(input) {
    const textNumber = "" + input[0];
    let sum = 0;
     for(let i = 0; i < textNumber.length; i++){
         let number = Number(textNumber[i])
         sum += number
     }
     console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"])