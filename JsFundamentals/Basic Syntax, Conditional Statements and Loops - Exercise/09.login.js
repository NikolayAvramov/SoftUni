function login(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let password = "";
  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }
  let temPass = input[index];
  let wrongTry = 1;
  while (temPass != password) {
    wrongTry++;
    console.log("Incorrect password. Try again.");

    if (wrongTry > 3) {
      console.log(`User ${userName} blocked!`);
      break;
    }

    index++;
    temPass = input[index];
  }
  if (temPass === password) {
    console.log(`User ${userName} logged in.`);
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
