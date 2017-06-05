import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import addArticles from "./addArticles.js";
import filterArticles from "./filterArticles.js";
import preloaders from "./preloaders.js";
import toggleBtnComment from "./toggleBtnComment.js";

export default combineReducers({
	routing: routerReducer,
	addArticles,
	filterArticles,
	preloaders,
	toggleBtnComment
});