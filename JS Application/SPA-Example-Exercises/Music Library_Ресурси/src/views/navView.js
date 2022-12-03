import {getUserData} from "../api/util.js";
import {html} from "../../node_modules/lit-html/lit-html.js";
const user = getUserData();

const guestNavTemplate = () => html` <div class="guest">
	<a href="/login">Login</a>
	<a href="/register">Register</a>
</div>`;
const userNavTemplate = () => html` <div class="user">
	<a href="/addAlbum">Add Album</a>
	<a href="/logout">Logout</a>
</div>`;
const navTemplate = (user) => html`<a id="logo" href="/"
		><img id="logo-img" src="./images/logo.png" alt=""
	/></a>

	<nav>
		<div>
			<a href="/dashboard">Dashboard</a>
		</div>
		${user ? userNavTemplate() : guestNavTemplate()}
	</nav>`;
export function renderNav(ctx) {
	return navTemplate(ctx.user);
}
