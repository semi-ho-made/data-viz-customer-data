import React, { Component } from 'react';
import ReactTable from "react-table";
import DataCell  from '../cell';
import SentimentDataCell from '../cell/sentiment';
import RelevanceDataCell from '../cell/relevance';

import 'react-table/react-table.css';
import './styles.css';


class Table extends Component {
	// static propTypes = {
	// }

	// static defaultProps = {
	// }

	constructor(props) {
		super(props);
		this.onSortedChangeCallback = this.onSortedChangeCallback.bind(this);
	}

	onSortedChangeCallback(newSorted, column, shiftKey) {
		const { renderGraphCallback } = this.props;

		// console.log('TSORTED: ', newSorted, newSorted && newSorted[0] && newSorted[0].id, column);
		const { id } = newSorted[0];
		renderGraphCallback(id);
	}

	render() {
		const {data} = this.props;
		const columns = [{
				Header: 'sentiment',
				accessor: 'sentiment_score', // String-based value accessors!
				Cell: props => <SentimentDataCell score={props.value}/>
			}, {
				Header: 'relevance',
				accessor: 'relevance_score',
				Cell: props => <RelevanceDataCell score={props.value}/>
			}, {
				Header: 'time',
				accessor: 'time_stamp',
				Cell: props => <DataCell data={props.value}/>
			}, {
				Header: 'city',
				accessor: 'city',
				Cell: props => <DataCell data={props.value}/>
			}, {
				Header: 'country',
				accessor: 'country',
				Cell: props => <DataCell data={props.value}/>
			}, {
				Header: 'company',
				accessor: 'company',
				Cell: props => <DataCell data={props.value}/>
			}, {
				Header: 'sector',
				accessor: 'sector',
				Cell: props => <DataCell data={props.value}/>
			}, {
				Header: 'comment',
				accessor: 'body',
				Cell: props => <DataCell data={props.value}/>
			}]
		return (<div>
			<ReactTable
				data={data}
				columns={columns}
				onSortedChange={this.onSortedChangeCallback}
			/>
		</div>);
	}
}

export default Table;