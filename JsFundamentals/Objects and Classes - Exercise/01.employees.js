function employee(arr) {
  let arrOfNames = [];

  for (let name of arr) {
    let obj = {};
    let presonalNum = name.length;
    obj.name = name;
    obj.presonalNum = presonalNum;
    arrOfNames.push(obj);
  }
  for (let employee of arrOfNames) {
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.presonalNum}`
    );
  }
}
employee([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
