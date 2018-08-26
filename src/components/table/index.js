import React, { Component } from 'react';
import ReactTable from "react-table";
import DataCell  from '../cell';
import SentimentDataCell from '../cell/sentiment';
import RelevanceDataCell from '../cell/relevance';
import 'react-table/react-table.css';
import './styles.css';
import DATA from '../../data/testData.js';


class Table extends Component {
	static propTypes = {
	}

	static defaultProps = {
	}

	render() {

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
				data={DATA}
				columns={columns}
			/>
		</div>);
	}
}

export default Table;