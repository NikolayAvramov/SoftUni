import {login} from "../api/authenification.js";
import {html} from "../../node_modules/lit-html/lit-html.js";

const loginTemplate = (onLogin) => html`<section id="loginPage">
	<form @submit=${onLogin}>
		<fieldset>
			<legend>Login</legend>

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

			<button type="submit" class="login">Login</button>

			<p class="field">
				<span
					>If you don't have profile click
					<a href="/register">here</a></span
				>
			</p>
		</fieldset>
	</form>
</section> `;
export function showLogin(ctx) {
	async function onLogin(e) {
		e.preventDefault();
		const {email, password} = Object.fromEntries(
			new FormData(e.currentTarget)
		);
		if (email == "" || password == "") {
			return;
		}
		await login(email, password);
		ctx.page.redirect("/");
	}
	ctx.render(loginTemplate(onLogin));
}
