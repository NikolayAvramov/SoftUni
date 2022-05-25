function radiansToDegrees(input) {
    const radians = Number(input[0]);
    const sum = radians * 180 / Math.PI;
    console.log(sum);

}

radiansToDegrees(["3.1416"])