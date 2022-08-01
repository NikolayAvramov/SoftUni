function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let catsArr = [];
  for (let catData of array) {
    let [name, age] = catData.split(" ");
    let newCat = new Cat(name, age);
    catsArr.push(newCat);
  }
  for (let currentCat of catsArr) {
    currentCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
