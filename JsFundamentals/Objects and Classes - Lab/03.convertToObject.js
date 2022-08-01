function objectConverter(JsonString) {
  let obj = JSON.parse(JsonString);
  let keys = Object.keys(obj);
  for (let key of keys) {
    console.log(`${key}: ${obj[key]}`);
  }
}
objectConverter('{"name": "George", "age": 40, "town": "Sofia"}');
