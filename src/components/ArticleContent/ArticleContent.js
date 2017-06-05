import React, {Component} from "react";
import {connect} from "react-redux";

import FormAddComment from "./FormAddComment/FormAddComment.js";
import Comments from "./Comments/Comments.js";

import getArticles from "../../redux/actions/getArticles.js";

class ArticleContent extends Component {
	componentWillMount() {
		this.props.handleGetArticle(process.env.URL + "/api/article/" + this.props.params.id);
	}

	componentWillUnmount() {
		this.props.handleClearArticles();
	}

	render() {
		return (
			<div className="ArticleContent container">
				<p>{this.props.state.date}</p>
				<h2>{this.props.state.title}</h2>
				<p>{this.props.state.text}</p>
				<FormAddComment />
				<Comments comments={this.props.state.comments === undefined ? [] : this.props.state.comments} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		state: state.addArticles
	};
};

export default connect(
	mapStateToProps,
	dispatch => ({
		handleGetArticle: url => {
			dispatch(getArticles(url));
		},
		handleClearArticles: () => {
			dispatch({type: "CLEAR_ARTICLES"});
		}
	})
)(ArticleContent);