function storeProvision(stockArr, newStock) {
  let shopstock = {};
  for (let i = 0; i < stockArr.length; i += 2) {
    let product = stockArr[i];
    let quanity = Number(stockArr[i + 1]);
    shopstock[product] = quanity;
  }
  for (let j = 0; j < newStock.length; j += 2) {
    let product = newStock[j];
    let quanity = Number(newStock[j + 1]);
    if (!shopstock.hasOwnProperty(product)) {
      shopstock[product] = quanity;
    } else {
      shopstock[product] += quanity;
    }
  }
  let keys = Object.keys(shopstock);
  for (let key of keys) {
    console.log(`${key} -> ${shopstock[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
