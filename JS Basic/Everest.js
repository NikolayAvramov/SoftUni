function everest(input){
    let index = 0;
    let comand = input[index];
    index++
    let dayCounter = 1;
    let goal = 8848;
    let tempHight = 5364;
    while(comand !== "END"){
        let sleepOrNot = comand;
        let meter = Number(input[index]);
        index++;
        if(sleepOrNot == "Yes"){
            dayCounter++;
        }
        
        if (tempHight >= goal){
            console.log(`Goal reached for ${dayCounter} days!`);
            break;
        }
        if (dayCounter > 5){
            console.log(`Failed!`);
            console.log(tempHight);
            break;
        }
        tempHight += meter;
        comand = input[index];
        index++
    }
    if(comand === "END"){
        if(tempHight > goal){
            console.log(`Goal reached for ${dayCounter} days!`); 
        } else {
            console.log(`Failed!`);
            console.log(tempHight);
        }
    }
}
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
