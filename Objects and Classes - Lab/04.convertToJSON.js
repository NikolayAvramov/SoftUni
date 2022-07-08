function convertToJSON(name, lastName, hairColor) {
  let personObj = {
    name,
    lastName,
    hairColor,
  };
  let string = JSON.stringify(personObj);
  console.log(string);
}
convertToJSON("George", "Jones", "Brown");
