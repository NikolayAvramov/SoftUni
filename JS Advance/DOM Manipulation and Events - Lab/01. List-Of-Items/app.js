function addItem() {
	let list = document.getElementById("items");
	let input = document.getElementById("newItemText");
	let liItem = document.createElement("li");

	liItem.textContent = input.value;
	list.appendChild(liItem);
	input.value = "";
}
