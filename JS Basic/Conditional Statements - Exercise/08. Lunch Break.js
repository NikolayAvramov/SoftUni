function lunchBreak(input) {
    let tvShow = input[0];
    let tvShowTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = (breakTime * 1) / 8;
    let restTime = (breakTime * 1) / 4;
    let freeTime = breakTime - lunchTime - restTime;
    let leftTime = Math.ceil(Math.abs(freeTime - tvShowTime));

    if (tvShowTime <= freeTime) {
        console.log(`You have enough time to watch ${tvShow} and left with ${leftTime} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${leftTime} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "60", "96"])


