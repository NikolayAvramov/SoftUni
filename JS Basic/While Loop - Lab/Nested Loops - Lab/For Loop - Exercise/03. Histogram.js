function histogram(input) {
    let index = 0;
    let nums = Number(input[index])
    index++
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= nums; i++) {
        let num = Number(input[i])

        if (num < 200) {
            p1Counter++
        } else if (num >= 200 && num <= 399) {
            p2Counter++
        } else if (num >= 400 && num <= 599) {
            p3Counter++
        } else if (num >= 600 && num <= 799) {
            p4Counter++
        } else {
            p5Counter++
        }
    }
    let p1InPercent = p1Counter / nums * 100;
    let p2InPercent = p2Counter / nums * 100;
    let p3InPercent = p3Counter / nums * 100;
    let p4InPercent = p4Counter / nums * 100;
    let p5InPercent = p5Counter / nums * 100;

    console.log(`${p1InPercent.toFixed(2)}%`);
    console.log(`${p2InPercent.toFixed(2)}%`);
    console.log(`${p3InPercent.toFixed(2)}%`);
    console.log(`${p4InPercent.toFixed(2)}%`);
    console.log(`${p5InPercent.toFixed(2)}%`);

}
histogram(["3",
    "1",
    "2",
    "999"])
