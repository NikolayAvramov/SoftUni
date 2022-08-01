function companyUsers(input) {
  let result = new Map();
  for (let line of input) {
    let employee = [];
    let [companyName, id] = line.split(' -> ');
    if (!result.has(companyName)) {
      employee.push(id);
      result.set(companyName, employee);
    } else {
      let newArr = result.get(companyName);
      if (!newArr.includes(id)) {
        newArr.push(id);
      }
      result.set(companyName, newArr);
    }
  }
  let sorted = Array.from(result).sort();
  for (let [company, employe] of sorted) {
    console.log(`${company}`);
    for (let people of employe) {
      console.log(`-- ${people}`);
    }
  }
}
companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111',
]);
