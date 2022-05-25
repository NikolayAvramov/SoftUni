function oscars(input) {
    let index = 0;
    let name = input[index];
    index++
    let points = Number(input[index]);
    index++
    let jurryNum = Number(input[index]);
    index++
    let neededPoints = 1250.5
    for (let i = 0; i < jurryNum; i++) {
        let jurryNames = input[index];
        index++
        let pointsFromJurry = Number(input[index]);
        index++
        points += jurryNames.length * pointsFromJurry / 2;

            if(points > neededPoints) {
                console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`); break;
            } 
            
    }
    let diff = neededPoints - points;
   if(points <= neededPoints) {
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`); break;
   }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
