export function getUserData() {
	let serializedUser = sessionStorage.getItem("user");
	if (serializedUser) {
		const user = JSON.parse(serializedUser);
		return user;
	}
}
export function setUserData(data) {
	sessionStorage.setItem("user", JSON.stringify(data));
}
export function clearUserData() {
	sessionStorage.removeItem("user");
}
