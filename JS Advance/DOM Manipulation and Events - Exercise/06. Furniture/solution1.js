function solve() {
	let buttons = document.querySelectorAll("button");
	let generateBtn = buttons[0];
	let buyBtn = buttons[1];

	generateBtn.addEventListener("click", generate);
	buyBtn.addEventListener("click", buyIt);

	function generate(event) {
		let inputText = JSON.parse(
			document.querySelectorAll("textarea")[0].value
		);
		let parrenta = document.getElementsByTagName("tbody")[0];
		for (let obj of inputText) {
			let rows = document.createElement("tr");
			rows.innerHTML =
				`<td><img src="${obj.img}"></td>` +
				`<td>${obj.name}</td>` +
				`<td><p>${obj.price}</p></td>` +
				`<td><p>${obj.decFactor}</p></td>` +
				`<td><input type="checkbox"></td>`;
			parrenta.appendChild(rows);
		}
	}
	let totalPrice = 0;
	let avgDecorRate = 0;
	function buyIt(event) {
		let resultText = document.querySelectorAll("textarea")[1];
		let allMarks = document.querySelectorAll("input[type=checkbox]");

		let nameArr = [];
		for (let mark of allMarks) {
			if (mark.checked) {
				let parrent = mark.parentElement.parentElement;
				let nameChld = parrent.children[1].textContent;
				nameArr.push(nameChld);
				let priceChld = parrent.children[2].textContent;
				totalPrice += Number(priceChld);
				let avgChld = parrent.children[3].textContent;
				avgDecorRate += Number(avgChld);
			}
		}

		let finalRes = `Bought furniture: ${nameArr.join(
			", "
		)}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
			avgDecorRate / nameArr.length
		}`;
		resultText.value = finalRes;
	}
}
