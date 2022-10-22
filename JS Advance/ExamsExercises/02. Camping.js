class SummerCamp {
	constructor(organizer, location) {
		(this.organizer = organizer),
			(this.location = location),
			(this.prceForTheCamp = {child: 150, student: 300, collegian: 500});
		this.listOfParticipants = [];
	}
	registerParticipant(name, condition, money) {
		if (!this.prceForTheCamp[condition]) {
			throw new Error("Unsuccessful registration at the camp.");
		}
		if (this.listOfParticipants.some((x) => x.name == name)) {
			return `The ${name} is already registered at the camp.`;
		}
		if (this.prceForTheCamp[condition] > money) {
			return `The money is not enough to pay the stay at the camp.`;
		}
		let participant = {name, condition, power: 100, wins: 0};
		this.listOfParticipants.push(participant);
		return `The ${name} was successfully registered.`;
	}
	unregisterParticipant(name) {
		let indexOfPartipient = this.listOfParticipants.findIndex(
			(x) => x.name == name
		);
		if (indexOfPartipient == -1) {
			throw new Error(`The ${name} is not registered in the camp.`);
		}
		this.listOfParticipants.splice(indexOfPartipient, 1);
		return `The ${name} removed successfully.`;
	}
	timeToPlay(typeOfGame, participant1, participant2) {
		let player1 = this.listOfParticipants.find(
			(x) => x.name == participant1
		);
		if (!player1) {
			throw new Error(`Invalid entered name/s.`);
		}
		switch (typeOfGame) {
			case "WaterBalloonFights":
				let player2 = this.listOfParticipants.find(
					(x) => x.name == participant2
				);
				if (!player2) {
					throw new Error(`Invalid entered name/s.`);
				}

				if (player1.condition == player2.condition) {
					let winner = "";
					if (player1.power > player2.power) {
						winner = player1.name;
						player1.wins++;
					} else if (player2.power > player1.power) {
						winner = player2.name;
						player2.wins++;
					} else {
						return `There is no winner.`;
					}

					return `The ${winner} is winner in the game ${typeOfGame}.`;
				} else {
					throw new Error(`Choose players with equal condition.`);
				}

				break;
			case "Battleship":
				player1.power += 20;
				return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
				break;
		}
	}
	toString() {
		let buff = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
		this.listOfParticipants
			.sort((a, b) => b.wins - a.wins)
			.forEach(
				(x) =>
					(buff += `\n${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
			);
		return buff;
	}
}

const summerCamp = new SummerCamp(
	"Jane Austen",
	"Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
	summerCamp.timeToPlay(
		"WaterBalloonFights",
		"Petar Petarson",
		"Sara Dickinson"
	)
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
	summerCamp.timeToPlay(
		"WaterBalloonFights",
		"Petar Petarson",
		"Dimitur Kostov"
	)
);
