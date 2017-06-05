import React, {Component} from "react";

import "./FormAddComment.sass";

import {connect} from "react-redux";

import actionAddComment from "../../../redux/actions/actionAddComment.js";

class FormAddComment extends Component {
	addComment = () => {
		let textarea = document.querySelector(".formAddCommentTextarea").value;
		this.props.handleAddComment(`${process.env.URL}/api/comment`, textarea, "anonim", this.props.addArticlesId);
	}

	render() {
		return (
			<div className="FormAddComment">
				<h3>Добаить комментарий</h3>
				<textarea placeholder="Текст комментария" className="formAddCommentTextarea" />
				<button onClick={this.addComment}>Добавить</button>
			</div>
		);
	}
}

let mapStateToProps = (state, ownProps) => {
	return {
		addArticlesId: state.addArticles.id
	};
}

export default connect(
	mapStateToProps,
	dispatch => ({
		handleAddComment: (url, text, user, article) => {
			dispatch(actionAddComment(url, text, user, article));
		}
	})
)(FormAddComment);