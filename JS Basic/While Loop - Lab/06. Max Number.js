function maxNumber(input){
    let index = 0;
    let comand = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(comand !== "Stop"){
        comand = Number(input[index])
        if(comand > maxNumber) {
            maxNumber = comand
        }

        comand = input[index]
        index++
    }
    console.log(maxNumber)
    
}
maxNumber(["-1",
"-2",
"Stop"])

