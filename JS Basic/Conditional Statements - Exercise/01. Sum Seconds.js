function sumSeconds(input) {
    const first = Number(input[0]);
    const second = Number(input[1]);
    const third = Number(input[2]);
    let totalTime = first + second + third;
    let minutes = 0;
    let seconds = 0;

    if (totalTime >= 120) {    //Втори вариант let minutes = Math.floot(totalTime / 60);
        minutes = 2;           //              let seconds = totalTime % 60;
        seconds = totalTime % 60;
    } else if (totalTime >= 60) {
        minutes = 1;
        seconds = totalTime % 60;
    } else {
        minutes = 0;
        seconds = totalTime;
    }

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["14", "12", "20"])
