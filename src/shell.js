import React, { Component } from 'react';
import styles from './shell.css';

class App extends Component {
  render() {
    return (
      <div className={styles.body}>
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
