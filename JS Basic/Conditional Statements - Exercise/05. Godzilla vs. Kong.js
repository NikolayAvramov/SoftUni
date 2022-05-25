function movie(input) {
   let budget = Number(input[0]);
   let statist = Number(input[1]);
   let clotherPerStaist = Number(input[2]);
   let decor = budget * 0.10;
   let clotherPrice = statist * clotherPerStaist;

    if(statist > 150) {
         clotherPrice *= 0.90;
    }

    let needetMoney = decor + clotherPrice;
    let moneyLeft = Math.abs(budget - needetMoney);

    if(needetMoney <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`)
    }

}
movie(["9587.88","222","55.68"])


