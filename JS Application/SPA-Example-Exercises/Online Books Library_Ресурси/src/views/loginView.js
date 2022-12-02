import {html} from "../../node_modules/lit-html/lit-html.js";
import {login} from "../api/authenification.js";

const loginTemplate = (onLogin) => html` <section id="login-page" class="login">
	<form @submit=${onLogin} id="login-form" action="" method="">
		<fieldset>
			<legend>Login Form</legend>
			<p class="field">
				<label for="email">Email</label>
				<span class="input">
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email"
					/>
				</span>
			</p>
			<p class="field">
				<label for="password">Password</label>
				<span class="input">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</span>
			</p>
			<input class="button submit" type="submit" value="Login" />
		</fieldset>
	</form>
</section>`;
export function showLogin(ctx) {
	async function onLogin(e) {
		e.preventDefault();
		const {email, password} = Object.fromEntries(
			new FormData(e.currentTarget)
		);
		await login(email, password);
		ctx.page.redirect("/dashboard");
	}

	ctx.render(loginTemplate(onLogin));
}
