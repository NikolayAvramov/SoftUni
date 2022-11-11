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

	const formData = new FormData(event.target);
	const {email, password} = Object.fromEntries(formData);
	Object.entries(sessionStorage).forEach((user) => {
		if (email == user[0] && password == user[1]) {
			console.log("съвпадение");
		} else {
			alert("greshka");
		}
	});

	// postLogin1(body);
}
