function passwordValidator(pass) {
  let charCount = 0;
  let digitsCount = 0;
  let symbols = 0;

  for (let i = 0; i < pass.length; i++) {
    if (pass[i].match(/[a-z]/i)) {
      charCount++;
    } else if (pass[i].match(/[0-9]/i)) {
      digitsCount++;
    } else {
      symbols++;
    }
  }
  if (pass.length < 6 || pass.length > 11) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (symbols > 0) {
    console.log("Password must consist only of letters and digits");
  }
  if (digitsCount < 2) {
    console.log("Password must have at least 2 digits");
  }
  if (symbols == 0 && digitsCount > 1 && pass.length > 5 && pass.length < 11) {
    console.log("Password is valid");
  }
}
passwordValidator("MyPass123");
