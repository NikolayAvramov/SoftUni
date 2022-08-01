function oddOccurrence(input) {
  let map = new Map();
  let stringAsArr = input.split(" ");
  for (let token of stringAsArr) {
    let el = token.toLowerCase();
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      let oldValue = map.get(el);
      map.set(el, oldValue + 1);
    }
  }
  let resArr = [];
  for (let [element, value] of map) {
    if (value % 2 == 0) {
      map.delete(element);
    } else {
      resArr.push(element);
    }
  }
  console.log(resArr.join(" "));
}
oddOccurrence("Cake IS SWEET is Soft CAKE sweet Food");
