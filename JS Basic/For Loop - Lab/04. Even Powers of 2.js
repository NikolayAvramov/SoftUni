function evenPowersOf2(input) {
    const num = Number(input[0]);

    for(let i = 0; i <= num; i += 2) {
        console.log(Math.pow(2,i))
    }
}
evenPowersOf2(["5"])