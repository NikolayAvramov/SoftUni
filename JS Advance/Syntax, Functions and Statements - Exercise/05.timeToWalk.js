function timeToWalk(steps, stepLength, speed) {
	let distance = steps * stepLength;
	let breakTime = Math.floor(distance / 500);
	let meterPerSec = speed / 3.6;
	let timeInSeconds = distance / meterPerSec;
	let timeInMin = Math.floor(timeInSeconds / 60);
	let timeM = timeInMin % 60;
	timeM += breakTime;
	let timeH = Math.floor(timeInSeconds / 3600);
	let timeS = Math.ceil(timeInSeconds - timeInMin * 60);

	let formatedH = timeH < 10 ? `0${timeH}` : `${timeH}`;
	let formatedM = timeM < 10 ? `0${timeM}` : `${timeM}`;
	let formatedS = timeS < 10 ? `0${timeS}` : `${timeS}`;

	console.log(`${formatedH}:${formatedM}:${formatedS}`);
}

timeToWalk(4000, 0.6, 5);
