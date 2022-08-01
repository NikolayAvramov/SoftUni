function barIncome(data) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quanity>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+?)\$/gm;
  let matches = pattern.exec(data);
  let totalIncome = 0;
  while (matches !== null) {
    let name = matches.groups['name'];
    let product = matches.groups['product'];
    let quanity = matches.groups['quanity'];
    let price = matches.groups['price'];
    let totalPrice = Number(quanity) * Number(price);
    console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    matches = pattern.exec(data);
    totalIncome += totalPrice;
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift',
]);
