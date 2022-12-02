import {del, get, post, put} from "./api.js";

export async function getAllBooks() {
	return await get("/data/books?sortBy=_createdOn%20desc");
}
export async function getById(id) {
	return await get("/data/books/" + id);
}
export async function delById(id) {
	return await del("/data/books/" + id);
}
export async function onCreate(data) {
	return await post("/data/books", data);
}
export async function onEdit(id, data) {
	return await put("/data/books/" + id, data);
}
export async function getMyBooks(id) {
	return await get(
		"/data/books?where=_ownerId%3D%22" + id + "%22&sortBy=_createdOn%20desc"
	);
}
