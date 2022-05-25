function examPreparation(input) {
    let index = 0;
    let limitPoorGrade = Number(input[index]);
    index++;
    let poorGradesCounter = 0;
    let nextProblem = input[index];
    index++;
    let grade = Number(input[index++]);
    let lastProblem = "";
    let sumGrade = 0;
    let avgGrade = 0;
    let problemCounter = 0;
    let isReadyForExam = true

    while (nextProblem !== "Enough") {
        if (grade <= 4) {
            poorGradesCounter++
        } else if (poorGradesCounter >= limitPoorGrade) {
            console.log(`You need a break, ${poorGradesCounter} poor grades.`)
            isReadyForExam = false
            break;
        }
        sumGrade += grade
        lastProblem = nextProblem
        problemCounter++
        nextProblem = input[index];
        index++
        grade = Number(input[index]);
        index++

    }
    avgGrade = (sumGrade / problemCounter).toFixed(2)
    if (isReadyForExam) {
        console.log(`Average score: ${avgGrade}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`)
    }

}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
