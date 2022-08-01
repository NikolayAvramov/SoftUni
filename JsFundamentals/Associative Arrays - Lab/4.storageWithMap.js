function storage(input) {
  let result = new Map();

  for (let line of input) {
    let [product, quantity] = line.split(" ");
    if (!result.has(product)) {
      result.set(product, Number(quantity));
    } else {
      let oldQuantity = result.get(product);
      result.set(product, oldQuantity + Number(quantity));
    }
  }
  for (let [key, value] of result) {
    console.log(`${key} -> ${value}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
