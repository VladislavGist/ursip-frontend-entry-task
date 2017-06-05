import React, {Component} from "react";

import {connect} from "react-redux";

import "./filter.sass";

class Filter extends Component {

	onFindArticle = e => {
		this.props.onFindArticle(e.target.value);
	}

	render() {
		return (
			<input type="text" placeholder="Поиск по статьям" onChange={this.onFindArticle} className="filter" />
		);
	}
}

export default connect(
	state => ({state: state}),
	dispatch => ({
		onFindArticle: data => {
			dispatch({type: "FIND_ARTICLE", payload: data})
		}
	})
)(Filter);