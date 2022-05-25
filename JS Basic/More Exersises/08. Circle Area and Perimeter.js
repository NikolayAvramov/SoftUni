function circle(input) {
    const r = Number(input[0]);
    let s = Math.PI * r * r;
    let p = 2 * Math.PI * r;
    console.log(s.toFixed(2));
    console.log(p.toFixed(2));
}
circle(["3"])