import React, {Component} from "react";
import $ from "jquery";

import "./comments.sass";

import Preloader from "../../Preloader/Preloader.js";

//redux
import {connect} from "react-redux";

import actionLoadComments from "../../../redux/actions/actionLoadComments.js";

class Comments extends Component {

	componentWillUnmount() {
		this.props.hideComments();
	}

	//при клике на кнопку показать комментарии
	showComments = () => {
		let idArticle = this.props.state.addArticles.id;
		$(".commentsList").show();
		this.props.showComments();
		this.props.handleLoadComments(`${process.env.URL}/api/comment?article=${idArticle}`);
	}

	//при клике на кнопку скрыть комментарии
	hideComments = () => {
		this.props.hideComments();
		$(".commentsList").hide();
	}

	render() {
		return (
			<div className="Comments">
				{
					this.props.state.toggleBtnComment === true ?
					<button onClick={this.showComments} className="toggleBtnComments">Показать комментарии</button> :
					<button onClick={this.hideComments} className="">Скрыть комментарии</button>
				}
				<Preloader stateAction={this.props.state.preloaders.commentsLoader} />
				<div className="commentsList">
					{
						this.props.state.addArticles.loadComments === undefined ? "" :
						this.props.state.addArticles.loadComments.map(elem => {
							return (
								<div key={elem.id} className="comment">
									<p className="commentName">{elem.user}</p>
									<p>{elem.text}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		state: state
	}),
	dispatch => ({
		handleLoadComments: id => {
			dispatch(actionLoadComments(id));
		},
		showComments: () => {
			dispatch({type: "SHOW_COMMENTS"});
		},
		hideComments: () => {
			dispatch({type: "HIDE_COMMENTS"});
		}
	})
)(Comments);