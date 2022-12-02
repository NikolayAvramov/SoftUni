import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/authenification.js";

const registerTemplate = (onRegister) => html`<section id="registerPage">
	<form @submit=${onRegister}>
		<fieldset>
			<legend>Register</legend>

			<label for="email" class="vhide">Email</label>
			<input
				id="email"
				class="email"
				name="email"
				type="text"
				placeholder="Email"
			/>

			<label for="password" class="vhide">Password</label>
			<input
				id="password"
				class="password"
				name="password"
				type="password"
				placeholder="Password"
			/>

			<label for="conf-pass" class="vhide">Confirm Password:</label>
			<input
				id="conf-pass"
				class="conf-pass"
				name="conf-pass"
				type="password"
				placeholder="Confirm Password"
			/>

			<button type="submit" class="register">Register</button>

			<p class="field">
				<span
					>If you already have profile click
					<a href="/login">here</a></span
				>
			</p>
		</fieldset>
	</form>
</section> `;

export function showRegister(ctx, next) {
	async function onRegister(e) {
		e.preventDefault();
		const {
			email,
			password,
			["conf-pass"]: rePass,
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
