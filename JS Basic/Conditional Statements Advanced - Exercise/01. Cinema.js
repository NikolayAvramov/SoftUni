function cinema(input) {
    const premierePrice = 12;
    const normalPrice = 7.5;
    const discountPrice = 5
    const type = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);
    let seats = rows * cols;
    let price = 0;

    switch (type) {
        case "Premiere": price = seats * premierePrice; break;
        case "Normal": price = seats * normalPrice; break;
        case "Discount": price = seats * discountPrice; break;
    }
    console.log(`${price.toFixed(2)} leva`)

}
cinema(["Premiere", "10", "12"])