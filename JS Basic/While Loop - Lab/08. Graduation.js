function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++
    let excldedConter = 0;
    let avgGrade = 0;
    let sumGrade = 0;
    let isExcluded = false
    let clas = 1
    while (clas !== 13) {
        if (grade < 4) {
            excldedConter++
            grade = Number(input[index++])
            continue;
        }
        if (excldedConter > 1) {
            console.log(`${name} has been excluded at ${clas} grade`);
            isExcluded = true;
            break;

        }
        sumGrade += grade;
        avgGrade = sumGrade / 12
        clas++;
        grade = Number(input[index]);
        index++;
    }
    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }

}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
