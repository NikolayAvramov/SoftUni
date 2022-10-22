function attachEventsListeners() {
	let buttons = Array.from(document.querySelectorAll("input[type=button]"));
	for (let button of buttons) {
		button.addEventListener("click", convert);
	}
	function convert(event) {
		let value = Number(
			event.target.parentElement.querySelectorAll("input[type=text]")[0]
				.value
		);
		let btnType = event.target.id;
		switch (btnType) {
			case "daysBtn":
				value = value;
				break;
			case "hoursBtn":
				value /= 24;
				break;
			case "minutesBtn":
				value = value / 24 / 60;
				break;
			case "secondsBtn":
				value = value / 24 / 60 / 60;
				break;
		}
		let textInput = document.querySelectorAll("input[type=text]");
		for (let i = 0; i < textInput.length; i++) {
			if (i == 0) {
				console.log(value);
				textInput[0].value = value;
			} else if (i == 1) {
				textInput[i].value = value * 24;
			} else if (i == 2) {
				textInput[i].value = value * 24 * 60;
			} else if (i == 3) {
				textInput[i].value = value * 24 * 60 * 60;
			}
		}
	}
}
