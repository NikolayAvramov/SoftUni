function valueOfString(input) {
    let text = input.shift();
    let comand = input.shift();
    let lowerCasePattern = /[a-z]/gm;
    let upperCasePattern = /[A-Z]/gm;
    let sum = 0
    let currText = ""
    if (comand == "LOWERCASE") {
        currText = text.match(lowerCasePattern)
        for (let char of currText) {
            sum += char.charCodeAt()
        }
    } else {
        currText = text.match(upperCasePattern)
        for (let char of currText) {
            sum += char.charCodeAt()
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
)