import React, { Component } from 'react';
import './App.css';

import { AutoSearch } from './components/AutoSearch/AutoSearch';

export default class App extends Component {
  constructor() {
    super();
    this.countiresList = ['Albania', 'Algeria', 'Australia', 'Austria', 'Belgium', 'Belize', 'Benin',
    'India', 'Indonesia'];
    this.state = { 
      searchQuery: '',
      countires: [],
      searchedResults: []
    }
  }

  componentDidMount() {
    // initialize component state
    this.setState({ countires: this.countiresList });
  }
  render() {
       return (
      <div className="App">
        <AutoSearch onChange={ this.autoSearching } suggestions={this.state.searchQuery}
        searchedResults={this.state.searchedResults} completeMethod={this.completeMethod}></AutoSearch>
      </div>
    )
  }

  

  autoSearching = (result) => {
    // ES6 desturction 
    let { countires } = this.state;
    // filter countires
    if (result) {
      this.setState({ searchedResults: countires.filter(P => P.toLowerCase().includes(result.toLowerCase())) });
    } else {
      this.setState({ searchedResults: [] });
    }
    this.setState({ searchQuery: result });
  }

  completeMethod = () => {
    this.setState({ searchedResults: [] });
  }
}
