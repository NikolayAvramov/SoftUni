class Point {
	constructor(x, y) {
		(this.x = x), (this.y = y);
	}
	static distance(firstP, secondP) {
		let a = Math.abs(firstP.x - secondP.x);
		let b = Math.abs(firstP.y - secondP.y);
		let c = Math.sqrt(a ** 2 + b ** 2);
		return c;
	}
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
