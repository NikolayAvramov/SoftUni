class Person {
	constructor(name, age, gender) {
		(this.name = name), (this.age = age), (this.gender = gender);
	}
	get name() {
		return "Nikolayc";
	}
	set name(value) {
		if (value !== "Nikolay") {
			throw new Error("Wrong name !");
		}
		this._name = value;
	}
}

let nikolay = new Person("Nikolay", 28, "Male");
console.log(nikolay);
