window.addEventListener("load", solve);

function solve() {
	let ulElement = document.getElementById("review-list");
	let publishBtn = document.getElementById("publish-btn");
	publishBtn.addEventListener("click", () => {
		let titleInput = document.getElementById("post-title").value;
		let categoryInput = document.getElementById("post-category").value;
		let contentInput = document.getElementById("post-content").value;
		document.getElementById("post-title").value = "";
		document.getElementById("post-category").value = "";
		document.getElementById("post-content").value = "";
		if (
			titleInput.trim() != "" &&
			categoryInput.trim() != "" &&
			contentInput.trim() != ""
		) {
			let liElement = document.createElement("li");
			liElement.setAttribute("class", "rpost");
			let articleElement = document.createElement("article");
			let h4Element = document.createElement("h4");
			h4Element.textContent = titleInput;
			let pCategoryElement = document.createElement("p");
			pCategoryElement.textContent = `Category: ${categoryInput}`;
			let pContentElement = document.createElement("p");
			pContentElement.textContent = `Content: ${contentInput}`;
			articleElement.appendChild(h4Element);
			articleElement.appendChild(pCategoryElement);
			articleElement.appendChild(pContentElement);
			let editBtn = document.createElement("button");
			editBtn.textContent = "Edit";
			editBtn.setAttribute("class", "action-btn edit");
			let approveBtn = document.createElement("button");
			approveBtn.textContent = "Approve";
			approveBtn.setAttribute("class", "action-btn approve");
			liElement.appendChild(articleElement);
			liElement.appendChild(approveBtn);
			liElement.appendChild(editBtn);
			ulElement.appendChild(liElement);

			editBtn.addEventListener("click", () => {
				document.getElementById("post-title").value = titleInput;
				document.getElementById("post-category").value = categoryInput;
				document.getElementById("post-content").value = contentInput;
				liElement.remove();
			});
			let uploadetParent = document.getElementById("published-list");
			approveBtn.addEventListener("click", (event) => {
				liElement.children[1].remove();
				liElement.children[1].remove();
				uploadetParent.appendChild(liElement);
				event.currentTarget.parentElement.remove();
			});
			let clerBtn = document.getElementById("clear-btn");
			clerBtn.addEventListener("click", () => {
				uploadetParent.innerHTML = "";
			});
		}
	});
}
