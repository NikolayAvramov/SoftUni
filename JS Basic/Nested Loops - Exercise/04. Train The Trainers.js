function trainTheTrainers(input) {
    let index = 0;
    let avgGrade = 0;
    let grades = 0;
    let countOfJurry = Number(input[index]);
    index++;
    let comand = input[index];
    let counter = 0;
    while (comand !== "Finish") {
        let presenationName = input[index];
        let tempAvgGrade = 0;
        index++;
        for (let j = grades; j < countOfJurry; j++) {
            let grades = Number(input[index]);
            tempAvgGrade += grades;
            index++;
        }
        tempAvgGrade /= countOfJurry;
        console.log(`${presenationName} - ${tempAvgGrade.toFixed(2)}.`);
        avgGrade += tempAvgGrade;
        counter++
        comand = input[index];

    }
    avgGrade = avgGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
