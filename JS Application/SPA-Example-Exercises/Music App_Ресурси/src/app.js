import {default as page} from "../node_modules/page/page.mjs";
import {userMiddleware} from "./middleware/isLogged.js";
import {renderContent, renderNavigation} from "./middleware/render.js";
import {showCatalog} from "./views/catalogView.js";
import {showCreate} from "./views/createView.js";
import {showDetails} from "./views/detailsView.js";
import {showEdit} from "./views/editView.js";
import {showHome} from "./views/homeView.js";
import {showLogin} from "./views/loginView.js";
import {logoutView} from "./views/logoutView.js";
import {showRegister} from "./views/registerView.js";
import {showSearch} from "./views/searchView.js";

page(userMiddleware);
page(renderNavigation);
page(renderContent);
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", logoutView);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/search", showSearch);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);
page.start();
