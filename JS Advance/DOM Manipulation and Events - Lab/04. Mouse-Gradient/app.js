function attachGradientEvents() {
	let element = document.getElementById("gradient");
	element.addEventListener("mousemove", mouseIn);
	element.addEventListener("mouseout", mouseOut);
	function mouseIn(event) {
		let position = event.offsetX;
		let width = event.target.clientWidth - 1;

		let result = Math.trunc((position / width) * 100);
		document.getElementById("result").textContent = `${result}%`;
		//console.log(result);
	}
	function mouseOut(event) {
		document.getElementById("result").textContent = "";
	}
}
