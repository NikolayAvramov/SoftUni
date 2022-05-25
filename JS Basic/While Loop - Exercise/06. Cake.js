function cake(input) {
    let index = 0;
    let cakeWide = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    index++;
    let onePeaceCake = 1 * 1;
    let peaceOfCakeAre = (cakeWide * cakeLength) / onePeaceCake;
    let isEnough = true;
    let comand = (input[index]);
    while (peaceOfCakeAre !== 0) {

        comand = input[index]

        if (comand == "STOP") {
            console.log(`${peaceOfCakeAre} pieces are left.`)
            isEnough = true
            break;
        }
        comand = Number(input[index])
        peaceOfCakeAre -= comand
        index++

        if (peaceOfCakeAre <= 0) {
            peaceOfCakeAre = Math.abs(peaceOfCakeAre);
            console.log(`No more cake left! You need ${peaceOfCakeAre} pieces more.`)
            break;
        }
    }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
