function vacantion(input) {
    let index = 0;
    let vacantionPrice = Number(input[index]);
    index++
    let money = Number(input[index]);
    index++
    let days = 0;
    let spendCounter = 0;
    let comand = input[index];
    index++
    let value = Number(input[index])
    index++
    while (money < vacantionPrice) {
        switch (comand) {
            case "spend":
                money -= value
                spendCounter++
                if (money <= 0) {
                    money = 0
                }
                break;
            case "save": money += value
                spendCounter = 0;
                break;
        }
        days++
        if (spendCounter >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }

        comand = input[index];
        index++
        value = Number(input[index]);
        index++
    }
    if (money >= vacantionPrice) {
        console.log(`You saved the money for ${days} days.`)
    }
}
vacantion(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
