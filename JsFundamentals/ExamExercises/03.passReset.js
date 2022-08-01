function passResset(input) {
  let oldPass = input.shift();
  let index = 0;
  let comand = input[index].split(" ");
  while (comand[0] !== "Done") {
      if (comand[0] === "TakeOdd") {
          let newPass = "";
          for (let i = 0; i < oldPass.length; i++) {
        if (i % 2 !== 0) {
          newPass += oldPass[i];
        }
      }
      oldPass = newPass
      console.log(oldPass);
      index++;
      comand = input[index].split(" ");
    } else if (comand[0] === "Cut") {
      let startIndex = +comand[1];
      let length = +comand[2];
      let cutPice = oldPass.substring(startIndex, startIndex + length);
      oldPass = oldPass.replace(cutPice, "");
      console.log(oldPass);
      index++;
      comand = input[index].split(" ");
    } else if (comand[0] === "Substitute") {
      let substring = comand[1];
      let substitute = comand[2];

      if (oldPass.includes(substring)) {
        oldPass = oldPass.split(substring);
        oldPass = oldPass.join(substitute);
        console.log(oldPass);
      } else {
        console.log("Nothing to replace!");
      }
      index++;
      comand = input[index].split(" ");
    }
  }
  console.log(`Your password is: ${oldPass}`);
}
passResset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
