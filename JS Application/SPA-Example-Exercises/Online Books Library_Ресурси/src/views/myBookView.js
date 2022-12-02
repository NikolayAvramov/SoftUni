import {html} from "../../node_modules/lit-html/lit-html.js";
import {getMyBooks} from "../api/service.js";

const bookTemplate = (book) => html` <li class="otherBooks">
	<h3>${book.title}</h3>
	<p>Type: ${book.type}</p>
	<p class="img"><img src="${book.imageUrl}" /></p>
	<a class="button" href="/dashboard/${book._id}">Details</a>
</li>`;
const myBookTemplate = (myBooks) => html` <section
	id="my-books-page"
	class="my-books"
>
	<h1>My Books</h1>
	<!-- Display ul: with list-items for every user's books (if any) -->
	${myBooks.length == 0
		? html`<p class="no-books">No books in database!</p>`
		: html`<ul class="my-books-list">
				${myBooks.map((book) => bookTemplate(book))}
		  </ul>`}

	<!-- Display paragraph: If the user doesn't have his own books  -->
</section>`;
export async function showMyBook(ctx) {
	const id = ctx.user._id;

	const myBooks = await getMyBooks(id);

	ctx.render(myBookTemplate(myBooks));
}
