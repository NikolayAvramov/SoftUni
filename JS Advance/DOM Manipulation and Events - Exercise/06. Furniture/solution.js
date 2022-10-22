function solve() {
	let buttons = Array.from(document.querySelectorAll("button"));
	let generateBtn = buttons[0];
	let buyBtn = buttons[1];
	let textsAreas = Array.from(document.querySelectorAll("textarea"));

	generateBtn.addEventListener("click", generate);
	buyBtn.addEventListener("click", buyIt);

	function generate(event) {
		let inputText = textsAreas[0].value;
		inputText = JSON.parse(inputText);
		for (let obj of inputText) {
			//img...
			let parrent = document.getElementsByTagName("tbody")[0];
			let img = document.createElement("img");
			img.setAttribute("src", obj.img);
			let td = document.createElement("td");
			td.appendChild(img);
			let tr = document.createElement("tr");
			tr.appendChild(td);
			parrent.appendChild(tr);
			// name...
			let nameP = document.createElement("p");
			let ntd = document.createElement("td");
			nameP.textContent = obj.name;
			ntd.appendChild(nameP);
			tr.appendChild(ntd);
			//price...
			let priceP = document.createElement("p");
			priceP.textContent = Number(obj.price);
			let ptd = document.createElement("td");
			ptd.appendChild(priceP);
			tr.appendChild(ptd);
			//decoration
			let decP = document.createElement("p");
			decP.textContent = Number(obj.decFactor);
			let decTd = document.createElement("td");
			decTd.appendChild(decP);
			tr.appendChild(decTd);
			//checkBox
			let checkBox = document.createElement("input");
			checkBox.setAttribute("type", "checkbox");
			let checktd = document.createElement("td");
			checktd.appendChild(checkBox);
			tr.appendChild(checktd);
		}
	}
	function buyIt(event) {
		let resultText = textsAreas[1];
		let allMarks = Array.from(
			document.querySelectorAll("input[type=checkbox]")
		);
		let totalPrice = 0;
		let avgDecorRate = 0;

		let nameArr = [];
		let isActive = false;
		for (let mark of allMarks) {
			if (mark.checked) {
				let parrent = mark.parentNode.parentNode;
				let nameChld = parrent.children[1].textContent;
				nameArr.push(nameChld);
				let priceChld = parrent.children[2].textContent;
				totalPrice += Number(priceChld);
				let avgChld = parrent.children[3].textContent;
				avgDecorRate += Number(avgChld);
				isActive = true;
			}
		}
		if (isActive) {
			let finalArr = [];
			let nameRes = `Bought furniture: ${nameArr.join(", ")}`;
			let priceRes = `Total price: ${totalPrice.toFixed(2)}`;
			let avgRes = `Average decoration factor: ${
				avgDecorRate / nameArr.length
			}`;
			finalArr.push(nameRes);
			finalArr.push(priceRes);
			finalArr.push(avgRes);
			resultText.value = `${finalArr.join("\n")}`;
		}

		isActive = false;
	}
}
