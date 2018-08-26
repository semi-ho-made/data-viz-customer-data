import React, { Component } from 'react';
import './styles.css';


class DataCell extends Component {

	render() {
		const { data } = this.props;
		return (<div className={`cell-data`}>{data}</div>);
	}
}

export default DataCell;