function solve() {
	const depatrBtn = document.getElementById("depart");
	const arriveBtn = document.getElementById("arrive");
	const infoElement = document.querySelector(".info");
	let stopId = "depot";

	async function depart() {
		let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
		try {
			const res = await fetch(url);
			if (res.status !== 200) {
				throw new Error("error");
			}
			const data = await res.json();
			infoElement.textContent = `Next stop ${data.name}`;
			arriveBtn.removeAttribute("disabled");
			depatrBtn.setAttribute("disabled", "disabled");
		} catch (error) {
			infoElement.textContent = "Error";
			arriveBtn.setAttribute("disabled", "disabled");
			depatrBtn.setAttribute("disabled", "disabled");
		}
	}

	async function arrive() {
		let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`;
		try {
			const res = await fetch(url);
			if (res.status !== 200) {
				throw new Error("error");
			}
			const data = await res.json();
			infoElement.textContent = `Arriving at ${data.name}`;

			depatrBtn.removeAttribute("disabled");
			arriveBtn.setAttribute("disabled", "disabled");
			stopId = data.next;
		} catch (error) {
			infoElement.textContent = "Error";
			arriveBtn.setAttribute("disabled", "disabled");
			depatrBtn.setAttribute("disabled", "disabled");
		}
	}

	return {
		depart,
		arrive,
	};
}

let result = solve();
