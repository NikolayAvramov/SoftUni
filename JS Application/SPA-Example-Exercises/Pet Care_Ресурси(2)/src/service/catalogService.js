import {del, get, post, put} from "../api/api.js";

export async function getAllAnimal() {
	return await get("/data/pets?sortBy=_createdOn%20desc&distinct=name");
}
export async function getById(id) {
	return await get("/data/pets/" + id);
}
export async function delById(id) {
	return await del("/data/pets/" + id);
}
export async function onCreate(data) {
	return await post("/data/pets", data);
}
export async function onEdit(id, data) {
	return await put("/data/pets/" + id, data);
}
