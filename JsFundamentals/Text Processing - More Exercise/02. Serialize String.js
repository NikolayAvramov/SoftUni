function serializeString(input) {
    let text = input.shift().split("")
    let chars = new Map()
    for (let i = 0; i < text.length; i++) {
        let char = text[i]
        if (!chars.has(char)) {
            chars.set(char, i)
        } else {
            let oldValue = chars.get(char)
            chars.set(char, `${oldValue}/${i}`)
        }
    }
    let res = Array.from(chars)
    res.forEach(el => console.log(`${el[0]}:${el[1]}`))
}
serializeString(["avjavamsdmcalsdm"])