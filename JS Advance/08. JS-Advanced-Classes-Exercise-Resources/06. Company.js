class Company {
	constructor() {
		this.departments = {};
	}
	addEmployee(name, salary, position, department) {
		if (!name || !salary || !position || !department || salary < 0) {
			throw new Error("Invalid input!");
		}

		if (!this.departments.hasOwnProperty(department)) {
			this.departments[department] = {
				avg: 0,
				employee: [],
			};
			this.departments[department].employee.push({
				name,
				salary,
				position,
			});
			this.departments[department].avg += Number(salary);
			return `New employee is hired. Name: ${name}. Position: ${position}`;
		} else {
			this.departments[department].employee.push({
				name,
				salary,
				position,
			});
			this.departments[department].avg += Number(salary);

			return `New employee is hired. Name: ${name}. Position: ${position}`;
		}
	}

	bestDepartment() {
		for (let obj in this.departments) {
			this.departments[obj].avg = (
				this.departments[obj].avg /
				this.departments[obj].employee.length
			).toFixed(2);
			let sortedEmploye = this.departments[obj].employee;
			sortedEmploye.sort((a, b) => {
				return b.salary - a.salary || a.name.localeCompare(b.name);
			});
			//console.table(sortedEmploye);
		}
		let sortedDepart = Object.entries(this.departments).sort(
			(a, b) => b[1].avg - a[1].avg
		);
		let bestName = sortedDepart[0][0];
		let avgSalary = sortedDepart[0][1].avg;
		let buff = `Best Department is: ${bestName}`;
		buff += `\nAverage salary: ${avgSalary}`;
		for (let emp of this.departments[bestName].employee) {
			buff += `\n${emp.name} ${emp.salary} ${emp.position}`;
		}
		return buff;
	}
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
