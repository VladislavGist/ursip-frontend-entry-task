import React, {Component} from "react";

import Article from "../Article/Article.js";
import Preloader from "../Preloader/Preloader.js";

//redux
import {connect} from "react-redux";

import "./ArticlesList.sass";

//actions
import getArticles from "../../redux/actions/getArticles.js";

class ArticlesList extends Component {
	componentWillMount() {
		this.props.handleGetArticles(process.env.URL + "/api/article?limit=100&offset=1");
	}

	render() {
		return (
			<div className="ArticlesList">
				<h1>Статьи</h1>
				<div className="listItems">
					{
						this.props.articlesList.map(elem => {
							return (
								<Article key={elem.id} id={elem.id} date={elem.date} title={elem.title} />
							);
						})
					}
					<Preloader stateAction={this.props.state.preloaders.allArticlesLoader} />
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		articlesList: state.addArticles.filter(elem => elem.title.includes(state.filterArticles) || elem.date.includes(state.filterArticles)),
		state: state
	}),
	dispatch => ({
		handleGetArticles: url => {
			dispatch(getArticles(url));
		}
	})
)(ArticlesList);