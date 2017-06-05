import React, {Component} from "react";

export default class Preloader extends Component {
	render() {
		return (
			<div>
				{
					this.props.stateAction === true ?
					<div>
						<img src="../../../images/25.svg" alt="preloader" />
					</div> : ""
				}
			</div>
		);
	}
}