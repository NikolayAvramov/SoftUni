function solve() {
	alert("resena li e");
	let addBtn = document.getElementById("add");
	let restBtn = document.getElementById("reset");
	restBtn.addEventListener("click", reset);
	function reset(e) {
		e.preventDefault();
		document.getElementById("recipientName").value = "";
		document.getElementById("title").value = "";
		document.getElementById("message").value = "";
	}
	addBtn.addEventListener("click", add);
	function add(event) {
		event.preventDefault();
		let inputName = document.getElementById("recipientName").value;
		let inputTitle = document.getElementById("title").value;
		let inputMessage = document.getElementById("message").value;

		document.getElementById("recipientName").value = "";
		document.getElementById("title").value = "";
		document.getElementById("message").value = "";
		if (inputName != "" && inputTitle != "" && inputMessage != "") {
			let parrentElement = document.getElementById("list");
			let liElement = document.createElement("li");
			let titleH4Element = document.createElement("h4");
			titleH4Element.textContent = `Title: ${inputTitle}`;
			let nameH4Element = document.createElement("h4");
			nameH4Element.textContent = `Recipient Name: ${inputName}`;
			let spanElement = document.createElement("span");
			spanElement.textContent = inputMessage;
			let btnHolder = document.createElement("div");
			btnHolder.setAttribute("id", "list-action");
			let sendBtn = document.createElement("button");
			sendBtn.textContent = "Send";
			sendBtn.setAttribute("type", "submit");
			sendBtn.setAttribute("id", "send");
			let deleteBtn = document.createElement("button");
			deleteBtn.textContent = "Delete";
			deleteBtn.setAttribute("type", "submit");
			deleteBtn.setAttribute("id", "delete");
			btnHolder.appendChild(sendBtn);
			btnHolder.appendChild(deleteBtn);
			liElement.appendChild(titleH4Element);
			liElement.appendChild(nameH4Element);
			liElement.appendChild(spanElement);
			liElement.appendChild(btnHolder);
			parrentElement.appendChild(liElement);
			deleteBtn.addEventListener("click", () => {
				let trashParrent =
					document.getElementsByClassName("delete-list")[0];
				let delLi = document.createElement("li");
				let spanTo = document.createElement("span");
				spanTo.textContent = `To: ${inputName}`;
				let spanTitle = document.createElement("span");
				spanTitle.textContent = `Title: ${inputTitle}`;
				delLi.appendChild(spanTo);
				delLi.appendChild(spanTitle);
				trashParrent.appendChild(delLi);
				liElement.remove();
			});
			sendBtn.addEventListener("click", () => {
				liElement.remove();
				let sendParrent =
					document.getElementsByClassName("sent-list")[0];
				let sendetMailLi = document.createElement("li");
				let toSpan = document.createElement("span");
				toSpan.textContent = `To: ${inputName}`;
				let titleSpan = document.createElement("span");
				titleSpan.textContent = `Title: ${inputTitle}`;
				let div = document.createElement("div");
				div.setAttribute("class", "btn");
				let btn = document.createElement("button");
				btn.textContent = "Delete";
				btn.setAttribute("type", "submit");
				btn.setAttribute("class", "delete");

				div.appendChild(btn);
				sendetMailLi.appendChild(toSpan);
				sendetMailLi.appendChild(titleSpan);
				sendetMailLi.appendChild(div);
				sendParrent.appendChild(sendetMailLi);
				btn.addEventListener("click", () => {
					let trashParrent =
						document.getElementsByClassName("delete-list")[0];
					let delLi = document.createElement("li");
					let spanTo = document.createElement("span");
					spanTo.textContent = `To: ${inputName}`;
					let spanTitle = document.createElement("span");
					spanTitle.textContent = ` Title: ${inputTitle}`;
					delLi.appendChild(spanTo);
					delLi.appendChild(spanTitle);
					trashParrent.appendChild(delLi);
					sendetMailLi.remove();
				});
			});
		}
	}
}
solve();
