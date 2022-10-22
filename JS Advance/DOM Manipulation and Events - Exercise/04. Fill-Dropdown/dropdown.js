function addItem() {
	let texta = document.querySelector("#newItemText").value;
	let valuea = document.getElementById("newItemValue").value;
	let option = document.createElement("option");
	option.textContent = texta + valuea;
	let select = document.getElementById("menu");
	select.appendChild(option);
	document.querySelector("#newItemText").value = "";
	document.getElementById("newItemValue").value = "";
}
