import {html} from "../../node_modules/lit-html/lit-html.js";
import {onCreate} from "../api/service.js";

const createTemplate = (create) => html`
	<section id="create">
		<div class="form">
			<h2>Add Album</h2>
			<form @submit=${create} class="create-form">
				<input
					type="text"
					name="singer"
					id="album-singer"
					placeholder="Singer/Band"
				/>
				<input
					type="text"
					name="album"
					id="album-album"
					placeholder="Album"
				/>
				<input
					type="text"
					name="imageUrl"
					id="album-img"
					placeholder="Image url"
				/>
				<input
					type="text"
					name="release"
					id="album-release"
					placeholder="Release date"
				/>
				<input
					type="text"
					name="label"
					id="album-label"
					placeholder="Label"
				/>
				<input
					type="text"
					name="sales"
					id="album-sales"
					placeholder="Sales"
				/>

				<button type="submit">post</button>
			</form>
		</div>
	</section>
`;

export function showCreate(ctx) {
	async function create(event) {
		event.preventDefault();
		const data = Object.fromEntries(new FormData(event.currentTarget));

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
		await onCreate(data);
		ctx.page.redirect("/dashboard");
	}
	ctx.render(createTemplate(create));
}
