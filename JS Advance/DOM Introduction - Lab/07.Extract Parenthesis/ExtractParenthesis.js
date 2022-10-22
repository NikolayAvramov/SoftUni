function extract() {
	let fullText = document.getElementById("content").textContent;
	let resultArr = [];
	let pattern = /\((?<name>(\w+\s*)+?)\)/gm;
	let matches = pattern.exec(fullText);
	while (matches !== null) {
		let name = matches.groups["name"];
		resultArr.push(name);
		matches = pattern.exec(fullText);
	}

	let text = resultArr.join("; ");
	console.log(text);
	return text;
}
