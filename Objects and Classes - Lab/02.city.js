function cityInfo(cityInfoObject) {
  let keys = Object.keys(cityInfoObject);
  for (let key of keys) {
    console.log(`${key} -> ${cityInfoObject[key]}`);
  }
}
cityInfo({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
