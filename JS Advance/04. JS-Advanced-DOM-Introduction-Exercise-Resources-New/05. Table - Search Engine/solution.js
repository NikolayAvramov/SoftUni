function solve() {
	document.querySelector("#searchBtn").addEventListener("click", onClick);

	function onClick() {
		let items = Array.from(document.querySelectorAll("tbody tr td"));
		let match = document.getElementById("searchField").value;
		for (let item of items) {
			item.parentElement.classList.remove("select");
		}
		if (match.length > 0) {
			for (let name of items) {
				if (name.textContent.includes(match)) {
					name.parentElement.classList.add("select");
				}
			}
		}

		document.getElementById("searchField").value = "";
	}
}
