function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let result = (a * h) / 2;
    console.log(result.toFixed(2));

}
triangleArea(["20", "30"])