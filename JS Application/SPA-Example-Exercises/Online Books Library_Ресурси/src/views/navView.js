import {html} from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`<nav class="navbar">
	<section class="navbar-dashboard">
		<a href="/dashboard">Dashboard</a>
		${user
			? html`<div id="user">
					<span>Welcome, ${user.email}</span>
					<a class="button" href="/myBook">My Books</a>
					<a class="button" href="/addBook">Add Book</a>
					<a class="button" href="/logout">Logout</a>
			  </div>`
			: html`<div id="guest">
					<a class="button" href="/login">Login</a>
					<a class="button" href="/register">Register</a>
			  </div>`}
	</section>
</nav>`;
export function renderNav(ctx) {
	return navTemplate(ctx.user);
}
