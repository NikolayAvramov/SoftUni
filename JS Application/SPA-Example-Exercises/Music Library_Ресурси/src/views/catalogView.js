import {html} from "../../node_modules/lit-html/lit-html.js";
import {getAllAlbum} from "../api/service.js";
const albumTemplate = (album, user) => html`<li class="card">
	<img src="${album.imageUrl}" alt="travis" />
	<p>
		<strong>Singer/Band: </strong
		><span class="singer">${album.singer}</span>
	</p>
	<p>
		<strong>Album name: </strong><span class="album">${album.album}</span>
	</p>
	<p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
	<a class="details-btn" href="/dashboard/${album._id}">Details</a>
</li>`;

const catalogTemplate = (albums, user) => html`
	<section id="dashboard">
		<h2>Albums</h2>
		<ul class="card-wrapper">
			${albums.length == 0
				? html`<h2>There are no albums added yet.</h2>`
				: albums.map((album) => albumTemplate(album))}
		</ul>
	</section>
`;
export async function showCatalog(ctx) {
	const albums = await getAllAlbum();

	ctx.render(catalogTemplate(albums, ctx.user));
}
