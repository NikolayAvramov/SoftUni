function grade(num) {
  let formated = num.toFixed(2);
  let desk;
  if (num < 3) {
    formated = "2";
    desk = "Fail";
  } else if (num < 3.5) {
    desk = "Poor";
  } else if (num < 4.5) {
    desk = "Good";
  } else if (num < 5.5) {
    desk = "Very good";
  } else {
    desk = "Excellent";
  }
  console.log(`${desk} (${formated})`);
}
grade(3.33);
grade(3.67);
