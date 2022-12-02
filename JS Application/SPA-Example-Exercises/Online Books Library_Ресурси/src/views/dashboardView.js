import {html} from "../../node_modules/lit-html/lit-html.js";
import {getAllBooks} from "../api/service.js";

const bookTemplate = (book) => html` <li class="otherBooks">
	<h3>${book.title}</h3>
	<p>Type: ${book.type}</p>
	<p class="img"><img src="${book.imageUrl}" /></p>
	<a class="button" href="/dashboard/${book._id}">Details</a>
</li>`;
const dashboardTemplate = (books) => html`
	<section id="dashboard-page" class="dashboard">
		<h1>Dashboard</h1>
		${books.length == 0
			? html`<p class="no-books">No books in database!</p>`
			: html`<ul class="other-books-list">
					${books.map((book) => bookTemplate(book))}
			  </ul>`}
	</section>
`;
export async function showDashboard(ctx) {
	const books = await getAllBooks();

	ctx.render(dashboardTemplate(books));
}
