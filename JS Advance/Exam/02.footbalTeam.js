class footballTeam {
	constructor(clubName, country) {
		(this.clubName = clubName),
			(this.country = country),
			(this.invitedPlayers = []);
	}
	newAdditions(footballPlayers) {
		let players = [];
		for (let playerInfo of footballPlayers) {
			let [name, age, playerValue] = playerInfo.split("/");

			let currentPlayer = this.invitedPlayers.find((x) => x.name == name);
			if (!currentPlayer) {
				this.invitedPlayers.push({name, age, playerValue});
				if (!players.includes(name)) {
					players.push(name);
				}
			} else {
				if (!players.includes(name)) {
					players.push(name);
				}
				if (Number(currentPlayer.playerValue) < Number(playerValue)) {
					currentPlayer.playerValue = playerValue;
				}
			}
		}
		return `You successfully invite ${players.join(", ")}.`;
	}
	signContract(selectedPlayer) {
		let [name, playerOffer] = selectedPlayer.split("/");
		let searchedPlayer = this.invitedPlayers.find((x) => x.name == name);
		if (!searchedPlayer) {
			throw new Error(`${name} is not invited to the selection list!`);
		}
		if (Number(searchedPlayer.playerValue) > Number(playerOffer)) {
			let priceDifference =
				Number(searchedPlayer.playerValue) - Number(playerOffer);
			throw new Error(
				`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
			);
		}
		searchedPlayer.playerValue = "Bought";
		return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
	}
	ageLimit(name, age) {
		let checkedPlayer = this.invitedPlayers.find((x) => x.name == name);
		if (!checkedPlayer) {
			throw new Error(`${name} is not invited to the selection list!`);
		}
		let diff = age - Number(checkedPlayer.age);
		if (diff <= 0) {
			return `${name} is above age limit!`;
		}
		if (diff < 5) {
			return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
		}
		if (diff >= 5) {
			return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
		}
	}
	transferWindowResult() {
		let buff = `Players list:`;
		this.invitedPlayers
			.sort((a, b) => a.name.localeCompare(b.name))
			.forEach((x) => (buff += `\nPlayer ${x.name}-${x.playerValue}`));

		return buff;
	}
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
	fTeam.newAdditions([
		"Kylian Mbappé/23/160",
		"Lionel Messi/35/50",
		"Pau Torres/25/52",
	])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 24));
console.log(fTeam.transferWindowResult());
