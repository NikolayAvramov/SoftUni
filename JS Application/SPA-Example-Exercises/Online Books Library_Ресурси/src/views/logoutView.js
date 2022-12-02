import {logout} from "../api/authenification.js";

export async function logoutView(ctx) {
	logout();
	ctx.page.redirect("/");
}
