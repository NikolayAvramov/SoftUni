import {getUserData} from "../util.js";

export function userMiddleware(ctx, next) {
	ctx.user = getUserData();
	next();
}
