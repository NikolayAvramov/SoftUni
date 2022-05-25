function passGen(input){
    const n = Number(input[0]);
    const l = Number(input[1]);
    let pass = "";
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    for (let first = 1;   first < n; first++ ) {
        for (let second = 1;second < n;second++){
            for(let third = 0;third < l;third++){
                for(let four = 0; four < l;four++){
                    for(let fifth = 1;fifth <= n;fifth++){
                        if(fifth > first && fifth > second){
                            pass += (`${first}${second}${letter[third]}${letter[four]}${fifth} `);
                        }
                    }
                }
            }
        }
    }
    console.log(pass);
} 
passGen([4,2])