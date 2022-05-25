function onTimeForTheExam(input) {
    const examHour = Number(input[0]);
    const examMin = Number(input[1]);
    const arriveHour = Number(input[2]);
    const arriveMin = Number(input[3]);
    let difference = 0;
    let examTimeInMin = (examHour * 60) + examMin;
    let studentArriveTimeInMin = (arriveHour * 60) + arriveMin;
    if (studentArriveTimeInMin > examTimeInMin) {
        console.log(`Late`);
        difference = studentArriveTimeInMin - examTimeInMin
        if (difference < 60) {
            console.log(`${difference} minutes after the start`)
        } else {
            let hour = (difference / 60);
            let min = difference % 60;
            hour = Math.floor(hour)
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`)
            } else {
                console.log(`${hour}:${min} hours after the start`)
            }
        }
    } else {
        difference = examTimeInMin - studentArriveTimeInMin;
        if (difference <= 30 || examTimeInMin == studentArriveTimeInMin) {
            console.log(`On time`);
            console.log(`${difference} minutes before the start`);

        } else {
            console.log(`Early`);
            if (difference < 60) {
                console.log(`${difference} minutes before the start`)
            } else {
                let hour = (difference / 60);
                let min = difference % 60;
                hour = Math.floor(hour);
                if (min < 10) {
                    console.log(`${hour}:0${min} hours before the start`)
                } else {
                    console.log(`${hour}:${min} hours before the start`)
                }
            }
        }



    }
}
    onTimeForTheExam	(["11",
    "30",
    "8",
    "12"])
    
