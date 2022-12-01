import {render} from "../api/lib.js";
import {renderNav} from "../api/views/navView.js";
const headerEl = document.querySelector("header");
const main = document.getElementById("content");

export function renderMiddleware(ctx, next) {
	render(renderNav(ctx), headerEl);
	next();
}
export function renderContent(ctx, next) {
	ctx.render = (TemplateResult) => {
		render(TemplateResult, main);
	};
	next();
}
