function order(product, quanity) {
  let totalPrice = 0;
  let coffeePrice = 1.5;
  let waterPrice = 1;
  let cokePrice = 1.4;
  let snacksPrice = 2;
  switch (product) {
    case "coffee":
      totalPrice = quanity * coffeePrice;
      break;
    case "water":
      totalPrice = quanity * waterPrice;
      break;
    case "coke":
      totalPrice = quanity * cokePrice;
      break;
    case "snacks":
      totalPrice = quanity * snacksPrice;
      break;
  }
  console.log(totalPrice.toFixed(2));
}
order("water", 5);
