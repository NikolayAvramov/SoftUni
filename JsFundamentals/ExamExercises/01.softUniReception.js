function softUniRecepcion(arr) {
  let firstRecepcionist = Number(arr.shift());
  let secondRecepcionist = Number(arr.shift());
  let thirdRecepcionist = Number(arr.shift());
  let student = Number(arr.shift());
  let time = 0;
  let employeesStudentPerHour =
    firstRecepcionist + secondRecepcionist + thirdRecepcionist;

  while (student > 0) {
    student -= employeesStudentPerHour;
    time++;

    if (time % 4 === 0) {
      time++;
    }
  }
  console.log(`Time needed: ${time}h.`);
}
softUniRecepcion(["1", "2", "3", "45"]);
