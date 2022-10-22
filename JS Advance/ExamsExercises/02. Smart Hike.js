class SmartHike {
	constructor(username) {
		(this.username = username),
			(this.goals = {}),
			(this.listOfHkes = []),
			(this.resources = 100);
	}
	addGoal(peak, altitude) {
		if (!this.goals.hasOwnProperty(peak)) {
			this.goals[peak] = altitude;
			return `You have successfully added a new goal - ${peak}`;
		} else {
			return `${peak} has already been added to your goals`;
		}
	}
	hike(peak, time, difficultyLevel) {
		if (!this.goals.hasOwnProperty(peak)) {
			throw new Error(`${peak} is not in your current goals`);
		} else if (this.resources <= 0) {
			throw new Error(
				"You don't have enough resources to start the hike"
			);
		} else if (this.resources - time * 10 < 0) {
			return "You don't have enough resources to complete the hike";
		} else {
			this.resources -= time * 10;
			let hikes = {
				peak,
				time,
				difficultyLevel,
			};
			this.listOfHkes.push(hikes);
			return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
		}
	}
	rest(time) {
		this.resources += time * 10;
		if (this.resources > 100) {
			this.resources = 100;
			return `Your resources are fully recharged. Time for hiking!`;
		} else {
			return `You have rested for ${time} hours and gained ${
				time * 10
			}% resources`;
		}
	}
	showRecord(criteria) {
		if (this.listOfHkes.length == 0) {
			return `${this.username} has not done any hiking yet`;
		}
		switch (criteria) {
			case "hard":
				let hardHikes = [];
				for (let obj of this.listOfHkes) {
					if (obj.difficultyLevel == "hard") {
						hardHikes.push(obj);
					}
				}
				let sortedHardTime = hardHikes.sort((a, b) => a.time - b.time);
				let bestOneHard = sortedHardTime[0];
				if (hardHikes.length == 0) {
					return `${this.username} has not done any ${criteria} hiking yet`;
				}
				return `${this.username}'s best ${criteria} hike is ${bestOneHard.peak} peak, for ${bestOneHard.time} hours`;
				break;
			case "easy":
				let easyHikes = [];
				for (let obj of this.listOfHkes) {
					if (obj.difficultyLevel == "easy") {
						easyHikes.push(obj);
					}
				}
				let sortedEasyTime = easyHikes.sort((a, b) => a.time - b.time);
				let bestOneEasy = sortedEasyTime[0];
				if (easyHikes.length == 0) {
					return `${this.username} has not done any ${criteria} hiking yet`;
				}

				return `${this.username}'s best ${criteria} hike is ${bestOneEasy.peak} peak, for ${bestOneEasy.time} hours`;
				break;
			case "all":
				let buff = `All hiking records:`;

				for (let obj of this.listOfHkes) {
					buff += `\n${this.username} hiked ${obj.peak} for ${obj.time} hours`;
				}
				return buff;
		}
	}
}
const newHike = new SmartHike("Vili");

//"You have successfully added a new goal - Musala"
newHike.addGoal("Musala", 2925);
newHike.hike("Musala", 8, "hard");
//"You hiked Musala peak for 8 hours and you have 20% resources left"

newHike.showRecord("easy");
//"Vili has not done any easy hiking yet"

newHike.addGoal("Vihren", 2914);
//"You have successfully added a new goal - Vihren"

newHike.hike("Vihren", 4, "hard");
//"You don't have enough resources to complete the hike"

newHike.showRecord("hard");
//"Vili's best hard hike is Musala peak, for 8 hours"

newHike.addGoal("Rui", 1706);
//"You have successfully added a new goal - Rui"

newHike.hike("Rui", 3, "easy");
//"You don't have enough resources to complete the hike"

newHike.showRecord("all");
//"All hiking records:\nVili hiked Musala for 8 hours"
