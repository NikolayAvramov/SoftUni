function sleepyTom(input) {
    let index = 0;
    let dayOff = Number(input[index])
    index++
    let dayInYear = 365;
    let minForPlayForYear = 30000;
    let workingDays = dayInYear - dayOff;
    let totalMinDayOff = dayOff * 127;
    let totalMinWorkingDay = workingDays * 63;
    let totalPlayedTime = totalMinDayOff + totalMinWorkingDay;
    let diff = Math.abs(minForPlayForYear - totalPlayedTime);
    let hour = diff / 60;
    let min = diff % 60
    if(minForPlayForYear < totalPlayedTime) {
        console.log(`Tom will run away`);
        console.log(`${Math.floor(hour)} hours and ${min} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(hour)} hours and ${min} minutes less for play`)
    }
}
sleepyTom(["20"])