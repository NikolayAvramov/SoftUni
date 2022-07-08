function listOfProduct(list) {
  let sortedList = list.sort();
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList.includes(sortedList[i]))
      console.log(`${i + 1}.${sortedList[i]}`);
  }
}
listOfProduct(["Potatoes", "Tomatoes", "Onions", "Apples", "apple"]);
