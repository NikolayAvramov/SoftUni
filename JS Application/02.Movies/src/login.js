const loginSec = document.getElementById("form-login");
export function loginView() {
	document
		.querySelectorAll("section")
		.forEach((el) => el.classList.add("hide"));

	loginSec.classList.remove("hide");

	loginSec.addEventListener("submit", logInRec);
}
function logInRec(event) {
	event.preventDefault();
	let isExist = false;
	const formData = new FormData(event.target);
	const {email, password} = Object.fromEntries(formData);
	let username = Object.entries(sessionStorage).forEach((user) => {
		if (email == user[0] && password == user[1]) {
			isExist = true;
			console.log("съвпадение");
		}
	});
	if (isExist) {
		console.log("pozdrawleniq");
	} else {
		alert("greshka");
	}

	// postLogin1(body);
}
