import React, { Component } from 'react';
import Filler from './Filler';

export default class ProgressBar extends Component {
	render () {
		return (
			<div className="progress-bar">
				<Filler percentage={this.props.percentage}/>
			</div>
		);
	}
}