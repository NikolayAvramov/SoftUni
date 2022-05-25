function vegetableMarket(input) {
    let euro = 1.94;
    let veggiePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let veggiekg = Number(input[2]);
    let fruitkg = Number(input[3]);
    let veggieTotalPrice = veggiePrice * veggiekg;
    let fruitTotalPrice = fruitPrice * fruitkg;
    let totalPriceBGN = veggieTotalPrice + fruitTotalPrice;
    let totalPriceEuro = totalPriceBGN / euro;
    console.log(totalPriceEuro.toFixed(2));
}
vegetableMarket(["0.194","19.4","10","10"])