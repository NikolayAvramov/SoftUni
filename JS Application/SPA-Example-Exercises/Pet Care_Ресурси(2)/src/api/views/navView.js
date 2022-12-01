import {getUserData} from "../../util.js";
import {html} from "../lib.js";
const user = getUserData();
const userTemplate = () => html` <li><a href="/create">Create Postcard</a></li>
	<li><a href="/logout">Logout</a></li>`;
const guestTemplate = () => html` <li><a href="/login">Login</a></li>
	<li><a href="/register">Register</a></li>`;
const navTemplate = (user) => html`<nav>
	<section class="logo">
		<img src="./images/logo.png" alt="logo" />
	</section>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/catalog">Dashboard</a></li>
		${user ? userTemplate() : guestTemplate()}
	</ul>
</nav>`;
export const renderNav = (ctx) => {
	return navTemplate(ctx.user);
};
