import {showHome} from "./home.js";

const registerSec = document.getElementById("form-sign-up");
registerSec.addEventListener("submit", postReg);

export function regView() {
	document
		.querySelectorAll("section")
		.forEach((el) => el.classList.add("hide"));

	registerSec.classList.remove("hide");
}

function postReg(event) {
	event.preventDefault();
	try {
		const formData = new FormData(event.target);
		const {email, password, repeatPassword} = Object.fromEntries(formData);
		if (password.length < 6 && password != repeatPassword) {
			throw new Error(
				"Passwod is too short or don't match with the Repeat Password"
			);
		}
		if (sessionStorage.hasOwnProperty(email)) {
			throw new Error("This email already exist");
		}
		sessionStorage.setItem(email, password);
		showHome();
	} catch (err) {
		alert(err.message);
	}
}
