function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);
    let printLine = "";

    for (let i = floor; i > 0; i--) {
        printLine = ""
        for (let r = 0; r < room; r++) {
           if(i === floor){
              printLine += `L${i}${r} `
           }else if(i % 2 == 0){
               printLine += `O${i}${r} `
           }else {
               printLine += `A${i}${r} `
           }
        }
        console.log(printLine)
    }
}

building(["4", "4"])
