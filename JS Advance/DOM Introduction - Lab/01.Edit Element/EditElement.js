function editElement(text, match, replacer) {
	let element = text.textContent;
	let result = element.split(match).join(replacer);
	text.textContent = result;
}
