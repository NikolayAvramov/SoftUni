function grandpaStavri(input){
    let index = 0;
    let day = Number(input[index]);
    index++;
    let totalLiters = 0;
    let totalDegree = 0;

    for(let i = 0;i < day;i++){
        let literRakia = Number(input[index]);
        index++;
        let degree = Number(input[index]);
        index++;
        totalLiters += literRakia;
        totalDegree += literRakia * degree;
    }
    let degeePerLiter = totalDegree / totalLiters;
    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${degeePerLiter.toFixed(2)}`);
    if(degeePerLiter < 38){
        console.log(`Not good, you should baking!`);
    } else if (degeePerLiter <= 42){
        console.log(`Super!`)
    } else{
        console.log(`Dilution with distilled water!`)
    }
}
grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
