import React, {Component} from "react";

import "./components/ReactPaginate/reactPaginate.sass";

import {connect} from "react-redux";

//actions
import getArticles from "./redux/actions/getArticles.js";

import "./App.sass";

import "./styles/styles.sass";
import "./styles/base.sass";

import Filter from "./components/Filter/Filter.js";
import ArticleList from "./components/ArticlesList/ArticlesList.js";
import ReactPaginate from 'react-paginate';
import FormAddArticle from "./components/FormAddArticle/FormAddArticle.js";

class App extends Component {

	clickPage = e => {
		this.props.handleGetArticles(`${process.env.URL}/api/article?limit=100&offset=${e.selected}`);
	}

	render() {
		return (
			<div className="App container">
				<Filter />
				<ArticleList />
				<ReactPaginate 
					pageCount={6}
					onPageChange={this.clickPage} 
					initialPage={0}
					containerClassName="reactPaginate"
					pageClassName="paginateLi"
				/>
				<FormAddArticle />
			</div>
		);
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		handleGetArticles: url => {
			dispatch(getArticles(url));
		}
	})
)(App);