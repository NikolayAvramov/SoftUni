function weatherForecast(input) {
    let wether = input[0];
     if(wether == "sunny") {
         console.log(`It's warm outside!`)
     } else {
         console.log(`It's cold outside!`)
     }
}
weatherForecast(["sunny"])
