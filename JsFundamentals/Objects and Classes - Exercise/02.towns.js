function town(arr) {
  for (let token of arr) {
    let town = {};
    let [name, latitude, longitude] = token.split(" | ");
    town.town = name;
    town.latitude = Number(latitude).toFixed(2);
    town.longitude = Number(longitude).toFixed(2);
    console.log(town);
  }
}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
