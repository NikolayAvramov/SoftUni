function summerOutfit(input) {
    const degree = Number(input[0]);
    const timeOfDay = input[1];
    
    if(degree <= 18){
        switch(timeOfDay){
            case "Morning": console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if(degree <= 24) {
        switch(timeOfDay){
            case "Morning": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    } else if(degree >= 25) {
        switch(timeOfDay){
            case "Morning": console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`); break;
            case "Afternoon": console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`); break;
            case "Evening": console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`); break;
        }
    }
}
summerOutfit(["11","Morning"])