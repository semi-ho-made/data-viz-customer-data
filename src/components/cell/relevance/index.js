import React, { Component } from 'react';
import './styles.css';


class RelevanceDataCell extends Component {

	render() {
		const { score } = this.props;
		return (<div className={`cell-relevance`}>{score}</div>);
	}
}

export default RelevanceDataCell;