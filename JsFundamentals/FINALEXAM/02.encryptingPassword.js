function encryptingPass(input) {
  let passCount = input.shift();
  let pattern =
    /([^"]+)>(?<nums>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<excepted>[^<>]{3})<\1/;
  for (let i = 0; i < passCount; i++) {
    let currPass = input[i];
    let match = pattern.exec(currPass);
    if (match !== null) {
      let firstPart = match.groups['nums'];
      let secPart = match.groups['lower'];
      let thirdPart = match.groups['upper'];
      let fourthPart = match.groups['excepted'];

      let pass = firstPart + secPart + thirdPart + fourthPart;
      console.log(`Password: ${pass}`);
    } else {
      console.log(`Try another password!`);
    }
  }
}
encryptingPass([
  '3',
  '##>00|no|NO|!!!?<###',
  '##>123|yes|YES|!!!<##',
  '$$<111|noo|NOPE|<<>$$',
]);
