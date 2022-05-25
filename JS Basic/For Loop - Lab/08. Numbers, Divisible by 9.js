function numberDivisibleBy9(input) {
    let index = 0;
    let startNumber = Number(input[index]);
    index++
    let finalNumber = Number(input[index]);
    index++
    let sum = 0;
    let res = "";

    for (let i = startNumber; i <= finalNumber; i++) {
        let num = Number(i)
        if (num % 9 === 0) {
            sum += num
            res += `${i}\n`
        }


    }
    console.log(`The sum: ${sum}`);
    console.log(res)

  //  for (let i = startNumber; i <= finalNumber; i++) {
    //    let num = Number(i)
      //  if (num % 9 === 0) {
        //    console.log(num)
       // }
  // }
}
numberDivisibleBy9(["100", "200"])