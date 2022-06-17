function loadingBar(percent) {
  let loadetIteration = percent / 10;
  let donePercents = [];
  let stilLoading = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= loadetIteration) {
      donePercents.push("%");
    } else {
      stilLoading.push(".");
    }
  }
  if (donePercents.length == 10) {
    console.log(`${percent}% Complete!`);
    console.log(`[${donePercents.join("")}]`);
  } else {
    console.log(
      `${percent}% [${donePercents.join("")}${stilLoading.join("")}]`
    );
    console.log(`Still loading...`);
  }
}
loadingBar(100);
loadingBar(10);
loadingBar(40);
