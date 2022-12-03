import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/authenification.js";

const registerTemplate = (onRegister) => html`<section id="register">
	<div class="form">
		<h2>Register</h2>
		<form @submit=${onRegister} class="login-form">
			<input
				type="text"
				name="email"
				id="register-email"
				placeholder="email"
			/>
			<input
				type="password"
				name="password"
				id="register-password"
				placeholder="password"
			/>
			<input
				type="password"
				name="re-password"
				id="repeat-password"
				placeholder="repeat password"
			/>
			<button type="submit">register</button>
			<p class="message">Already registered? <a href="#">Login</a></p>
		</form>
	</div>
</section> `;

export function showRegister(ctx, next) {
	async function onRegister(e) {
		e.preventDefault();
		const {
			email,
			password,
			["re-password"]: rePass,
		} = Object.fromEntries(new FormData(e.currentTarget));
		if (email == "" || password == "") {
			return;
		}

		if (password != rePass) {
			alert("Pasword don't match!");
			return;
		}
		await register(email, password);
		ctx.page.redirect("/");
	}
	ctx.render(registerTemplate(onRegister));
}
