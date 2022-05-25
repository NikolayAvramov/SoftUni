function cinemaTickets(input) {
    let index = 0;
    let inputLine = input[index];
    let standardCounter = 0
    let studentCounter = 0
    let kidCounter = 0
    
    while (inputLine !== "Finish") {
        let nameMovie = inputLine;
        index++;
         let allTicket = Number(input[index]);
        let freeSpaceInCinema = allTicket
        index++;
        let typeTicket = input[index];
    
        while (typeTicket !== "End") {
            switch (typeTicket) {
                case "standard": standardCounter++;  break;
                case "kid": kidCounter++; break;
                case "student": studentCounter++; break;
            }
           freeSpaceInCinema--;
            if (freeSpaceInCinema === 0) {
                break;
            }

            index++
            typeTicket = input[index];

        }
        let bougthTicket = allTicket - freeSpaceInCinema;
            let percentFull = bougthTicket / allTicket * 100;
            console.log(`${nameMovie} - ${percentFull.toFixed(2)}% full.`);
        index++
        inputLine = input[index];
    }

        let allBougthTicket = standardCounter + studentCounter + kidCounter;
        console.log(`Total tickets: ${allBougthTicket}`);
        console.log(`${(studentCounter / allBougthTicket * 100).toFixed(2)}% student tickets.`)
        console.log(`${(standardCounter / allBougthTicket * 100).toFixed(2)}% standard tickets.`)
        console.log(`${(kidCounter / allBougthTicket * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
