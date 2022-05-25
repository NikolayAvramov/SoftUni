function grades(input) {
    let index = 0;
    let allGradeSum = 0
    let avgGrade = 0;
    let topStudentsInPercent = 0;
    let between4And5InPercent = 0;
    let between3And4InPercent = 0;
    let failInPercent = 0
    let top = 0;
    let good = 0;
    let middle = 0;
    let fail = 0;
    let numOfStudents = Number(input[index]);
    index++
    let grade = Number(input[index])
    for (let i = 1; i <= numOfStudents; i++) {
        grade = Number(input[i]);
        if (grade >= 5) {
            top++
        } else if (grade >= 4) {
            good++
        } else if (grade >= 3) {
            middle++
        } else if (grade < 3) {
            fail++
        }
        allGradeSum += grade

    }

    avgGrade = allGradeSum / numOfStudents;
    topStudentsInPercent = top / numOfStudents * 100;
    between4And5InPercent = good / numOfStudents * 100;
    between3And4InPercent = middle / numOfStudents * 100;
    failInPercent = fail / numOfStudents * 100;
    console.log(`Top students: ${topStudentsInPercent.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${between4And5InPercent.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${between3And4InPercent.toFixed(2)}%`)
    console.log(`Fail: ${failInPercent.toFixed(2)}%`)
    console.log(`Average: ${avgGrade.toFixed(2)}`)

}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])