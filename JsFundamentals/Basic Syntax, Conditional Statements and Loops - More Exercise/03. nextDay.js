function nexyDay(year, month, day) {
  let newYear = 0;
  if (year < 10) {
    let myDate = new Date(year, month, day);
    newYear = myDate.getFullYear();
  } else {
    newYear = year;
  }
  day++;
  if (day > 30) {
    day = 1;
    month++;
  }
  console.log(`${newYear}-${month}-${day}`);
}
nexyDay(2016, 9, 30);
