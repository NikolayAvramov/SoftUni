function bills(input) {
    let index = 0;
    let monts = Number(input[index]);
    index++;
    let electricity = 0;
    let water = 20;
    let internet = 15;
    let other = 0;
    let internetSum = 0;
    let waterSum = 0;

    for (let i = 1; i <= monts; i++) {
        let elBils = Number(input[index])
        index++
        electricity += elBils;
        waterSum += water;
        internetSum += internet;
        other += (elBils + water + internet) * 1.20

    }
    let avg = (electricity + waterSum + internetSum + other) / monts;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${waterSum.toFixed(2)} lv`);
    console.log(`Internet: ${internetSum.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);

}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])