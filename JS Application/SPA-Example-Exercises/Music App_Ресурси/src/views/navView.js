import {getUserData} from "../api/util.js";
import {html} from "../../node_modules/lit-html/lit-html.js";
const user = getUserData();

const userNavTemplate = () => html`<li><a href="/create">Create Album</a></li>
	<li><a href="/logout">Logout</a></li>`;
const guestNavTemplate = () => html`<li><a href="/login">Login</a></li>
	<li><a href="/register">Register</a></li> `;
const navTemplate = (user) => html`<nav>
	<img src="./images/headphones.png" />
	<a href="/">Home</a>
	<ul>
		<li><a href="/catalog">Catalog</a></li>
		<li><a href="/search">Search</a></li>
		${user ? userNavTemplate() : guestNavTemplate()}
	</ul>
</nav>`;
export function renderNav(ctx) {
	return navTemplate(ctx.user);
}
