function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++

    for (let i = 0; i < openTabs; i++) {
        let tabs = (input[index]);
        index++
        if (tabs === "Facebook") {
            salary -= 150;
        } else if (tabs === "Instagram") {
            salary -= 100;
        } else if (tabs === "Reddit") {
            salary -= 50;
        } 
        
        if (salary <= 0) {
            console.log(`You have lost your salary.`); break;
        }

    }

    if (salary > 0) {
        console.log(salary.toFixed(0))
    }
}

salary(["1",
"500",
"Facebook",])

