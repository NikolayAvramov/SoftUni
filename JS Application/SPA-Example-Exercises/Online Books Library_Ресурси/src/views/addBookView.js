import {html} from "../../node_modules/lit-html/lit-html.js";
import {onCreate} from "../api/service.js";
const addTemplate = (create) => html`
	<section id="create-page" class="create">
		<form @submit=${create} id="create-form" action="" method="">
			<fieldset>
				<legend>Add new Book</legend>
				<p class="field">
					<label for="title">Title</label>
					<span class="input">
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Title"
						/>
					</span>
				</p>
				<p class="field">
					<label for="description">Description</label>
					<span class="input">
						<textarea
							name="description"
							id="description"
							placeholder="Description"
						></textarea>
					</span>
				</p>
				<p class="field">
					<label for="image">Image</label>
					<span class="input">
						<input
							type="text"
							name="imageUrl"
							id="image"
							placeholder="Image"
						/>
					</span>
				</p>
				<p class="field">
					<label for="type">Type</label>
					<span class="input">
						<select id="type" name="type">
							<option value="Fiction">Fiction</option>
							<option value="Romance">Romance</option>
							<option value="Mistery">Mistery</option>
							<option value="Classic">Clasic</option>
							<option value="Other">Other</option>
						</select>
					</span>
				</p>
				<input class="button submit" type="submit" value="Add Book" />
			</fieldset>
		</form>
	</section>
`;
export function showCreate(ctx) {
	async function create(event) {
		event.preventDefault();
		const data = Object.fromEntries(new FormData(event.currentTarget));

		if (
			data.title == "" ||
			data.description == "" ||
			data.imageUrl == "" ||
			data.type == ""
		) {
			alert("All fields needs to be filed!");
			return;
		}
		await onCreate(data);
		ctx.page.redirect("/dashboard");
	}
	ctx.render(addTemplate(create));
}
