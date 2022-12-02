import {html} from "../../node_modules/lit-html/lit-html.js";
import {register} from "../api/authenification.js";

const registerTemplate = (onRegister) => html`
	<section id="register-page" class="register">
		<form @submit=${onRegister} id="register-form" action="" method="">
			<fieldset>
				<legend>Register Form</legend>
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
				<p class="field">
					<label for="repeat-pass">Repeat Password</label>
					<span class="input">
						<input
							type="password"
							name="confirm-pass"
							id="repeat-pass"
							placeholder="Repeat Password"
						/>
					</span>
				</p>
				<input class="button submit" type="submit" value="Register" />
			</fieldset>
		</form>
	</section>
`;
export function showRegister(ctx) {
	async function onRegister(e) {
		e.preventDefault();

		const {
			email,
			password,
			["confirm-pass"]: rePass,
		} = Object.fromEntries(new FormData(e.currentTarget));
		console.log(email, password, rePass);
		if (email == "" || password == "") {
			return;
		}

		if (password != rePass) {
			alert("Pasword don't match!");
			return;
		}

		await register(email, password);
		ctx.page.redirect("/dashboard");
	}
	ctx.render(registerTemplate(onRegister));
}
