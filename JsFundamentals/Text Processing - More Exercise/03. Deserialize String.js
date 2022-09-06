function deserializeString(input) {
    let text = []
    for (let line of input) {
        if (line == "end") {
            break;
        }
        let [letter, indexes] = line.split(":")
        let indexArr = indexes.split("/")
        for (let index of indexArr) {
            index = +index
            text[index] = letter
        }
    }
    console.log(text.join(""));
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)