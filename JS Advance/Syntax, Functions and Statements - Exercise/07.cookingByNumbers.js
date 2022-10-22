function cookingByNum(...param) {
	let input = [...param];
	let result = Number(input.shift());
	for (let el of input) {
		switch (el) {
			case "chop":
				result /= 2;
				console.log(result);
				break;
			case "dice":
				result = Math.sqrt(result);
				console.log(result);
				break;
			case "spice":
				result += 1;
				console.log(result);
				break;
			case "bake":
				result *= 3;
				console.log(result);
				break;
			case "fillet":
				result -= result * 0.2;
				console.log(result);
				break;
		}
	}
}
cookingByNum("32", "chop", "chop", "chop", "chop", "chop");
cookingByNum("9", "dice", "spice", "chop", "bake", "fillet");
