function sumPrimeNonPrime(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    
    while (input[index] !== "stop") {
        let num = Number(input[index]);
        if (num < 0) {
            console.log(`Number is negative.`)
        }else {
            let isPrime = true;
            for(let i = 2; i < num; i++){
                if (num % i == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primeSum += num;
            } else {
                nonPrimeSum += num;
            }
        }
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)

}
sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
