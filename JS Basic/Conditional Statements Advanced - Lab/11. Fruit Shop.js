function fruitShop(input) {
    const type = input[0];
    const day = input[1];
    const quanity = Number(input[2]);
    let price = 0;

    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (type) {
                case "banana": price = quanity * 2.50; break;
                case "apple": price = quanity * 1.20; break;
                case "orange": price = quanity * 0.85; break;
                case "grapefruit": price = quanity * 1.45; break;
                case "kiwi": price = quanity * 2.70; break;
                case "pineapple": price = quanity * 5.50; break;
                case "grapes": price = quanity * 3.85; break;
                default: console.log("error"); break;

            } break;
        case "Saturday":
        case "Sunday":
            switch (type) {
                case "banana": price = quanity * 2.70; break;
                case "apple": price = quanity * 1.25; break;
                case "orange": price = quanity * 0.90; break;
                case "grapefruit": price = quanity * 1.60; break;
                case "kiwi": price = quanity * 3; break;
                case "pineapple": price = quanity * 5.60; break;
                case "grapes": price = quanity * 4.20; break;
                default: console.log("error"); break;

    } break;
    default: console.log("error"); break;
    } 
    if(price === 0) {
    } else console.log(price.toFixed(2))
}
fruitShop(["grapes",
"Sunday",
"1.200"])
