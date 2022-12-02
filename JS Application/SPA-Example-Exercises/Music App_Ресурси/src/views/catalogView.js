import {html} from "../../node_modules/lit-html/lit-html.js";
import {getAllAlbum} from "../api/service.js";
const albumTemplate = (album, user) => html`<div class="card-box">
	<img src="${album.imgUrl}" />
	<div>
		<div class="text-center">
			<p class="name">Name: ${album.name}</p>
			<p class="artist">Artist: ${album.artist}</p>
			<p class="genre">Genre: ${album.genre}</p>
			<p class="price">Price: ${album.price}</p>
			<p class="date">Release Date: ${album.releaseDate}</p>
		</div>
		<div class="btn-group">
			${user
				? html`<a href="/catalog/${album._id}" id="details">Details</a>`
				: ""}
		</div>
	</div>
</div>`;

const catalogTemplate = (albums, user) => html`
	<section id="catalogPage">
		<h1>All Albums</h1>
		${albums.length == 0
			? html`<p>No Albums in Catalog!</p>`
			: albums.map((album) => albumTemplate(album, user))}
	</section>
`;
export async function showCatalog(ctx) {
	const albums = await getAllAlbum();

	ctx.render(catalogTemplate(albums, ctx.user));
}
