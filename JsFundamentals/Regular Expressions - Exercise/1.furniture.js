function funiture(data) {
  let text = data.join(' ');
  let pattern = />>(?<item>\w+)<<(?<price>\d+[\.]\d+|\d+)!(?<quanity>\d+)/gm;
  let sum = 0;
  let matches = pattern.exec(text);
  console.log('Bought furniture:');
  while (matches !== null) {
    let item = matches.groups['item'];
    let price = matches.groups['price'];
    let quanity = matches.groups['quanity'];
    sum += Number(price) * Number(quanity);
    console.log(item);
    matches = pattern.exec(data);
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
funiture([
  '>>Laptop<<312.2323!3',
  '>>TV<<300.21314!5',
  '>Invalid<<!5',
  '>>TV<<300.21314!20',
  '>>Invalid<!5',
  '>>TV<<30.21314!5',
  '>>Invalid<<!!5',
  'Purchase',
]);
