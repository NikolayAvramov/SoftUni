window.addEventListener("load", solve);

function solve() {
	let publishBtn = document.getElementById("form-btn");

	publishBtn.addEventListener("click", () => {
		let firstName = document.getElementById("first-name").value;
		let lastName = document.getElementById("last-name").value;
		let age = document.getElementById("age").value;
		let storyTitle = document.getElementById("story-title").value;
		let genre = document.getElementById("genre").value;
		let story = document.getElementById("story").value;

		if (
			firstName.trim() !== "" &&
			lastName.trim() !== "" &&
			age.trim() !== "" &&
			storyTitle.trim() !== "" &&
			story.trim() !== ""
		) {
			document.getElementById("first-name").value = "";
			document.getElementById("last-name").value = "";
			document.getElementById("age").value = "";
			document.getElementById("story-title").value = "";
			//document.getElementById("genre").value = "";
			document.getElementById("story").value = "";

			document.getElementById("form-btn").disabled = true;
			let parrentElement = document.getElementById("preview-list");
			//creatingElements
			let liElement = document.createElement("li");
			liElement.classList.add("story-info");
			let articleContainer = document.createElement("article");
			let h4Element = document.createElement("h4");
			h4Element.textContent = `Name: ${firstName} ${lastName}`;
			let pAgeElement = document.createElement("p");
			pAgeElement.textContent = `Age: ${age}`;
			let pTitleElement = document.createElement("p");
			pTitleElement.textContent = `Title: ${storyTitle}`;
			let pGenreElement = document.createElement("p");
			pGenreElement.textContent = `Genre: ${genre}`;
			let pStoryElement = document.createElement("p");
			pStoryElement.textContent = story;

			let saveBtn = document.createElement("button");
			saveBtn.textContent = `Save Story`;
			saveBtn.classList.add("save-btn");
			let editBtn = document.createElement("button");
			editBtn.textContent = `Edit Story`;
			editBtn.classList.add("edit-btn");
			let deleteBtn = document.createElement("button");
			deleteBtn.textContent = `Delete Story`;
			deleteBtn.classList.add("delete-btn");
			// apendings
			articleContainer.appendChild(h4Element);
			articleContainer.appendChild(pAgeElement);
			articleContainer.appendChild(pTitleElement);
			articleContainer.appendChild(pGenreElement);
			articleContainer.appendChild(pStoryElement);
			liElement.appendChild(articleContainer);
			liElement.appendChild(saveBtn);
			liElement.appendChild(editBtn);
			liElement.appendChild(deleteBtn);
			parrentElement.appendChild(liElement);

			editBtn.addEventListener("click", () => {
				document.getElementById("first-name").value = firstName;
				document.getElementById("last-name").value = lastName;
				document.getElementById("age").value = age;
				document.getElementById("story-title").value = storyTitle;
				document.getElementById("genre").value = genre;
				document.getElementById("story").value = story;
				document.getElementById("form-btn").disabled = false;
				editBtn.disabled = true;
				saveBtn.disabled = true;
				deleteBtn.disabled = true;
				liElement.remove();
			});
			saveBtn.addEventListener("click", () => {
				let fontElement = document.getElementById("main");
				fontElement.innerHTML = "";
				let h1Element = document.createElement("h1");
				h1Element.textContent = `Your scary story is saved!`;
				fontElement.appendChild(h1Element);
			});
			deleteBtn.addEventListener("click", () => {
				liElement.remove();
				document.getElementById("form-btn").disabled = false;
			});
		}
	});
}
