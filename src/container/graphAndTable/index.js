import React, { Component } from 'react';
import Graph from '../../components/graph';
import Table from '../../components/table';
import { getTotals, 
  getSentimentPlotPoints, getRelevancePlotPoints, getCompanyPlotPoints,
  getCityPlotPoints, getCountryPlotPoints, getSectorPlotPoints } from '../../utils/dataManipulation';

import DATA from '../../data/testData.js';

class GraphAndTable extends Component {


  constructor(props) {
    super(props);

    this.renderGraph = this.renderGraph.bind(this);

    this.state = {
      graph_data: [
        {x: 0, y: 8},
        {x: 1, y: 2},
        {x: 2, y: 0}
      ],
      graph_title: 'graph title',
      newXAxisIsOrdinal: false
    }
  }

  renderGraph(graphId) {
    let newDataSet = this.state.graph_data;
    let newTitle = this.state.graph_title;
    let newXAxisIsOrdinal = this.state.xAxisIsOrdinal;
    let totals;

    switch(graphId) {
      case ('sentiment_score'):
        newXAxisIsOrdinal = false;
        totals = getTotals(DATA, 'sentiment_score');
        console.log('totals: ', totals);
        newDataSet = getSentimentPlotPoints(totals);
        newTitle = 'sentiment totals';

        break;
      case ('relevance_score'):
        newXAxisIsOrdinal = false;
        totals = getTotals(DATA, 'relevance_score');
        newDataSet = getRelevancePlotPoints(totals);
        newTitle = 'relevance score totals';

        break;
      case ('time'):
        // newXAxisIsOrdinal = false;
        // totals = getTotals(DATA, 'time');
        // newDataSet = getCityPlotPoints(totals);
        // newTitle = 'popular cities';
        break;
      case ('city'):
        totals = getTotals(DATA, 'city');
        newDataSet = getCityPlotPoints(totals);
        newTitle = 'popular cities';
        newXAxisIsOrdinal = true;
        break;
      case ('country'):
        totals = getTotals(DATA, 'country');
        newDataSet = getCountryPlotPoints(totals);
        newTitle = 'popular countries';
        newXAxisIsOrdinal = true;
        break;
      case ('company'):
        totals = getTotals(DATA, 'company');
        newDataSet = getCompanyPlotPoints(totals);
        newTitle = 'popular companies';
        newXAxisIsOrdinal = true;

        break;
      case ('sector'):
        totals = getTotals(DATA, 'sector');
        newDataSet = getSectorPlotPoints(totals);
        newTitle = 'popular sectors';
        newXAxisIsOrdinal = true;
        break;
      default:
        break;
    }

    this.setState({
      graph_data : newDataSet,
      graph_title : newTitle,
      xAxisIsOrdinal : newXAxisIsOrdinal
    });
  }

  render() {
    return (
      <div>
        <Graph data={this.state.graph_data} title={this.state.graph_title} xAxisIsOrdinal={this.state.xAxisIsOrdinal} />
        <Table data={DATA} renderGraphCallback={this.renderGraph} />
      </div>
    );
  }
}

export default GraphAndTable;
