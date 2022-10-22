function circleArea(arg) {
	if (typeof arg == "number") {
		const area = Math.PI * (arg * arg);
		return area.toFixed(2);
	} else {
		return `We can not calculate the circle area, because we receive a ${typeof arg}.`;
	}
}

console.log(circleArea(5));
console.log(circleArea("name"));
