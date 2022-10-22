function solve() {
	let text = document.getElementById("input").value;
	let sentencesArr = text.split(".");
	let resArr = [];

	for (let i = 0; i < sentencesArr.length; i += 3) {
		let paragraph = `<p>`;
		if (sentencesArr[i].length > 0) {
			for (let s = 0; s < 3; s++) {
				if (sentencesArr.length > s + i) {
					if (sentencesArr.length - 1 == s + i) {
						paragraph += sentencesArr[s + i];
					} else {
						paragraph += sentencesArr[s + i] + ".";
					}
				}
			}
			paragraph += `</p>`;
			resArr.push(paragraph);
		}
	}

	document.getElementById("output").innerHTML = resArr.join("");
}
