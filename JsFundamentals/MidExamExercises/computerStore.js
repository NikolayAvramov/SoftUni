function computerStore(arr) {
  let totalPrice = 0;
  let index = 0;
  let line = arr[index];
  while (line != "special" && line != "regular") {
    if (Number(line) < 0) {
      console.log("Invalid price!");
      index++;
      line = arr[index];
      continue;
    } else {
      totalPrice += Number(line);
      index++;
      line = arr[index];
    }
  }
  let taxes = totalPrice * 0.2;
  let totalPriceWithTaxes = totalPrice + taxes;
  if (totalPrice < 1) {
    console.log("Invalid order!");
  } else {
    if (line == "special") {
      totalPriceWithTaxes *= 0.9;
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
  }
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "special",
]);
