function ages(num) {
  let bounder = "";
  if (num < 0) {
    bounder = "out of bounds";
  } else if (num <= 2) {
    bounder = "baby";
  } else if (num <= 13) {
    bounder = "child";
  } else if (num <= 19) {
    bounder = "teenager";
  } else if (num <= 65) {
    bounder = "adult";
  } else {
    bounder = "elder";
  }
  console.log(bounder);
}
ages(13);
