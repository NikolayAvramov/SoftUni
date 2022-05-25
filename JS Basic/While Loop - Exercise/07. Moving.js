function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;
    let freeSpace = width * length * hight;
    let boxComand = input[index];
    while (freeSpace >= 0) {
        boxComand = input[index];
        if (boxComand === "Done") {
            console.log(`${freeSpace} Cubic meters left.`)
            break;
        }
        boxComand = Number(input[index])
        freeSpace -= boxComand
        index++

    }

    if(freeSpace <= 0){
       freeSpace = Math.abs(freeSpace);
       console.log(`No more free space! You need ${freeSpace} Cubic meters more.`)
    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
