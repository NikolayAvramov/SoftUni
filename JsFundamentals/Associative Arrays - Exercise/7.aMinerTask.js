function aMinerTask(input) {
  let result = new Map();
  for (let i = 0; i < input.length; i += 2) {
    let resorce = input[i];
    let quanity = Number(input[i + 1]);
    if (!result.has(resorce)) {
      result.set(resorce, quanity);
    } else {
      let oldValue = result.get(resorce);
      let newValue = oldValue + quanity;
      result.set(resorce, newValue);
    }
  }
  let entries = Array.from(result);
  for (let [resurse, quanity] of entries) {
    console.log(`${resurse} -> ${quanity}`);
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
