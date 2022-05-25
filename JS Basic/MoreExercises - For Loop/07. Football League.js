function footbalLegue(input) {
    let index = 0;
    let stadionCapacity = Number(input[index]);
    index++;
    let numOfFans = Number(input[index]);
    index++
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 0; i < numOfFans; i++) {
        let sector = input[index];
        index++
        switch (sector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }

        let sectorAPercent = sectorA / numOfFans * 100;
        let sectorBPercent = sectorB / numOfFans * 100;
        let sectorVPercent = sectorV / numOfFans * 100;
        let sectorGPercent = sectorG / numOfFans * 100;
        let allFanPercent = numOfFans / stadionCapacity * 100;
        console.log(`${sectorAPercent.toFixed(2)}%`);
        console.log(`${sectorBPercent.toFixed(2)}%`);
        console.log(`${sectorVPercent.toFixed(2)}%`);
        console.log(`${sectorGPercent.toFixed(2)}%`);
        console.log(`${allFanPercent.toFixed(2)}%`);


}
footbalLegue(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B",
])