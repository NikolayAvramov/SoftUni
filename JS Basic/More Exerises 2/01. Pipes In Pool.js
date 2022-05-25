function pipesInPool(input) {
    let capacity = Number(input[0]);
    let pipeOneDebit = Number(input[1]);
    let pipeTwoDebit = Number(input[2]);
    let workerMissingTime = Number(input[3]);
    let pipeOneFill = pipeOneDebit * workerMissingTime;
    let pipeTwoFill = pipeTwoDebit * workerMissingTime;
    let allPipeFill = pipeOneFill + pipeTwoFill;
    let pipeOneInPercent = pipeOneFill / allPipeFill * 100;
    let pipeTwoInPercent = pipeTwoFill / allPipeFill * 100;
    let allPipeFillInPercent = allPipeFill / capacity * 100;
    let diferent = allPipeFill - capacity
    if(allPipeFill <= capacity) {
        console.log(`The pool is ${allPipeFillInPercent.toFixed(2)}% full. Pipe 1: ${pipeOneInPercent.toFixed(2)}%. Pipe 2: ${pipeTwoInPercent.toFixed(2)}%.`)
    } else {
        console.log(`For ${workerMissingTime} hours the pool overflows with ${diferent} liters.`)

    }

}
pipesInPool(["100","100","100","2.5"])