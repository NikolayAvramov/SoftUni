import {html} from "../../node_modules/lit-html/lit-html.js";
import {delById, getById} from "../api/service.js";
import {default as page} from "../../node_modules/page/page.mjs";
const detailsTemplate = (onDelete, user, album) => html`<section id="details">
	<div id="details-wrapper">
		<p id="details-title">Album Details</p>
		<div id="img-wrapper">
			<img src="${album.imageUrl}" alt="example1" />
		</div>
		<div id="info-wrapper">
			<p
				><strong>Band:</strong
				><span id="details-singer">${album.singer}</span></p
			>
			<p>
				<strong>Album name:</strong
				><span id="details-album">${album.album}</span>
			</p>
			<p
				><strong>Release date:</strong
				><span id="details-release">${album.release}</span></p
			>
			<p
				><strong>Label:</strong
				><span id="details-label">${album.label}</span></p
			>
			<p
				><strong>Sales:</strong
				><span id="details-sales">${album.sales}</span></p
			>
		</div>
		<div id="likes">Likes: <span id="likes-count">0</span></div>

		<!--Edit and Delete are only for creator-->
		<div id="action-buttons">
			${user && album._ownerId == user._id
				? html`<a href="/edit/${album._id}" id="edit-btn">Edit</a>
						<a
							@click=${onDelete}
							href="javascript:void(0)"
							id="delete-btn"
							>Delete</a
						>`
				: html`<a href="" id="like-btn">Like</a>`}
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
			page.redirect("/dashboard");
		}
	}
	ctx.render(detailsTemplate(onDelete, ctx.user, album));
}
