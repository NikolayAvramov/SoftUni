function tenisRanklist(input) {
    let index = 0;
    let turnirNum = Number(input[index]);
    index++
    let startedPoint = Number(input[index]);
    index++
    let result = "";
    let points = 0;
    let wCounter = 0;

    for(let i = 0; i < turnirNum; i++) {
        result = (input[index]);
        index++

         if(result === "W") {
             points += 2000;
             wCounter++
         } else if(result === "F") {
             points += 1200;
         } else if(result === "SF") {
             points += 720;
         }
         
    }
    let finalPoints = points + startedPoint;
    let averagePoints = points / turnirNum;
    let winingsInPercent = wCounter / turnirNum * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winingsInPercent.toFixed(2)}%`)



}
tenisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

