function minNumber(input){
    let index = 0;
    let comand = input[index];
    let minNum = Number.MAX_SAFE_INTEGER;

    while(comand !== "Stop"){
        comand = Number(input[index]);
        if(comand < minNum)
        minNum = comand


    comand = input[index]
    index++
    }
    console.log(minNum)
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
