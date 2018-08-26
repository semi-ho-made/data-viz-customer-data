import React, { Component } from 'react';
// import Graph from './components/graph';
// import Table from './components/table';
import GraphAndTable from './container/graphAndTable';
import './shell.css';

class App extends Component {


  render() {
    return (
      <div className={'body'}>
        <header className={'header'}>
          <h1 className={'title'}>Customer Comments</h1>
        </header>
        <GraphAndTable />
      </div>
    );
  }
}

export default App;
