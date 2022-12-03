import {login} from "../api/authenification.js";
import {html} from "../../node_modules/lit-html/lit-html.js";

const loginTemplate = (onLogin) => html`<section id="login">
	<div class="form">
		<h2>Login</h2>
		<form @submit="${onLogin}class" ="login-form">
			<input type="text" name="email" id="email" placeholder="email" />
			<input
				type="password"
				name="password"
				id="password"
				placeholder="password"
			/>
			<button type="submit">login</button>
			<p class="message">
				Not registered?
				<a href="#">Create an account</a>
			</p>
		</form>
	</div>
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
