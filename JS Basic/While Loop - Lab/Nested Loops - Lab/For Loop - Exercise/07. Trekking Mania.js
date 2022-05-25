function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++
    let peopleInGrup = 0;
    let mussalaCounter = 0;
    let monblanCounter = 0;
    let kilimandjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let allPeople = 0;
    let peopleForMussala = 0;
    let peopleForMonblan = 0;
    let peopleForKilimadjaro = 0;
    let peopleForK2 = 0;
    let peopleForEverest = 0;
    for (let i = 0; i < groupCount; i++) {
        peopleInGrup = Number(input[index])
        index++
        if (peopleInGrup <= 5) {
            mussalaCounter++
            peopleForMussala += peopleInGrup;
        } else if (peopleInGrup <= 12) {
            monblanCounter++
            peopleForMonblan += peopleInGrup;
        } else if (peopleInGrup <= 25) {
            kilimandjaroCounter++
            peopleForKilimadjaro += peopleInGrup;
        } else if (peopleInGrup <= 40) {
            k2Counter++
            peopleForK2 += peopleInGrup;
        } else {
            everestCounter++
            peopleForEverest += peopleInGrup
        }
        allPeople += peopleInGrup
    }
    let mussalaInPercent = peopleForMussala / allPeople * 100;
    let monblanInPercent = peopleForMonblan / allPeople * 100;
    let kilimandjaroInPercent = peopleForKilimadjaro / allPeople * 100;
    let k2InPercent = peopleForK2 / allPeople * 100;
    let everestInPercent = peopleForEverest / allPeople * 100;
    console.log(`${mussalaInPercent.toFixed(2)}%`);
    console.log(`${monblanInPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroInPercent.toFixed(2)}%`);
    console.log(`${k2InPercent.toFixed(2)}%`);
    console.log(`${everestInPercent.toFixed(2)}%`)

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
