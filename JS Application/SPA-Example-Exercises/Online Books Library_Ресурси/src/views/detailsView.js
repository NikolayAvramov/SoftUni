import {html} from "../../node_modules/lit-html/lit-html.js";
import {delById, getById} from "../api/service.js";
const detailsTemplate = (book, user, onDelete) => html` <section
	id="details-page"
	class="details"
>
	<div class="book-information">
		<h3>${book.title}</h3>
		<p class="type">Type: ${book.type}</p>
		<p class="img"><img src="${book.imageUrl}" /></p>
		<div class="actions">
			${user && user._id == book._ownerId
				? html`<a class="button" href="/edit/${book._id}">Edit</a>
						<a
							@click=${onDelete}
							class="button"
							href="javascript:void(0)"
							>Delete</a
						>`
				: ""}
			${user && user._id != book._ownerId
				? html`<a class="button" href="#">Like</a>`
				: ""}
			<div class="likes">
				<img class="hearts" src="/images/heart.png" />
				<span id="total-likes">Likes: 0</span>
			</div>
			<!-- Bonus -->
		</div>
	</div>
	<div class="book-description">
		<h3>Description:</h3>
		<p>${book.description}</p>
	</div>
</section>`;
export async function showDetails(ctx) {
	const id = ctx.params.id;
	const book = await getById(id);
	async function onDelete() {
		const choice = confirm("Are you sure you want to delete?");

		if (choice) {
			await delById(id);
			ctx.page.redirect("/dashboard");
		}
	}
	ctx.render(detailsTemplate(book, ctx.user, onDelete));
}
