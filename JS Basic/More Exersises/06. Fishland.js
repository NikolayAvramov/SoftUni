function fishLand(input) {
    let skumriqPerKg = Number(input[0]);
    let cacaPerKg = Number(input[1]);
    let kgPalmud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);
    let midiPerKg = 7.50;

    let palmudPerKg = skumriqPerKg + (skumriqPerKg * 0.60);
    let safridPerKg = cacaPerKg + (cacaPerKg * 0.80);
    let neededMoney = kgPalmud * palmudPerKg + kgSafrid * safridPerKg + kgMidi * midiPerKg;
    
    console.log(neededMoney.toFixed(2));

}
fishLand(["6.90","4.20","1.5","2.5","1"])