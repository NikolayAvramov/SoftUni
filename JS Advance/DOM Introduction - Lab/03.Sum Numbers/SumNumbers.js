function calc() {
	let numOne = Number(document.querySelector("#num1").value);
	let secondNum = Number(document.querySelector("#num2").value);
	let res = numOne + secondNum;
	document.querySelector("#sum").value = res;
}
