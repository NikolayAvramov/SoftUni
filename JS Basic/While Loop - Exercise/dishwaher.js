function dishwasher(input) {
    let index = 0;
    let detergent = Number(input[index]);
    index++
    let detergentInMl = detergent * 750;
     let dishCounter = 0
     let potsCounter = 0
     let dayCounter = 0
     let comand = input[index]
     index++
    while(comand !== "End"){
        dayCounter++
        let NumOfDishOrPots = Number(comand)
        if (dayCounter === 3){
            dayCounter = 0;
            potsCounter += NumOfDishOrPots;
            detergentInMl -= NumOfDishOrPots * 15;
        } else {
            dishCounter += NumOfDishOrPots;
            detergentInMl -= NumOfDishOrPots * 5
        }
            if(detergentInMl < 0){
                console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`)
                break;

            }

        comand = input[index];
        index++
      }
      if(comand === "End"){
          console.log(`Detergent was enough!`);
          console.log(`${dishCounter} dishes and ${potsCounter} pots were washed.`);
          console.log(`Leftover detergent ${detergentInMl} ml.`)
      }

}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30,
])