import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import './styles.css';

class Graph extends Component {
	static propTypes = {
		data: PropTypes.array,
		title: PropTypes.string
	}

	static defaultProps = {
		data: [],
		title: ''
	}

	render() {
		const { data, title, xAxisIsOrdinal } = this.props;
		const xAxistType = (xAxisIsOrdinal)? 'ordinal': 'linear';
		return (
			<div className={'graphContainer'}>
				<h2>{title}</h2>
				<div className={'graph'}>
					<XYPlot height={300} width={1280} xType={xAxistType}>
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis />
						<YAxis />
						<VerticalBarSeries data={data} />
					</XYPlot>
				</div>
			</div>
		);
	}
}

export default Graph;