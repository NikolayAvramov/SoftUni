function solve() {
	document.querySelector("#btnSend").addEventListener("click", onClick);
	let result = [];
	function onClick() {
		let input = JSON.parse(
			document.querySelector("#inputs textarea").value
		);
		for (let data of input) {
			let [name, workerList] = data.split(" - ");
			if (!result.find((e) => e.name === name)) {
				result.push({
					name,
					avgSalary: 0,
					bestSalary: 0,
					sumSalary: 0,
					workerLists: [],
				});
			}
			let currRestaurant = result.find((e) => e.name === name);
			workerList = workerList.split(", ");
			for (let currentWorker of workerList) {
				updateRestaurant(currRestaurant, currentWorker);
			}
		}
		let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary);

		document.querySelector("#bestRestaurant p").textContent = `Name: ${
			bestRestaurant[0].name
		} Average Salary: ${
			bestRestaurant[0].avgSalary
		} Best Salary: ${bestRestaurant[0].bestSalary.toFixed(2)}`;

		let sortedWorkers = bestRestaurant[0].workerLists.sort(
			(a, b) => b.salary - a.salary
		);

		let buff = "";

		for (let worker of sortedWorkers) {
			buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
		}

		document.querySelector("#workers p").textContent = buff;
	}
	function updateRestaurant(obj, worker) {
		let [name, salary] = worker.split(" ");
		salary = Number(salary);
		obj.sumSalary += salary;
		if (obj.bestSalary < salary) {
			obj.bestSalary = salary;
		}
		if (!obj.workerLists.name) {
			obj.workerLists.push({
				name,
				salary,
			});
			obj.avgSalary = (obj.sumSalary / obj.workerLists.length).toFixed(2);
		}
	}
}
