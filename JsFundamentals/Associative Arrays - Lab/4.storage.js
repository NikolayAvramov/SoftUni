function storage(input) {
  let obj = {};
  for (let element of input) {
    let [product, quantity] = element.split(" ");
    if (obj.hasOwnProperty(product)) {
      let oldQuantity = Number(obj[product]);
      obj[product] = oldQuantity + Number(quantity);
    } else {
      obj[product] = Number(quantity);
    }
  }
  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
