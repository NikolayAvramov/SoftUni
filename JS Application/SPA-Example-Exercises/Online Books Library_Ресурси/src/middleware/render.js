import {render} from "../../node_modules/lit-html/lit-html.js";
import {renderNav} from "../views/navView.js";

const headerEl = document.getElementById("site-header")
const main = document.getElementById("site-content");
export function renderNavigation(ctx, next) {
	render(renderNav(ctx), headerEl);
	next();
}
export function renderContent(ctx, next) {
	ctx.render = (TemplateResult) => {
		render(TemplateResult, main);
	};
	next();
}
