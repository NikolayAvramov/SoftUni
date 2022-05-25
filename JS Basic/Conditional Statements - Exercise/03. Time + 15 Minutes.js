function timeMinutes(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]);
    min += 15;

    if(min >= 60) {
       hour += 1 ;
       min -= 60
    } 
    if(hour >= 24) {
        hour = 0;
    }
    if(min < 10) {
        console.log(`${hour}:0${min}`)
    } else {
        console.log(`${hour}:${min}`)
    }
    
}
timeMinutes(["23", "45"])