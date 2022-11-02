async function getInfo() {
	const stopId = document.getElementById("stopId").value;
	const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

	const stopName = document.getElementById("stopName");
	const stopList = document.getElementById("buses");

	try {
		stopList.replaceChildren();
		const res = await fetch(url);
		if (res.status !== 200) {
			throw new Error("Stop ID is invalid!");
		}

		const data = await res.json();

		stopName.textContent = data.name;

		Object.entries(data.buses).forEach((bus) => {
			let liElemet = document.createElement("li");
			liElemet.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
			stopList.appendChild(liElemet);
		});
	} catch (err) {
		stopName.textContent = `Error`;
	}
}
