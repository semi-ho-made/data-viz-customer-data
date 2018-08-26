import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class RelevanceDataCell extends Component {

	render() {
		const { score } = this.props;
		return (<div class={`cell-relevance`}>{score}</div>);
	}
}

export default RelevanceDataCell;