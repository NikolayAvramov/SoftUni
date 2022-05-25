function housePainting(input) {
    let literGreenPaint = 3.4;
    let literRedPaint = 4.3;
    let height = Number(input[0]);
    let length = Number(input[1]);
    let roofHigh = Number(input[2]);
    //steni
    let door = 1.2 * 2;
    let window = 1.5 * 1.5;
    let frontAndBackSide = (height * height) * 2;
    frontAndBackSide -= door;
    let oderSides = (height * length) * 2;
    oderSides -= window * 2;
    let greenPaintNeeded = (frontAndBackSide + oderSides) / literGreenPaint;
    // pokriv
    let twoSide = (length * height) * 2;
    let triangleSide = (height * roofHigh) / 2;
    triangleSide *= 2;
    let redPaintNeeded = (twoSide + triangleSide) / literRedPaint;
    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));
}
housePainting(["6","10","5.2"])