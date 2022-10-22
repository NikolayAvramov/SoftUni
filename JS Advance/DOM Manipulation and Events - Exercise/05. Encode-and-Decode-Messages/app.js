function encodeAndDecodeMessages() {
	let buttons = document.querySelectorAll("button");
	let encodeBtn = buttons[0].addEventListener("click", encode);
	let decodeBtn = buttons[1].addEventListener("click", decode);
	let textAreas = document.querySelectorAll("textarea");

	function encode(event) {
		let text = event.target.parentElement.children[1].value;
		let newText = "";
		for (let i = 0; i < text.length; i++) {
			let ch = text[i].charCodeAt();
			newText += String.fromCharCode(ch + 1);
		}
		let result = textAreas[1];
		result.value = newText;
		let enterTextArea = textAreas[0];
		enterTextArea.value = "";
	}
	function decode(event) {
		let text = event.target.parentElement.children[1].value;
		let decodedText = "";
		for (let i = 0; i < text.length; i++) {
			let ch = text[i].charCodeAt();
			decodedText += String.fromCharCode(ch - 1);
		}
		let resultArea = textAreas[1];
		resultArea.value = decodedText;
	}
}
