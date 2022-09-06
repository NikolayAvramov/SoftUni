function treasureFinder(input) {
    let key = input.shift().split(" ")
    let line = input.shift()
    while (line !== "find") {

        let keyIndex = 0
        let currText = ""
        for (let i = 0; i < line.length; i++) {
            let char = line[i]
            let charNum = char.charCodeAt()
            let numOfNewChar = charNum - key[keyIndex]
            let newChar = String.fromCharCode(numOfNewChar)
            currText += newChar
            keyIndex++
            if (keyIndex == key.length) {
                keyIndex = 0
            }
        }
        let typeStartIndex = currText.indexOf("&") + 1
        let typeLastIndex = currText.lastIndexOf("&")
        let type = currText.slice(typeStartIndex, typeLastIndex)
        let cordinatsStartIndex = currText.indexOf("<") + 1
        let cordinatsLastIndex = currText.lastIndexOf(">")
        let cordinates = currText.slice(cordinatsStartIndex, cordinatsLastIndex)
        console.log(`Found ${type} at ${cordinates}`);
        line = input.shift()
    }
}
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]

)