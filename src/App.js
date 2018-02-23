import React, { Component } from 'react';
import logo from './logo.svg';
import key from './key'
import AnimalContainer from './AnimalContainer'
import './App.css';

class App extends Component {

  state = {
    animals: []
  }

  fetchHelper = () => {
    fetch(`http://apiv3.iucnredlist.org/api/v3/country/getspecies/US?token=${key}`)
    .then(res => res.json())
    .then(data => this.setState({animals: data}))
  }

  componentDidMount = () => {
    this.fetchHelper()
  }

  render() {
    return (
      <div className="App">
        <AnimalContainer animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
