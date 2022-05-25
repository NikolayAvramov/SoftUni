function centuriesInMin(cent) {
  let years = cent * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let mins = hours * 60;
  console.log(
    `${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`
  );
}
centuriesInMin(1);
centuriesInMin(5);
centuriesInMin(7);
