import {html} from "../lib.js";
import {getById, onEdit} from "../../service/catalogService.js";
const editTemplate = (pet, edit) => html`<section id="editPage">
	<form @submit=${edit} class="editForm">
		<img src="${pet.image}" />
		<div>
			<h2>Edit PetPal</h2>
			<div class="name">
				<label for="name">pet</label>
				<input name="name" id="name" type="text" value="${pet.name}" />
			</div>
			<div class="breed">
				<label for="breed">Breed:</label>
				<input
					name="breed"
					id="breed"
					type="text"
					value="${pet.breed}"
				/>
			</div>
			<div class="Age">
				<label for="age">Age:</label>
				<input name="age" id="age" type="text" value="${pet.age}" />
			</div>
			<div class="weight">
				<label for="weight">Weight:</label>
				<input
					name="weight"
					id="weight"
					type="text"
					value="${pet.weight}"
				/>
			</div>
			<div class="image">
				<label for="image">Image:</label>
				<input
					name="image"
					id="image"
					type="text"
					value="${pet.image}"
				/>
			</div>
			<button class="btn" type="submit">Edit Pet</button>
		</div>
	</form>
</section>`;
export async function showEdit(ctx) {
	const id = ctx.params.id;
	const pet = await getById(id);

	async function edit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		console.log(data);
		if (
			data.name == "" ||
			data.breed == "" ||
			data.age == "" ||
			data.weight == "" ||
			data.image == ""
		) {
			return;
		}
		await onEdit(id, data);
		ctx.page.redirect("/");
	}

	ctx.render(editTemplate(pet, edit));
}
