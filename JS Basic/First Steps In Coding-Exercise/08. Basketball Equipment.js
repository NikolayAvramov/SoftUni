function basketballEquipment(input) {
    const taxForYear = Number(input[0]);
    const basketballSneakers = taxForYear - (taxForYear * 0.40);
    const basketballSuit = basketballSneakers - (basketballSneakers * 0.20);
    const basketballBall = basketballSuit / 4;
    const basketballAcc = basketballBall / 5;
    const totalPrice = taxForYear + basketballSneakers + basketballSuit + basketballBall + basketballAcc;
    console.log(totalPrice)
}

basketballEquipment(["365"])