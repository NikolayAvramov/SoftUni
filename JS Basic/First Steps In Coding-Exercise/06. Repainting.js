function repainting(input) {
    const nylonPerSquare = 1.50;
    const paintPerLiter = 14.50;
    const tinnerPerLiter = 5;
    const bag = 0.40;
    const extraNylon = 2;
    const neededNylon = Number(input[0]);
    const neededPaint = Number(input[1]);
    const needetTinner = Number(input[2]);
    const hoursForJob = Number(input[3]);
    const extraPaint = neededPaint * 0.10;
    const nylonCost = (neededNylon + extraNylon) * nylonPerSquare;
    const paintCost = (neededPaint + extraPaint) * paintPerLiter;
    const tinnerCost = needetTinner * tinnerPerLiter;
    const materialCost = nylonCost + paintCost + tinnerCost + bag;
    const moneyForWorkers = (materialCost * 0.30) * hoursForJob;
    const totalPrice = materialCost + moneyForWorkers;
    console.log(totalPrice);

}

repainting(["10", "11", "4", "8"])