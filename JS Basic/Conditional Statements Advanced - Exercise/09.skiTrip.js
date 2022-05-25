function skiTrip(input) {

    const roomForOnePerson = 18;
    const apartment = 25;
    const presidentApartment = 35;
    const days = Number(input[0]);
    const typeRoom = input[1];
    const feedback = input[2];
    let night = days - 1;
    let price = 0;
    switch (typeRoom) {
        case "room for one person": price = night * roomForOnePerson; break;
        case "apartment": price = night * apartment;
            if (days < 10) {
                price *= 0.70;
            } else if (days >= 10 && days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }; break;
        case "president apartment": price = night * presidentApartment;
            if (days < 10) {
                price *= 0.90;
            } else if (days >= 10 && days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }; break;


    }
    switch (feedback) {
        case "positive": price *= 1.25; break;
        case "negative": price *= 0.90; break;
    }
    console.log(price.toFixed(2))
}
skiTrip(["30",
    "president apartment",
    "negative"])



