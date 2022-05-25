function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    if (type === "square") {
        let result = a * a;
        console.log(result.toFixed(3));
    } else if (type === "rectangle") {
        let result = (a * b);
        console.log(result.toFixed(3))
    } else if (type === "circle") {
        let result = Math.PI * a * a;
        console.log(result.toFixed(3));
    } else if (type === "triangle") {
        let result = a * b / 2;
        console.log(result.toFixed(3));
    }
}
areaOfFigures(["triangle", "4.5", "20"])