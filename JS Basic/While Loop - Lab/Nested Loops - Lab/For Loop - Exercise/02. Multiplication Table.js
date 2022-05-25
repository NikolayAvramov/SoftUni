function multiplicationTable(input) {
    let index = 0;
    let num = Number(input[index]);
    index++
    let res = 0;
    for (let i = 1; i <= 10; i++){
        res = i * num
        console.log(`${i} * ${num} = ${res}`)
    }
    
}
multiplicationTable(["8"])