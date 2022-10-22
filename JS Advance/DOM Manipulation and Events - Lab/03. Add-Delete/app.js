function addItem() {
	let parent = document.getElementById("items");
	let input = document.getElementById("newItemText");
	let liItem = document.createElement("li");
	liItem.textContent = input.value;
	let deleteBtn = document.createElement("a");
	deleteBtn.textContent = "[Delete]";
	deleteBtn.setAttribute("href", "#");
	parent.appendChild(liItem);
	liItem.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", function (event) {
		event.target.parentElement.remove();
	});
	input.value = "";
}
