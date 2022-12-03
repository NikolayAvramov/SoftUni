import {del, get, post, put} from "./api.js";

export async function getAllAlbum() {
	return await get("/data/albums?sortBy=_createdOn%20desc");
}
export async function getById(id) {
	return await get("/data/albums/" + id);
}
export async function delById(id) {
	return await del("/data/albums/" + id);
}
export async function onCreate(data) {
	return await post("/data/albums", data);
}
export async function onEdit(id, data) {
	return await put("/data/albums/" + id, data);
}
