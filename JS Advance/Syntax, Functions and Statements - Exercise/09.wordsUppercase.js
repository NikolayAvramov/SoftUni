function wordsUpercase(text) {
	let pattern = /\w+/gm;
	let textArr = text.match(pattern);
	textArr = textArr.map((el) => el.toUpperCase());
	console.log(textArr.join(", "));
}
wordsUpercase("Hi, how are you?");
