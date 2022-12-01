import {onCreate} from "../../service/catalogService.js";
import {html} from "../lib.js";

const createTemplate = (create) => html`<section id="createPage">
	<form @submit=${create} class="createForm">
		<img src="./images/cat-create.jpg" />
		<div>
			<h2>Create PetPal</h2>
			<div class="name">
				<label for="name">Name:</label>
				<input name="name" id="name" type="text" placeholder="Max" />
			</div>
			<div class="breed">
				<label for="breed">Breed:</label>
				<input
					name="breed"
					id="breed"
					type="text"
					placeholder="Shiba Inu"
				/>
			</div>
			<div class="Age">
				<label for="age">Age:</label>
				<input name="age" id="age" type="text" placeholder="2 years" />
			</div>
			<div class="weight">
				<label for="weight">Weight:</label>
				<input
					name="weight"
					id="weight"
					type="text"
					placeholder="5kg"
				/>
			</div>
			<div class="image">
				<label for="image">Image:</label>
				<input
					name="image"
					id="image"
					type="text"
					placeholder="./image/dog.jpeg"
				/>
			</div>
			<button class="btn" type="submit">Create Pet</button>
		</div>
	</form>
</section>`;
export function showCreate(ctx) {
	async function create(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));

		if (
			data.name == "" ||
			data.breed == "" ||
			data.age == "" ||
			data.weight == "" ||
			data.image == ""
		) {
			return;
		}
		await onCreate(data);
		ctx.page.redirect("/");
	}

	ctx.render(createTemplate(create));
}
