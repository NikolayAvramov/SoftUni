class List {
	constructor() {
		this.res = [];
		this.size = this.res.length;
	}
	add(value) {
		this.res.push(value);
		this.res.sort((a, b) => a - b);
		this.size = this.res.length;
	}
	remove(index) {
		if (index < 0 || index >= this.res.length) {
			throw new Error("Invalid Index !");
		}
		this.res.splice(index, 1);
		this.size = this.res.length;
	}
	get(index) {
		if (index < 0 || index >= this.res.length) {
			throw new Error("Invalid Index !");
		}
		return this.res[index];
	}
}
let list = new List();
list.add(5);
list.add(6);
console.log(list);
