import {html, page} from "../lib.js";
import {register} from "../user.js";
const main = document.getElementById("content");

const registerTemplate = (onRegister) => html`<section id="registerPage">
	<form @submit=${onRegister} class="registerForm">
		<img src="./images/logo.png" alt="logo" />
		<h2>Register</h2>
		<div class="on-dark">
			<label for="email">Email:</label>
			<input
				id="email"
				name="email"
				type="text"
				placeholder="steven@abv.bg"
				value=""
			/>
		</div>

		<div class="on-dark">
			<label for="password">Password:</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="********"
				value=""
			/>
		</div>

		<div class="on-dark">
			<label for="repeatPassword">Repeat Password:</label>
			<input
				id="repeatPassword"
				name="repeatPassword"
				type="password"
				placeholder="********"
				value=""
			/>
		</div>

		<button class="btn" type="submit">Register</button>

		<p class="field">
			<span>If you have profile click <a href="/login">here</a></span>
		</p>
	</form>
</section> `;
export function showRegister(ctx, next) {
	const onRegister = (e) => {
		e.preventDefault();
		const {email, password, repeatPassword} = Object.fromEntries(
			new FormData(e.currentTarget)
		);
		if (email == "" || password == "") {
			return;
		}
		if (password != repeatPassword) {
			alert("Pasword don't match!");
			return;
		}
		register(email, password).then(() => {
			page.redirect("/");
		});
	};
	ctx.render(registerTemplate(onRegister));
}
