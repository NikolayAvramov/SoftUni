function readingHours(pages, pph, days) {
  let totalHoursNeeded = pages / pph;
  let hoursPerDay = totalHoursNeeded / days;
  console.log(hoursPerDay);
}
readingHours(212, 20, 2);
readingHours(432, 15, 4);
