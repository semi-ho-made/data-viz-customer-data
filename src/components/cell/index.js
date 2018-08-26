import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class DataCell extends Component {

	render() {
		const { data, type } = this.props;
		return (<div class={`cell-data`}>{data}</div>);
	}
}

export default DataCell;