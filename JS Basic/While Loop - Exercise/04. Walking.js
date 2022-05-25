function walking(input) {
    let index = 0;
    let comand = input[index];
    let daypurpose = 10000;
    let currentSteps = 0
    let diff = 0
    let oncePrinted = false

    while (currentSteps <= daypurpose) {
        comand = input[index];
        if (comand === "Going home") {
            comand = Number(input[++index])
        
            currentSteps += comand
            if (currentSteps >= daypurpose) {
                diff = currentSteps - daypurpose;
                console.log(`Goal reached! Good job!`);
                console.log(`${diff} steps over the goal!`)
                oncePrinted = true
                break;
            }
            diff = daypurpose - currentSteps;
            console.log(`${diff} more steps to reach goal.`)
            oncePrinted = true
            break;
        }

        comand = Number(input[index]);

        currentSteps += comand;

        index++

    }

    if (!oncePrinted) {
        diff = currentSteps - daypurpose;
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`)

    }

}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

