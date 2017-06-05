import React, {Component} from "react";

import {Link} from "react-router";

import {connect} from "react-redux";

class Article extends Component {
	removeArticleBtn = () => {
		this.props.handleRemoveArticle(this.props.id);
	}

	render() {
		return (
			<div className="Article">
				<div className="top">
					<p>{this.props.date}</p>
					<button onClick={this.removeArticleBtn}>Удалить статью</button>
				</div>
				<Link to={`/${this.props.id}`}>{this.props.title}</Link>
			</div>
		);
	}
}

export default connect(
	state => ({

	}),
	dispatch => ({
		handleRemoveArticle: data => {
			dispatch({type: "REMOVE_ARTICLE", payload: data})
		}
	})
)(Article);
