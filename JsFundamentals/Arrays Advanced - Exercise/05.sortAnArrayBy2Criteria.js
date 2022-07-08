function sortingByTwoCriteria(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  sortedArr.forEach((element) => {
    console.log(element);
  });
}
sortingByTwoCriteria(["alpha", "beta", "gamma"]);
