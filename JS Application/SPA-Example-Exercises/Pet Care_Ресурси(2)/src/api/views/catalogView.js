import {getAllAnimal} from "../../service/catalogService.js";
import {html} from "../lib.js";

const animalTemplate = (animal) => html` <div class="animals-board">
	<article class="service-img">
		<img class="animal-image-cover" src="${animal.image}" />
	</article>
	<h2 class="name">${animal.name}</h2>
	<h3 class="breed">${animal.breed}</h3>
	<div class="action">
		<a class="btn" href="/catalog/${animal._id}">Details</a>
	</div>
</div>`;

const catalogTemplate = (animals) => html`
	<section id="dashboard">
		<h2 class="dashboard-title">Services for every animal</h2>
		<div class="animals-dashboard">
			${animals.length == 0
				? html`<div>
						<p class="no-pets">No pets in dashboard</p>
				  </div>`
				: animals.map((a) => animalTemplate(a))}
		</div>
	</section>
`;
export function showCatalog(ctx) {
	getAllAnimal().then((animal) => {
		ctx.render(catalogTemplate(animal));
	});
}
