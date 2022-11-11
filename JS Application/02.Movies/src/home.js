//import {getMovies} from "./loadMovies.js";
//
import {regView} from "./register.js";
import {loginView} from "./login.js";
const homeSec = document.getElementById("home-page");
const addMovieSec = document.getElementById("add-movie");
const movieExampleSec = document.getElementById("movie-example");
const editMovieSec = document.getElementById("edit-movie");
const movieHolder = document.getElementsByClassName(
	"navbar-brand text-light"
)[0];

export function showHome() {
	if (sessionStorage.length > 1) {
		const users = document.querySelectorAll(".user");
		users.forEach((el) => (el.style.display = "none"));
	} else {
	}
	[...document.querySelectorAll("section")].forEach((el) =>
		el.classList.add("hide")
	);
	homeSec.classList.remove("hide");
	const loginBtn = document.querySelectorAll(".guest a")[0];
	const regBtn = document.querySelectorAll(".guest a")[1];
	loginBtn.addEventListener("click", loginView);
	regBtn.addEventListener("click", regView);
}
