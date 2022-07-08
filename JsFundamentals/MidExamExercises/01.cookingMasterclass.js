function cookingMasterclass(input) {
  let budget = input.shift();
  let studentCount = input.shift();
  let flourPrice = input.shift();
  let eggPrice = input.shift();
  let apronPrice = input.shift();
  let priceForApron = Math.ceil(studentCount * 1.2) * apronPrice;
  let priceForEgg = eggPrice * 10 * studentCount;
  let floorDiscount = Math.trunc(studentCount / 5) * flourPrice;
  let priceForFlour = studentCount * flourPrice - floorDiscount;
  let totalPrice = priceForApron + priceForEgg + priceForFlour;

  if (totalPrice <= budget) {
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
  } else {
    let diff = totalPrice - budget;
    console.log(`${diff.toFixed(2)}$ more needed.`);
  }
}
cookingMasterclass([946, 20, 12.05, 0.42, 27.89]);
