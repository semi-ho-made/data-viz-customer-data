import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sentimentColorMapping } from '../../../utils/sentimentColorMapping.js';
import './styles.css';


class SentimentDataCell extends Component {

	render() {
		const { score } = this.props;
		return (<div class={`cell-sentiment cell-color-${score}`} style={{backgroundColor: sentimentColorMapping(score)}}>{score}</div>);
	}
}

export default SentimentDataCell;