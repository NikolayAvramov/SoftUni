function subtract() {
	let firstNum = Number(document.getElementById("firstNumber").value);
	let secNum = Number(document.getElementById("secondNumber").value);
	let res = firstNum - secNum;
	document.getElementById("result").textContent = res;
}
