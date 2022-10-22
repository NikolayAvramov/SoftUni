function radar(speed, area) {
	//Limits
	let motorwayLimit = 130;
	let interestateLimit = 90;
	let cityLimit = 50;
	let residentialLimit = 20;
	let status = "";

	switch (area) {
		case "city":
			if (speed <= cityLimit) {
				console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
			} else {
				let dif = speed - cityLimit;

				if (dif <= 20) {
					status = "speeding";
				} else if (dif <= 40) {
					status = "excessive speeding";
				} else {
					status = "reckless driving";
				}
				console.log(
					`The speed is ${dif} km/h faster than the allowed speed of ${cityLimit} - ${status}`
				);
			}
			break;
		case "motorway":
			if (speed <= motorwayLimit) {
				console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
			} else {
				let dif = speed - motorwayLimit;

				if (dif <= 20) {
					status = "speeding";
				} else if (dif <= 40) {
					status = "excessive speeding";
				} else {
					status = "reckless driving";
				}
				console.log(
					`The speed is ${dif} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
				);
			}
			break;
		case "interstate":
			if (speed <= interestateLimit) {
				console.log(
					`Driving ${speed} km/h in a ${interestateLimit} zone`
				);
			} else {
				let dif = speed - interestateLimit;

				if (dif <= 20) {
					status = "speeding";
				} else if (dif <= 40) {
					status = "excessive speeding";
				} else {
					status = "reckless driving";
				}
				console.log(
					`The speed is ${dif} km/h faster than the allowed speed of ${interestateLimit} - ${status}`
				);
			}
			break;
		case "residential":
			if (speed <= residentialLimit) {
				console.log(
					`Driving ${speed} km/h in a ${residentialLimit} zone`
				);
			} else {
				let dif = speed - residentialLimit;

				if (dif <= 20) {
					status = "speeding";
				} else if (dif <= 40) {
					status = "excessive speeding";
				} else {
					status = "reckless driving";
				}
				console.log(
					`The speed is ${dif} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
				);
			}
			break;
	}
}
radar(40, "city");
radar(21, "residential");
radar(120, "interstate");
radar(200, "motorway");
