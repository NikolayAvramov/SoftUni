function celsiusToFahrenheit(input) {
    let celsium = Number(input[0]);
    let result = celsium * 9 / 5 + 32;
    console.log(result.toFixed(2))
}
celsiusToFahrenheit(["21"])