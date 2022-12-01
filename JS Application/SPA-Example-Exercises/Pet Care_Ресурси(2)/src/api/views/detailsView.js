import {delById, getById} from "../../service/catalogService.js";
import {html} from "../lib.js";

const detailsTemplate = (pet, user, onDelete, donate) => html` <section
	id="detailsPage"
>
	<div class="details">
		<div class="animalPic">
			<img src="${pet.image}" />
		</div>
		<div>
			<div class="animalInfo">
				<h1>Name: ${pet.name}</h1>
				<h3>Breed: ${pet.breed}</h3>
				<h4>Age: ${pet.age}</h4>
				<h4>Weight: ${pet.weight}</h4>
				<h4 class="donation">Donation: 0$</h4>
			</div>
			${user
				? html` <div class="actionBtn">
						${user._id == pet._ownerId
							? html`<a href="/edit/${pet._id}" class="edit"
										>Edit</a
									>
									<a
										@click=${onDelete}
										href="javascript:void(0)"
										class="remove"
										>Delete</a
									>`
							: html`<a
									@click=${donate}
									href="javascript:void(0)"
									class="donate"
									>Donate</a
							  >`}</div
				  >`
				: ""}
		</div>
	</div>
</section>`;
export async function showDetails(ctx) {
	const id = ctx.params.id;
	const pet = await getById(id);

	ctx.render(detailsTemplate(pet, ctx.user, onDelete, donate));
	function donate() {
		const donEl = document.querySelector(".donation");
		if (donEl) {
			donEl.textContent = "Donation: 500$";
		}
	}
	async function onDelete() {
		const choice = confirm("Are you sure you want to delete?");

		if (choice) {
			await delById(id);
			ctx.page.redirect("/");
		}
	}
}
// Object { _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8", name: "Max", breed: "Shiba Inu", age: "2 years", weight: "5kg", image: "../images/Shiba-Inu.png", _createdOn: 1617194128618, _id: "ff436770-76c5-40e2-b231-77409eda7a61" }
// catalogView.js:23:34
