window.addEventListener("load", solve);

function solve() {
	let bodyElement = document.getElementById("table-body");
	let publishByn = document.getElementById("publish");

	publishByn.addEventListener("click", (e) => {
		e.preventDefault();
		let make = document.getElementById("make").value;
		let model = document.getElementById("model").value;
		let year = document.getElementById("year").value;
		let fuel = document.getElementById("fuel").value;
		let originalPrice = document.getElementById("original-cost").value;
		let sellingPrice = document.getElementById("selling-price").value;
		document.getElementById("make").value = "";
		document.getElementById("model").value = "";
		document.getElementById("year").value = "";
		document.getElementById("fuel").value = "";
		document.getElementById("original-cost").value = "";
		document.getElementById("selling-price").value = "";

		if (
			make.trim() !== "" &&
			model.trim() !== "" &&
			year.trim() !== "" &&
			fuel.trim() !== "" &&
			originalPrice.trim() !== "" &&
			sellingPrice.trim() !== "" &&
			Number(sellingPrice) > Number(originalPrice)
		) {
			let rowElement = document.createElement("tr");
			rowElement.classList.add("row");
			let makeElement = document.createElement("td");
			makeElement.textContent = make;
			let modelElement = document.createElement("td");
			modelElement.textContent = model;
			let yearElement = document.createElement("td");
			yearElement.textContent = year;
			let fuelElement = document.createElement("td");
			fuelElement.textContent = fuel;
			let originalPriceElement = document.createElement("td");
			originalPriceElement.textContent = originalPrice;
			let sellingPriceElement = document.createElement("td");
			sellingPriceElement.textContent = sellingPrice;
			let btnHolderElement = document.createElement("td");
			let editBtnElement = document.createElement("button");
			editBtnElement.textContent = "Edit";
			editBtnElement.classList.add("action-btn");
			editBtnElement.classList.add("edit");

			let sellBtn = document.createElement("button");
			sellBtn.textContent = "Sell";
			sellBtn.classList.add("action-btn");
			sellBtn.classList.add("sell");

			btnHolderElement.appendChild(editBtnElement);
			btnHolderElement.appendChild(sellBtn);
			rowElement.appendChild(makeElement);
			rowElement.appendChild(modelElement);
			rowElement.appendChild(yearElement);
			rowElement.appendChild(fuelElement);
			rowElement.appendChild(originalPriceElement);
			rowElement.appendChild(sellingPriceElement);
			rowElement.appendChild(btnHolderElement);

			bodyElement.appendChild(rowElement);

			editBtnElement.addEventListener("click", () => {
				document.getElementById("make").value = make;
				document.getElementById("model").value = model;
				document.getElementById("year").value = year;
				document.getElementById("fuel").value = fuel;
				document.getElementById("original-cost").value = originalPrice;
				document.getElementById("selling-price").value = sellingPrice;
				rowElement.remove();
			});

			sellBtn.addEventListener("click", () => {
				let ulElement = document.getElementById("cars-list");
				let listElement = document.createElement("li");
				listElement.classList.add("each-list");
				let sellNameElement = document.createElement("span");
				sellNameElement.textContent = make + " " + model;
				let sellYearElement = document.createElement("span");
				sellYearElement.textContent = year;
				let profitElement = document.createElement("span");
				let profit = Number(sellingPrice) - Number(originalPrice);
				profitElement.textContent = profit;
				listElement.appendChild(sellNameElement);
				listElement.appendChild(sellYearElement);
				listElement.appendChild(profitElement);
				ulElement.appendChild(listElement);
				let totalProfit = Number(
					document.getElementById("profit").textContent
				);
				totalProfit += profit;
				document.getElementById("profit").textContent =
					totalProfit.toFixed(2);

				rowElement.remove();
			});
		}
	});
}
