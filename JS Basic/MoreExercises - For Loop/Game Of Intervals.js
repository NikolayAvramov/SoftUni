function gameOfIntervals(input) {
    let index = 0;
    let numOfRepeats = Number(input[index]);
    index++
    let totalSum = 0;
    let firstIntervalPercent = 0;
    let secondIntervalsPercent = 0;
    let thirdIntervasPercent = 0;
    let fourthIntervalPercent = 0;
    let fifthIntervalPercent = 0;
    let invalidNum = 0;

    for (let i = 0; i < numOfRepeats; i++) {
        let num = Number(input[index]);
        index++
        if (num < 0 || num > 50) {
            totalSum /= 2;
            invalidNum++;
        } else if (num >= 0 && num <= 9) {
            totalSum += (num * 0.20);
            firstIntervalPercent++;
        } else if (num < 20) {
            totalSum += (num * 0.30);
            secondIntervalsPercent++;
        } else if (num < 30) {
            totalSum += (num * 0.40);
            thirdIntervasPercent++;
        } else if (num < 40) {
            totalSum += 50;
            fourthIntervalPercent++;
        } else if (num <= 50) {
            totalSum += 100;
            fifthIntervalPercent++;
        }

    }
    let firstIntPercent = firstIntervalPercent / numOfRepeats * 100;
    let secIntPercent = secondIntervalsPercent / numOfRepeats * 100;
    let thirdIntPercent = thirdIntervasPercent / numOfRepeats * 100;
    let fourIntPercent = fourthIntervalPercent / numOfRepeats * 100;
    let fifthIntpercent = fifthIntervalPercent / numOfRepeats * 100;
    let invalIntPercent = invalidNum / numOfRepeats * 100
    console.log(totalSum.toFixed(2));

    console.log(`From 0 to 9: ${firstIntPercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${secIntPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${thirdIntPercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${fourIntPercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fifthIntpercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalIntPercent.toFixed(2)}%`);
}
gameOfIntervals([3,
    12,
    -23,
    46])