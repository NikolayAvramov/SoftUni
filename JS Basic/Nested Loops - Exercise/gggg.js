function cinemaTicket(input) {
    let index = 0;
    let comand = input[index];
    index++
    let stadardCounter = 0;
    let studentCounter = 0;
    let kidCounter = 0;


    while (comand !== "Finish") {
        let seats = Number(input[index]);
        index++
        let freeSpace = seats;
        let percentFull = 0
       
        let type = input[index]
        console.log(type)
        while (type !== "End"){
        
            if (type === "standard") {
                freeSpace--
                stadardCounter++
                index++

            } else if (type === "student") {
                freeSpace--
                studentCounter++
                index++

            } else if (type === "kid") {
                freeSpace--
                kidCounter++
                index++
            } else if (type === "End") {
                percentFull = (seats - freeSpace) / seats * 100
                console.log(`${comand} ${percentFull}`)
                break;
            }
                index++
            
type = input[index]
        }

        index++
    }

}
cinemaTicket(["Taxi",
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
