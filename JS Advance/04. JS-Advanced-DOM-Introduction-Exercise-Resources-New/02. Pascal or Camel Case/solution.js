function solve() {
	let text = document.getElementById("text").value;
	let type = document.getElementById("naming-convention").value;
	let textArr = text.split(" ");
	let result = [];
	switch (type) {
		case "Camel Case":
			for (let words = 0; words < textArr.length; words++) {
				if (words == 0) {
					result.push(textArr[words].toLocaleLowerCase());
				} else {
					textArr[words] = textArr[words].toLowerCase();
					let afterWords = textArr[words].split("");
					afterWords[0] = afterWords[0].toUpperCase();
					result.push(afterWords.join(""));
				}
				document.getElementById("result").textContent = result.join("");
			}
			break;
		case "Pascal Case":
			for (let words = 0; words < textArr.length; words++) {
				textArr[words] = textArr[words].toLowerCase();
				let pascalCase = textArr[words].split("");
				pascalCase[0] = pascalCase[0].toUpperCase();
				result.push(pascalCase.join(""));
			}
			document.getElementById("result").textContent = result.join("");

			break;
		default:
			document.getElementById("result").textContent = "Error!";
	}
}
