function search() {
	let list = document.querySelectorAll("ul li");
	let townArr = Array.from(list);
	let match = document.getElementById("searchText").value;
	let res = document.getElementById("result");
	let counter = 0;
	for (let i = 0; i < townArr.length; i++) {
		let town = townArr[i].textContent;
		let liItem = list;
		if (match.length > 0) {
			if (town.includes(match)) {
				liItem[i].style.textDecoration = "underline";
				liItem[i].style.fontWeight = "bold";
				counter++;
			} else {
				liItem[i].style.textDecoration = "none";
				liItem[i].style.fontWeight = "normal";
			}
		} else {
			return;
		}
	}
	res.textContent = `${counter} matches found`;
}
