function traveling(input) {
    let index = 0;
    let comand = input[index];
    while (comand !== "End") {
        while (comand !== String) {

            comand = input[index]
            index++
            let budget = Number(input[index])

            if (comand === "End") {
                break;
            }

            for (let s = 0; s <= budget;) {
                index++
                s += Number(input[index])

                if (s >= budget) {
                    console.log(`Going to ${comand}!`)
                    break;
                }
            }
            index++
        }
    }

}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

