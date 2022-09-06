function gladiatorExpenses(
    losts,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
) {
    let totalCost = 0;
    let currLost = 0;
    for (let i = 1; i <= losts; i++) {
        currLost++;
        if (currLost % 2 == 0) {
            totalCost += helmetPrice;
        }
        if (currLost % 3 == 0) {
            totalCost += swordPrice;
        }
        if (currLost % 6 == 0) {
            totalCost += shieldPrice;
        }
        if (currLost % 12 == 0) {
            totalCost += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
