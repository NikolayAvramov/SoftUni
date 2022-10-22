function extractText() {
	let arr = Array.from(document.querySelectorAll("ul li"));
	let res = "";
	for (let el of arr) {
		res += `${el.textContent}\n`;
	}
	document.getElementById("result").textContent = res;
}
