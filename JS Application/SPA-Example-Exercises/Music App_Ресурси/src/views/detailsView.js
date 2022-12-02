import {html} from "../../node_modules/lit-html/lit-html.js";
import {delById, getById} from "../api/service.js";

const detailsTemplate = (onDelete, user, album) => html`<section
	id="detailsPage"
>
	<div class="wrapper">
		<div class="albumCover">
			<img src="${album.imgUrl}" />
		</div>
		<div class="albumInfo">
			<div class="albumText">
				<h1>Name: ${album.name}</h1>
				<h3>Artist: ${album.artist}</h3>
				<h4>Genre: ${album.genre}</h4>
				<h4>Price: $${album.price}</h4>
				<h4>Date: ${album.releaseDate}</h4>
				<p>${album.description}</p>
			</div>
			${user._id == album._ownerId
				? html`<div class="actionBtn">
						<a href="/edit/${album._id}" class="edit">Edit</a>
						<a
							@click=${onDelete}
							href="javascript:void(0)"
							class="remove"
							>Delete</a
						>
				  </div>`
				: ""}
		</div>
	</div>
</section>`;
export async function showDetails(ctx) {
	const id = ctx.params.id;
	const album = await getById(id);

	async function onDelete() {
		const choice = confirm("Are you sure you want to delete?");

		if (choice) {
			await delById(id);
			ctx.page.redirect("/");
		}
	}
	ctx.render(detailsTemplate(onDelete, ctx.user, album));
}
