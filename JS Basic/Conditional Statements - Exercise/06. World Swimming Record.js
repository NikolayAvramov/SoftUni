function worldRecord(input) {
    const record = Number(input[0]);
    const meter = Number(input[1]);
    const secPerMeter = Number(input[2]);

    let bonusTime = Math.floor(meter / 15) * 12.5;
    let timeNeeded = (meter * secPerMeter) + bonusTime;
    let diferens = Math.abs(record - timeNeeded);
    
    if(timeNeeded < record) {
        console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diferens.toFixed(2)} seconds slower.`)
    } 
}        
worldRecord(["55555.67","3017","5.03"])


    