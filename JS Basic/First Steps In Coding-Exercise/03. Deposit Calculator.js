function depositCalculator(input) {
    const deposit = Number(input[0]);
    const depositTime = Number(input[1]);
    const percentagePerYear = Number(input[2]) / 100;
    const sumOfIncreasePerYear = deposit * percentagePerYear;
    const sumOfIncreasePerMonth = sumOfIncreasePerYear / 12;
    const sumAtTheEnd = deposit + (sumOfIncreasePerMonth * depositTime);
    console.log(sumAtTheEnd);
}

depositCalculator(["200", "3", "5.7"])