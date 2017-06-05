import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";

import App from "./App.js";
import ArticleContent from "./components/ArticleContent/ArticleContent.js";
import ArticleList from "./components/ArticlesList/ArticlesList.js";

import {store, history} from "./redux/store.js";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} />
			<Route path="/:id" component={ArticleContent} />
		</Router>
	</Provider>,
	document.getElementById("root")
);