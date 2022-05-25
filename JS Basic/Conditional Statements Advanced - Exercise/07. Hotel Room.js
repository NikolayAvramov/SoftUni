function hotelRoom(input) {
    const month = input[0];
    const numOfNights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceStudio = numOfNights * 50;
            priceApartment = numOfNights * 65;
            if (numOfNights > 7 && numOfNights <= 14) {
                priceStudio *= 0.95
            } else if (numOfNights > 14) {
                priceStudio *= 0.70;
            }; break;
        case "June":
        case "September": priceStudio = numOfNights * 75.20;
            priceApartment = numOfNights * 68.70;
            if (numOfNights > 14) {
                priceStudio *= 0.80;
            }; break;
        case "July":
        case "August": priceStudio = numOfNights * 76;
            priceApartment = numOfNights * 77; break;

    }
    if (numOfNights > 14) {
        priceApartment *= 0.90;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}
hotelRoom(["June","14"])

