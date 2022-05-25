function yardGreening(input) {
    let oneSqarePrice = 7.61;
    let yardSize = Number(input[0]);
    let discount = 18 / 100;
    let price = yardSize * oneSqarePrice;
    let totalDiscount = price * discount;
    let finalPrice = price - totalDiscount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${totalDiscount} lv.`);
}

yardGreening(["550"])