import {html} from "../../node_modules/lit-html/lit-html.js";
import {getById, onEdit} from "../api/service.js";

const editTemplate = (album, edit) => html`<section id="edit">
	<div class="form">
		<h2>Edit Album</h2>
		<form @submit=${edit} class="edit-form">
			<input
				type="text"
				name="singer"
				id="album-singer"
				placeholder="${album.singer}"
				value="${album.singer}"
			/>
			<input
				type="text"
				name="album"
				id="album-album"
				placeholder="${album.album}"
				value="${album.album}"
			/>
			<input
				type="text"
				name="imageUrl"
				id="album-img"
				placeholder="${album.imageUrl}"
				value="${album.imageUrl}"
			/>
			<input
				type="text"
				name="release"
				id="album-release"
				placeholder="${album.release}"
				value="${album.release}"
			/>
			<input
				type="text"
				name="label"
				id="album-label"
				placeholder="${album.label}"
				value="${album.label}"
			/>
			<input
				type="text"
				name="sales"
				id="album-sales"
				placeholder="${album.sales}"
				value="${album.sales}"
			/>

			<button type="submit">post</button>
		</form>
	</div>
</section>`;
export async function showEdit(ctx) {
	const id = ctx.params.id;
	const album = await getById(id);
	async function edit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));

		if (
			data.singer == "" ||
			data.album == "" ||
			data.imageUrl == "" ||
			data.release == "" ||
			data.label == "" ||
			data.sales == ""
		) {
			alert("All fields needs to be filed!");
			return;
		}
		await onEdit(id, data);
		ctx.page.redirect("/dashboard/" + id);
	}
	ctx.render(editTemplate(album, edit));
}
