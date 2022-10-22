function sumTable() {
	let arr = Array.from(document.querySelectorAll("table tbody tr"));
	let result = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		result += Number(arr[i].lastChild.textContent);
	}
	document.getElementById("sum").textContent = result;
}
