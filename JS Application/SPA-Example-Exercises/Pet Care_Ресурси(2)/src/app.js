import {page} from "./api/lib.js";
import {
	renderContent,
	renderMiddleware,
} from "./middleware/renderMiddleware.js";
import {showCatalog} from "./api/views/catalogView.js";
import {showHome} from "./api/views/homeView.js";
import {showLogin} from "./api/views/loginView.js";
import {showRegister} from "./api/views/registerView.js";
import {userMiddleware} from "./middleware/isUser.js";
import {logoutView} from "./api/views/logoutView.js";
import {showCreate} from "./api/views/createView.js";
import {showDetails} from "./api/views/detailsView.js";
import {showEdit} from "./api/views/editView.js";

page(userMiddleware);
page(renderMiddleware);
page(renderContent);
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/catalog", showCatalog);
page("/logout", logoutView);
page("/create", showCreate);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);
page.start();
