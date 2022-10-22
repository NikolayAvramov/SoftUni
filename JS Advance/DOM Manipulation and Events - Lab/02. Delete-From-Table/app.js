function deleteByEmail() {
	let match = document.getElementsByName("email")[0].value;
	let arr = document.querySelectorAll("table tbody tr td");
	for (let i = 1; i < arr.length; i += 2) {
		if (arr[i].textContent === match) {
			let row = arr[i];
			row.parentElement.remove();
		}
	}
	document.getElementsByName("email")[0].value = "";
}
