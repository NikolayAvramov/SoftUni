function operationBetweenNumber(input) {
    const numOne = Number(input[0]);
    const numTwo = Number(input[1]);
    const operator = (input[2])
    let result = 0;

    switch (operator) {
        case "+": result = numOne + numTwo;
            if (result % 2 == 0) {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
            } else {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);
            } break;
        case "-": result = numOne - numTwo;
            if (result % 2 == 0) {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
            } else {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);
            } break;
        case "*": result = numOne * numTwo;
            if (result % 2 == 0) {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
            } else {
                console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);
            } break;
        case "/": if (numTwo == 0) {
                console.log(`Cannot divide ${numOne} by zero`)
            } else {
            result = numOne / numTwo;
            console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`)
            } break;
        case "%": if (numTwo == 0) {
                console.log(`Cannot divide ${numOne} by zero`)
            } else {
                result = numOne % numTwo;
                console.log(`${numOne} ${operator} ${numTwo} = ${result}`)
            } break;
    }
}
operationBetweenNumber(["123",
"12",
"/"])
 



