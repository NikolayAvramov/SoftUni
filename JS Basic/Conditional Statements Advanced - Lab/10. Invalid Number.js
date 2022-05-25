function invalidNumber(input) {
    const num = Number(input[0]);

    if (num >= 100 && num <= 200) {

    } else if (num === 0) {
    } else {
        console.log("invalid")
    }
}
invalidNumber(["0"])