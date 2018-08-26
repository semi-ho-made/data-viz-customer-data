import React, { Component } from 'react';
import Table from './components/table';
import styles from './shell.css';

class App extends Component {
  render() {
    return (
      <div class={'body'}>
        <header class={'header'}>
          <h1 class={'title'}>Customer Comments</h1>
        </header>
        <Table />
      </div>
    );
  }
}

export default App;
