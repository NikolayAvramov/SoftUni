function asciiSimolator(input) {
    let firstChar = input[0]
    let secChar = input[1]
    let string = input[2]
    let firstIndex = Math.min(firstChar.charCodeAt(), secChar.charCodeAt())
    let lastIndex = Math.max(firstChar.charCodeAt(), secChar.charCodeAt())
    let sum = 0

    for (let char of string) {
        if (char.charCodeAt() > firstIndex && char.charCodeAt() < lastIndex) {
            sum += char.charCodeAt()
        }
    }

    console.log(sum);
}
asciiSimolator(['.',
    '@',
    'dsg12gr5653feee5']
)
console.log(`------------`);;
asciiSimolator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)