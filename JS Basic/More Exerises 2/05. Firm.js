function firm(input) {
    let index = 0;
    let neededHours = Number(input[index]);
    index++
    let days = Number(input[index]);
    index++
    let numOfWorker = Number(input[index]);
    index++

    let lerarningPreriod = days * 10 / 100;
    let leftDays = days - lerarningPreriod;
    let leftDaysInHour = leftDays * 8;
    let overTime = numOfWorker * 2 * days;
    let totalHour = leftDaysInHour + overTime;
    let diff = 0;
    
    if (totalHour >= neededHours) {
        let diff = totalHour - neededHours;
        diff = Math.floor(diff);
        console.log(`Yes!${diff} hours left.`);
    } else {
        let diff = neededHours - totalHour;
        console.log(`Not enough time!${Math.ceil(diff)} hours needed.`);
    }

}
firm(["99", "3", "1"])