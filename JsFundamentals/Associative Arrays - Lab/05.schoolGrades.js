function schoolGrade(input) {
  let result = new Map();
  let unsortedNames = [];
  for (let line of input) {
    let name = line.split(" ").shift();

    unsortedNames.push(name);
  }
  let sorted = unsortedNames.sort((nameA, nameB) => nameA.localeCompare(nameB));
  for (let name of sorted) {
    result.set(name, 0);
  }
  for (let line of input) {
    let name = line.split(" ").shift();
    let grades = line.split(" ").splice(1);
    if (!result.has(name)) {
      result.set(name, grades);
    } else {
      let oldGrades = result.get(name);
      let newGraddes = oldGrades + "," + grades;
      result.set(name, newGraddes);
    }
  }
  for (let [name, grades] of result) {
    let gradesArr = Array.from(grades.split(",").splice(1));
    let sum = 0;
    for (let grade of gradesArr) {
      sum += Number(grade);
    }
    let avgGrade = sum / gradesArr.length;
    result.set(name, avgGrade.toFixed(2));
  }
  for (let [name, value] of result) {
    console.log(`${name}: ${value}`);
  }
}
schoolGrade(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
