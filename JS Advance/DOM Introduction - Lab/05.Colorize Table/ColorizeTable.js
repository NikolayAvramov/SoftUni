function colorize() {
	let arr = Array.from(document.querySelectorAll("tbody tr"));

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			arr[i].style.backgroundColor = "Teal";
		}
	}
}
