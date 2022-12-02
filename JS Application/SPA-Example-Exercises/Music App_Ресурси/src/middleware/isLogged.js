import {getUserData} from "../api/util.js";

export function userMiddleware(ctx, next) {
	ctx.user = getUserData();
	next();
}
