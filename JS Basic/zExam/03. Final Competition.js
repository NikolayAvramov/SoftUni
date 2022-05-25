function finalCompetition(input){
    let dancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let money = 0;
    switch(place){
        case "Bulgaria":
        money = points * dancer;
        if(season == "summer"){
            money *= 0.95;
        } else {
            money *= 0.92;
        }
        break;
        case "Abroad":
            money = points * dancer;
            money += money / 2;
            if(season == "summer"){
                money *= 0.90;
            } else {
                money *= 0.85;
            }
            break;
    }
    let chairtyMoney = money * 0.75
    let moneyPerDancer = (money - chairtyMoney) / dancer
console.log(`Charity - ${chairtyMoney.toFixed(2)}`)
console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`)
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])
