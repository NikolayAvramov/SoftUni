function inventory(arr) {
  let heroesArr = [];
  for (let element of arr) {
    let [name, level, item] = element.split(" / ");
    heroesArr.push({ Hero: name, level: Number(level), items: item });
  }
  let sortedArrByLevel = heroesArr.sort((a, b) => a.level - b.level);
  for (let hero of sortedArrByLevel) {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
