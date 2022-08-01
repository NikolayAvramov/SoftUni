function adAstra(input) {
  let foodArr = [];
  let pattern =
    /(\||#)(?<product>[A-z][a-z]+( [A-Z][a-z]+)?)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,4})\1/g;
  let matches = pattern.exec(input);
  let totalCalories = 0;
  while (matches !== null) {
    let item = matches.groups['product'];
    let bestBefore = matches.groups['date'];
    let calories = matches.groups['calories'];
    totalCalories += Number(calories);
    foodArr.push({ product: item, date: bestBefore, calories: calories });
    matches = pattern.exec(input);
  }
  let daysLeft = Math.trunc(totalCalories / 2000);
  console.log(`You have food to last you for: ${daysLeft} days!`);
  for (let item of foodArr) {
    console.log(
      `Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.calories}`
    );
  }
}
adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
