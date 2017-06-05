import React, {Component} from "react";

import {connect} from "react-redux";

import addArticle from "../../redux/actions/addArticle.js";

import "./FormAddArticle.sass";

class FormAddArticle extends Component {

	addArticle = () => {
		let input = document.querySelector(".formAddArticleTextInput").value, 
			textarea = document.querySelector(".formAddArticleTextArea").value;

		this.props.handleAddArticle(process.env.URL + "/api/article", input, textarea);
	}

	render() {
		return (
			<div className="FormAddArticle">
				<h2>Добавить статью</h2>
				<input type="text" placeholder="Название статьи" className="formAddArticleTextInput" />
				<textarea placeholder="Текст статьи" className="formAddArticleTextArea" />
				<button onClick={this.addArticle}>Добавить</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		state: state
	}),
	dispatch => ({
		handleAddArticle: (url, input, textarea) => {
			dispatch(addArticle(url, input, textarea));
		}
	})
)(FormAddArticle);