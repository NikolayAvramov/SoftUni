function vacantionBookList(input) {
    const numberPages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const daysToRead = Number(input[2]);
    const hoursNeeded = numberPages / pagesPerHour;
    const hoursPerDay = hoursNeeded / daysToRead;
    console.log(hoursPerDay)
}

vacantionBookList(["212", "20", "2"])